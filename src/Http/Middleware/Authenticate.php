<?php

namespace Programic\ProAdmin\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Gate;

/**
 * Handle an incoming request.
 *
 */
class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @return Response|Illuminate\Http\JsonResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (Gate::allows('access')) {
            return $next($request);
        }

        abort(403);
    }
}
