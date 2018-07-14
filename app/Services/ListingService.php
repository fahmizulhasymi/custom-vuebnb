<?php

namespace App\Services;

use App\Listing;

class ListingService
{
    public static function add_image_urls($model, $id)
    {
        for ($i = 1; $i <=4; $i++) {
            $model['image_' . $i] = asset(
 'images/' . $id . '/Image_' . $i . '.jpg'
 );
        }
        return $model;
    }
}
