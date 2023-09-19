<?php

namespace Programic\ProAdmin\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Programic\ProAdmin\Http\Middleware\Authenticate;

class Controller extends BaseController
{
    public function __construct()
    {
        $this->middleware(Authenticate::class);
    }
}
