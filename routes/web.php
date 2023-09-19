<?php

use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function (): void {
    // Dashboard
    Route::get('/pro-admin', 'DashboardController@test')->name('pro-admin.pro-admin.index');
    Route::post('/pro-admin', 'DashboardController@test')->name('pro-admin.pro-admin.index');

    // Notifications
    Route::get('/notifications', 'NotificationsController@index')->name('pro-admin.Notifications.index');

    // Failed jobs
    Route::get('/jobs', 'FailedJobsController@fetchData')->name('pro-admin.FailedJobs.fetchData');

    // Logs
    Route::get('/logs', 'LogsController@fetchData')->name('pro-admin.Logs.fetchData');
});

// Catch-all Route...
Route::get('/{view?}', 'DashboardController@index')->where('view', '(.*)')->name('pro-admin.index');
