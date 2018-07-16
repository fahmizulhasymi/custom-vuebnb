<?php

namespace App\Services;

use App\Listing;

class ListingService
{
    public static function get_listing_summaries()
    {
        $collection = Listing::all(['id', 'address', 'city', 'country', 'title', 'price_per_night']);
        $collection->transform(function ($listing) {
            $listing->thumb = asset('images/1/Image_1_thumb.jpg');
            return $listing;
        });
        return collect(['listings' => $collection->toArray()]);
    }

    public static function get_listing($listing)
    {
        $model = $listing->toArray();
        $model = self::add_image_urls($model, $listing->id);
        return collect(['listing' => $model]);
    }

    public static function add_image_urls($model, $id)
    {
        for ($i = 1; $i <=4; $i++) {
            $model['image_' . $i] = asset('images/1/Image_' . $i . '.jpg');
        }
        return $model;
    }
}
