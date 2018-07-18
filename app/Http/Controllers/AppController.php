<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Listing;
use App\Services\ListingService;

class AppController extends Controller
{
    public function index(Request $request)
    {
        $data = ListingService::get_listing_summaries();
        $data = $this->add_meta_data($data, $request);
        return $this->viewOfApp($data);
    }

    public function show(Request $request, Listing $listing)
    {
        $data = ListingService::get_listing($listing);
        $data = $this->add_meta_data($data, $request);
        return $this->viewOfApp($data);
    }

    public function saved(Request $request)
    {
        return $this->index($request);
    }

    private function add_meta_data($collection, $request)
    {
        return $collection->merge([
            'path' => $request->getPathInfo(),
            'auth' => Auth::check(),
            'authData' => [
                'saved'=> Auth::check() ? Auth::user()->saved : []
            ]
        ]);
    }

    private function viewOfApp($data)
    {
        if (Auth::check()) {
            return view('app.app', ['data' => $data]);
        } else {
            return view('app.web', ['data' => $data]);
        }
    }
}
