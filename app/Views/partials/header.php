<?php

/** @var string $title */

$title = $title ?? 'CAD Project';
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8') ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="/assets/videos/poster_1.webp" as="image" type="image/webp" fetchpriority="high">
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/main.css?v=20260810-1">
</head>
<body class="site_loading">
    <div class="site_preloader" role="status" aria-live="polite" aria-label="Загрузка сайта">
        <div class="site_preloader_brand">
            <img src="/assets/images/CAD.png" alt="">
            <span>CAD Project</span>
        </div>
        <div class="site_preloader_spinner" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

    <div class="cursor_dot hidden"></div>
    <div class="cursor_aura hidden"></div>

    <header class="container header">
        <a class="logo active_button" href="/" aria-label="CAD Project">
            <img class="logo_img" src="/assets/images/CAD.png" alt="">
            <span class="logo_text">CAD Project</span>
        </a>

        <nav class="nav_buttons" aria-label="Главная навигация">
            <ul>
                <li class="active"><a class="act" href="/">Главная</a></li>
                <li class="active_button"><a href="/projects">Проекты</a><div class="under_line"></div></li>
                <li class="active_button"><a href="/services">Услуги</a><div class="under_line"></div></li>
                <li class="active_button"><a href="/process">Процесс</a><div class="under_line"></div></li>
            </ul>

            <div class="btn">
                <a class="order_project active_button" href="#contact">Обсудить идею</a>
            </div>
        </nav>
    </header>
