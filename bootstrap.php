<?php

declare(strict_types=1);

define('BASE_PATH', __DIR__);
define('APP_PATH', BASE_PATH . DIRECTORY_SEPARATOR . 'app');
define('VIEW_PATH', APP_PATH . DIRECTORY_SEPARATOR . 'Views');

spl_autoload_register(static function (string $class): void {
    $prefix = 'App\\';

    if (!str_starts_with($class, $prefix)) {
        return;
    }

    $relativeClass = substr($class, strlen($prefix));
    $file = APP_PATH . DIRECTORY_SEPARATOR . str_replace('\\', DIRECTORY_SEPARATOR, $relativeClass) . '.php';

    if (is_file($file)) {
        require $file;
    }
});

