<?php

use App\Http\Controllers\GenerateController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SignController;
use App\Http\Controllers\VerifyController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [HomeController::class, 'index']);

Route::get('/generate', [GenerateController::class, 'index'])->name('generate');
Route::post('/generate', [GenerateController::class, 'create'])->name('generate.create');

Route::get('/sign', [SignController::class, 'index'])->name('sign');
Route::post('/sign', [SignController::class, 'create'])->name('sign.create');

Route::get('/verify', [VerifyController::class, 'index'])->name('verify');
Route::post('/verify', [VerifyController::class, 'create'])->name('verify.create');
