<?php

declare(strict_types=1);

namespace App\Core;

final class View
{
    public static function render(string $template, array $data = [], string $layout = 'main'): void
    {
        $templatePath = VIEW_PATH . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $template) . '.php';
        $layoutPath = VIEW_PATH . DIRECTORY_SEPARATOR . 'layouts' . DIRECTORY_SEPARATOR . $layout . '.php';

        if (!is_file($templatePath)) {
            throw new \RuntimeException("View template not found: {$template}");
        }

        extract($data, EXTR_SKIP);

        ob_start();
        require $templatePath;
        $content = ob_get_clean();

        require $layoutPath;
    }

    public static function partial(string $name, array $data = []): void
    {
        $partialPath = VIEW_PATH . DIRECTORY_SEPARATOR . 'partials' . DIRECTORY_SEPARATOR . $name . '.php';

        if (!is_file($partialPath)) {
            throw new \RuntimeException("View partial not found: {$name}");
        }

        extract($data, EXTR_SKIP);
        require $partialPath;
    }
}

