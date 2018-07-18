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

Route::get('/', 'AppController@index')->name('home');
Route::get('/personal/saved', 'AppController@saved')->name('saved')->middleware('auth');
Route::get('/listing/{listing}', 'AppController@show')->name('listing-detail');
Route::get('/dashboard', 'AppController@dashboard')->name('dashboard');
