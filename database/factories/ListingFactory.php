<?php

use Faker\Generator as Faker;

$factory->define(App\Listing::class, function (Faker $faker) {
    return [
        'title' => $faker->streetName,
        'address' => $faker->address,
        'city' => $faker->city,
        'country' => $faker->country,
        'about' => $faker->realText(400, 2),

        'amenity_wifi' => $faker->boolean(50),
        'amenity_pets_allowed' => $faker->boolean(50),
        'amenity_tv' => $faker->boolean(50),
        'amenity_kitchen' => $faker->boolean(50),
        'amenity_breakfast' => $faker->boolean(50),
        'amenity_laptop' => $faker->boolean(50),

        'price_per_night' => $faker->randomNumber(4),
        'price_extra_people' => $faker->randomNumber(4),
        'price_weekly_discount' => $faker->randomNumber(4),
        'price_monthly_discount' => $faker->randomNumber(4),
    ];
});
