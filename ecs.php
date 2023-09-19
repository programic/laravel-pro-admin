<?php

declare(strict_types=1);

use PHP_CodeSniffer\Standards\PSR12\Sniffs\Files\FileHeaderSniff;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symplify\EasyCodingStandard\ValueObject\Option;

return static function (ContainerConfigurator $containerConfigurator): void {
    $containerConfigurator->import(__DIR__ . '/vendor/programic/pro-backend-quality/configs/ecs.dist.php');

    $services = $containerConfigurator->services();

    $parameters = $containerConfigurator->parameters();
    $parameters->set(Option::PATHS, [
        __DIR__,
    ]);

    $skips = [
        __DIR__ . '/vendor',
        __DIR__ . '/storage',
        __DIR__ . '/bootstrap',
    ];

    if (file_exists(__DIR__ . '/_ide_helper.php')) {
        $skips[] = __DIR__ . '/_ide_helper.php';
    }

    if (file_exists(__DIR__ . '/_ide_helper_models.php')) {
        $skips[] = __DIR__ . '/_ide_helper_models.php';
    }

    if (file_exists(__DIR__ . '/.phpstorm.meta.php')) {
        $skips[] = __DIR__ . '/.phpstorm.meta.php';
    }

    $skips[\SlevomatCodingStandard\Sniffs\TypeHints\PropertyTypeHintSniff::class . '.MissingNativeTypeHint'] = [
        __DIR__ . '/app/Exceptions/Handler.php',
        __DIR__ . '/app/Http/Kernel.php',
        __DIR__ . '/app/Http/Middleware/VerifyCsrfToken.php',
        __DIR__ . '/app/Http/Middleware/TrustProxies.php',
        __DIR__ . '/app/Http/Middleware/TrimStrings.php',
        __DIR__ . '/app/Http/Middleware/PreventRequestsDuringMaintenance.php',
        __DIR__ . '/app/Http/Middleware/EncryptCookies.php',
        __DIR__ . '/app/Providers/AuthServiceProvider.php',
        __DIR__ . '/app/Providers/EventServiceProvider.php',
        __DIR__ . '/app/Models/',
        __DIR__ . '/app/Console/Commands/',
    ];

    $skips[\SlevomatCodingStandard\Sniffs\TypeHints\PropertyTypeHintSniff::class . '.MissingAnyTypeHint'] = [
        __DIR__ . '/app/Models/',
        __DIR__ . '/app/Console/Kernel.php',
        __DIR__ . '/src/Console/InstallCommand.php',
    ];

    $skips[\SlevomatCodingStandard\Sniffs\TypeHints\ParameterTypeHintSniff::class] = [
        __DIR__ . '/app/Http/Middleware/Authenticate.php',
        __DIR__ . '/app/Http/Resources',
    ];

    $skips[\PhpCsFixer\Fixer\ControlStructure\SwitchCaseSemicolonToColonFixer::class] = [
        __DIR__ . '/app/Enums/',
    ];

    $skips[\SlevomatCodingStandard\Sniffs\Functions\UnusedParameterSniff::class] = [
        __DIR__ . '/app/Http/Resources',
        __DIR__ . '/app/Scopes',
    ];

    $parameters->set(Option::SKIP, $skips);

    $services->set(FileHeaderSniff::class);
};
