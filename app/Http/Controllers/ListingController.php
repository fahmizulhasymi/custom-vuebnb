<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;
use App\Services\ListingService;

class ListingController extends Controller
{
    public function index()
    {
        return view('landing');
    }

    public function show(Listing $listing)
    {
        $model = $listing->toArray();
        $model = ListingService::add_image_urls($model, $listing->id);
        return view('listing.detail', [ 'model' => $model ]);
    }
}
