<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', 'API\ListingController@index')->name('base-api');
Route::get('/saved', 'API\ListingController@index');
Route::resource('listing', 'API\ListingController');
Route::post('/user/toggle_saved', 'API\UserController@toggleSaved')->middleware('auth:api');
