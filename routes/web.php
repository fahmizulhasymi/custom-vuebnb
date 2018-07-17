<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'ListingController@index')->name('home');
Route::get('/saved', 'ListingController@saved')->name('saved');
Route::get('/listing/{listing}', 'ListingController@show')->name('listing-detail');
Route::get('/dashboard', 'HomeController@index')->name('dashboard');
