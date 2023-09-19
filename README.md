# Programic - Laravel Admin UI

[![Latest Version on Packagist](https://img.shields.io/packagist/v/programic/laravel-admin-ui.svg?style=flat-square)](https://packagist.org/packages/programic/laravel-admin-ui)
![](https://github.com/programic/laravel-admin-ui/workflows/Run%20Tests/badge.svg?branch=main)
[![Total Downloads](https://img.shields.io/packagist/dt/programic/laravel-admin-ui.svg?style=flat-square)](https://packagist.org/packages/programic/laravel-admin-ui)

This package is an admin dashboard for Laravel

## Installation
This package requires PHP 5.6 and Laravel 5.0 or higher.

```
composer require programic/laravel-pro-admin
```

Publish vendor assets 

```
php artisan vendor:publish --provider="Programic\ProAdmin\ProAdminServiceProvider"
```

Install dashboard

```
php artisan pro-admin:install
```
## Usage

Make sure all the construct bindings in the notifications are typed. In the  


## Testing
```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security-related issues, please email [info@programic.com](mailto:info@programic.com) instead of using the issue tracker.

## Credits

- [Rick Bongers](https://github.com/rbongers)
- [Jordi Zweden](https://github.com/jordiZ1)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
