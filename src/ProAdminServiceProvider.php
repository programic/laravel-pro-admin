<?php

namespace Programic\ProAdmin;

use Exception;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\HtmlString;
use Illuminate\Support\ServiceProvider;

class ProAdminServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     */
    public function boot(): void
    {
        $this->registerEvents();
        $this->registerRoutes();
        $this->registerResources();
        $this->defineAssetPublishing();
        $this->offerPublishing();
        $this->registerCommands();

        Blade::directive('vitejs', function () {
            $devServerIsRunning = false;
    
//            if (app()->environment('local')) {
//                try {
//                    // Http::get("http://localhost:3000");
//                    $devServerIsRunning = true;
//                } catch (Exception $e) {
//                }
//            }
            
//            if ($devServerIsRunning) {
//                return new HtmlString('
//                    <script type="module" src="http://localhost:3000/@vite/client"></script>
//                    <script type="module" src="http://localhost:3000/resources/js/main.ts"></script>
//                ');
//            }
            
//            $manifest = json_decode(file_get_contents(
//                __DIR__ . '/../dist/manifest.json'
//            ), true);


//            dd($manifest);
            return new HtmlString(`
                <script type="module" src="/build/{$manifest['index.html']['file']}"></script>
                <link rel="stylesheet" href="/build/{$manifest['index.html']['css'][0]}">
            `);
        });
    }

    /**
     * Define the asset publishing configuration.
     *
     */
    public function defineAssetPublishing(): void
    {
        $this->publishes([
            PRO_ADMIN_PATH . '/public' => public_path('vendor/pro-admin'),
        ], ['pro-admin-assets', 'laravel-assets']);
    }



    /**
     * Register the service provider.
     *
     */
    public function register(): void
    {
        if (!defined('PRO_ADMIN_PATH')) {
            define('PRO_ADMIN_PATH', realpath(__DIR__ . '/../'));
        }

        // $this->app->singleton('laravel-vite-manifest', function () {
        //     return new LaravelViteManifest;
        // });
    }

    /**
     * Register the Horizon job events.
     *
     */
    protected function registerEvents(): void
    {
        $events = $this->app->make(Dispatcher::class);

        foreach ($events as $event => $listeners) {
            foreach ($listeners as $listener) {
                $events->listen($event, $listener);
            }
        }
    }

    /**
     * Register the Horizon routes.
     *
     */
    protected function registerRoutes(): void
    {
        Route::group([
            'domain' => config('pro-admin.domain', null),
            'prefix' => config('pro-admin.path', 'pro-admin'),
            'namespace' => 'Programic\ProAdmin\Http\Controllers',
            'middleware' => config('pro-admin.middleware', 'web'),
        ], function (): void {
            $this->loadRoutesFrom(__DIR__ . '/../routes/web.php');
        });
    }

    /**
     * Register the Horizon resources.
     *
     */
    protected function registerResources(): void
    {
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'pro-admin');
    }

    /**
     * Setup the resource publishing groups for Horizon.
     *
     */
    protected function offerPublishing(): void
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../stubs/ProAdminServiceProvider.stub' => app_path('Providers/ProAdminServiceProvider.php'),
            ], 'pro-admin-provider');

            $this->publishes([
                __DIR__ . '/../config/pro-admin.php' => config_path('pro-admin.php'),
            ], 'pro-admin-config');
        }
    }

    /**
     * Register the Horizon Artisan commands.
     *
     */
    protected function registerCommands(): void
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                Console\InstallCommand::class,
            ]);
        }
    }
}
