<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\Services\ListingService;

class ListingController extends Controller
{
    public function index(Request $request)
    {
        $data = ListingService::get_listing_summaries();
        $data = $this->add_meta_data($data, $request);
        return view('app.listing', ['data' => $data]);
    }

    public function show(Request $request, Listing $listing)
    {
        $data = ListingService::get_listing($listing);
        $data = $this->add_meta_data($data, $request);
        return view('app.listing', ['data' => $data]);
    }

    public function saved(Request $request)
    {
        return $this->index($request);
    }

    private function add_meta_data($collection, $request)
    {
        return $collection->merge([ 'path' => $request->getPathInfo()]);
    }
}
