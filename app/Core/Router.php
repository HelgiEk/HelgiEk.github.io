<?php

declare(strict_types=1);

namespace App\Core;

final class Router
{
    public function __construct(private readonly array $routes)
    {
    }

    public function dispatch(string $requestUri, string $method): void
    {
        $path = parse_url($requestUri, PHP_URL_PATH) ?: '/';
        $path = rtrim($path, '/') ?: '/';
        $method = strtoupper($method);

        $route = $this->routes[$method][$path] ?? null;

        if ($route === null) {
            http_response_code(404);
            View::render('errors/404', ['title' => 'Страница не найдена']);
            return;
        }

        [$controllerClass, $action] = $route;

        $controller = new $controllerClass();
        $controller->{$action}();
    }
}
