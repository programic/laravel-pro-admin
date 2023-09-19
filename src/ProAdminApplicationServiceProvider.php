<?php

namespace Programic\ProAdmin;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class ProAdminApplicationServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     */
    public function boot(): void
    {
        $this->authorization();
    }


    /**
     * Register the service provider.
     *
     */
    public function register(): void
    {
    }

    /**
     * Configure the Pro-admin authorization services.
     *
     */
    protected function authorization(): void
    {
        $this->gate();
    }

    /**
     * Register the Pro-admin gate.
     *
     * This gate determines who can access Pro-admin in non-local environments.
     *
     */
    protected function gate(): void
    {
        Gate::define('access', function () {
            return false;
        });
    }
}
