<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['namespace' => 'App\Http\Controllers', 'middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

// todo jwt token
//Route::group(['namespace' => 'App\Http\Controllers\User', 'prefix' => 'users', 'middleware' => 'auth:api], function () {
//    Route::post('/', 'StoreController');
//});

Route::group(['namespace' => 'App\Http\Controllers\User', 'prefix' => 'users'], function () {
    Route::post('/', 'StoreController');
});

Route::group(['namespace' => 'App\Http\Controllers\Fruit', 'prefix' => 'fruits'], function () {
    Route::get('/', 'IndexController');
});
