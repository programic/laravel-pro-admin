<?php

namespace Programic\ProAdmin\Console;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     */
    protected $signature = 'pro-admin:install';

    /**
     * The console command description.
     *
     */
    protected $description = 'Install all of the Pro-admin resources';

    /**
     * Execute the console command.
     *
     */
    public function handle(): void
    {
        $this->comment('Publishing Pro-Admin Service Provider...');
        $this->callSilent('vendor:publish', ['--tag' => 'pro-admin-provider']);

        $this->comment('Publishing Pro-Admin Assets...');
        $this->callSilent('vendor:publish', ['--tag' => 'pro-admin-assets']);

        $this->comment('Publishing Pro-Admin Configuration...');
        $this->callSilent('vendor:publish', ['--tag' => 'pro-admin-config']);

        $this->registerProAdminServiceProvider();

        $this->info('Pro-Admin scaffolding installed successfully.');
    }

    /**
     * Register the Pro-admin service provider in the application configuration file.
     *
     */
    protected function registerProAdminServiceProvider(): void
    {
        $namespace = Str::replaceLast('\\', '', $this->laravel->getNamespace());

        $appConfig = file_get_contents(config_path('app.php'));

        if (Str::contains($appConfig, $namespace . '\\Providers\\ProAdminServiceProvider::class')) {
            return;
        }

        file_put_contents(config_path('app.php'), str_replace(
            "{$namespace}\\Providers\EventServiceProvider::class," . PHP_EOL,
            "{$namespace}\\Providers\EventServiceProvider::class," . PHP_EOL . "        {$namespace}\Providers\ProAdminServiceProvider::class," . PHP_EOL,
            $appConfig
        ));

        file_put_contents(app_path('Providers/ProAdminServiceProvider.php'), str_replace(
            "namespace App\Providers;",
            "namespace {$namespace}\Providers;",
            file_get_contents(app_path('Providers/ProAdminServiceProvider.php'))
        ));
    }
}
