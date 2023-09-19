<?php

namespace Programic\ProAdmin\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Response;

class DashboardController extends Controller
{
    public function index(): View
    {
        return view('pro-admin::dashboard', [
            'proDashboardScriptVariables' => [
                'config' => config('pro-admin', []),
            ],
        ]);
    }

    public function test(): Response
    {
        return response([
            'data' => 'dit is een test!!!!',
        ]);
    }
}
