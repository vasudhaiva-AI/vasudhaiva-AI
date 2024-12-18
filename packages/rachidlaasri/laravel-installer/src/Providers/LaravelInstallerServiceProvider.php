<?php

namespace RachidLaasri\LaravelInstaller\Providers;

use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;
use RachidLaasri\LaravelInstaller\Middleware\ApplicationStatus;
use RachidLaasri\LaravelInstaller\Middleware\canInstall;
use RachidLaasri\LaravelInstaller\Middleware\canUpdate;
use RachidLaasri\LaravelInstaller\Repositories\ApplicationStatusRepository;
use RachidLaasri\LaravelInstaller\Repositories\ApplicationStatusRepositoryInterface;

class LaravelInstallerServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->publishFiles();
        $this->loadRoutesFrom(__DIR__ . '/../Routes/web.php');
    }

    /**
     * Bootstrap the application events.
     */
    public function boot(Router $router)
    {
        $router->middlewareGroup('install', [canInstall::class]);
        $router->middlewareGroup('update', [canUpdate::class]);
        $router->middlewareGroup('appstatus', [ApplicationStatus::class]);

        $this->app->bind(ApplicationStatusRepositoryInterface::class, function () {
            return new ApplicationStatusRepository;
        });
    }

    /**
     * Publish config file for the installer.
     *
     * @return void
     */
    protected function publishFiles()
    {
        $this->publishes([
            __DIR__ . '/../Config/installer.php' => base_path('config/installer.php'),
        ], 'laravelinstaller');

        $this->publishes([
            __DIR__ . '/../assets' => public_path('installer'),
        ], 'laravelinstaller');

        $this->publishes([
            __DIR__ . '/../Views' => base_path('resources/views/vendor/installer'),
        ], 'laravelinstaller');

        $this->publishes([
            __DIR__ . '/../Lang' => base_path('resources/lang'),
        ], 'laravelinstaller');
    }
}
