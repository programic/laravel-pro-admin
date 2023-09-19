<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Pro Admin Domain
    |--------------------------------------------------------------------------
    |
    | This is the subdomain where Pro Admin Dashboard will be accessible from. If this
    | setting is null, Pro Admin will reside under the same domain as the
    | application. Otherwise, this value will serve as the subdomain.
    |
    */

    'domain' => env('PRO_ADMIN_DOMAIN', null),

    /*
    |--------------------------------------------------------------------------
    | Pro Admin Path
    |--------------------------------------------------------------------------
    |
    | This is the URI path where Pro Admin Dashboard will be accessible from. Feel free
    | to change this path to anything you like. Note that the URI will not
    | affect the paths of its internal API that aren't exposed to users.
    |
    */

    'path' => env('PRO_ADMIN_PATH', 'pro-admin'),

    /*
    |--------------------------------------------------------------------------
    | Pro Admin appName
    |--------------------------------------------------------------------------
    |
    | This is the app name of the app where you use this dashboard in.
    | This name will be shown inside the dashboard to make it feel more custom.
    |
    */

    'appName' => '',

    'bindings' => [
        
    ],

    'namings' => [

    ],
];
