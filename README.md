# CAD Project

PHP MVC-проект для сайта/web-платформы архитектурной студии. Текущая рабочая версия запускается через `public/index.php`; старые статические файлы из исходной заготовки больше не используются как точка входа.

## Актуальная структура

```text
cadProject.local/
|-- .htaccess                  # Перенаправляет запросы в public/
|-- bootstrap.php              # Константы проекта и простой автозагрузчик App\
|-- index.php                  # Запасной вход из корня, подключает public/index.php
|-- config/
|   `-- routes.php             # Таблица маршрутов
|-- app/
|   |-- Controllers/
|   |   `-- HomeController.php # Контроллер главной страницы
|   |-- Core/
|   |   |-- Controller.php     # Базовый контроллер
|   |   |-- Router.php         # Простой роутер
|   |   `-- View.php           # Рендер views и partials
|   |-- Models/                # Будущие модели данных
|   `-- Views/
|       |-- errors/
|       |   `-- 404.php        # Страница ошибки 404
|       |-- layouts/
|       |   `-- main.php       # Общий HTML layout
|       |-- pages/
|       |   `-- home.php       # Главная страница
|       `-- partials/
|           |-- footer.php     # Подвал
|           `-- header.php     # Шапка
|-- public/
|   |-- .htaccess              # Front controller rewrite на index.php
|   |-- index.php              # Основная точка входа приложения
|   |-- assets/
|   |   |-- css/
|   |   |   |-- main.css
|   |   |   `-- normalize.css
|   |   |-- js/
|   |   |   `-- main.js
|   |   |-- images/            # Публичные изображения сайта
|   |   `-- videos/            # Публичные видео сайта
|   `-- tour/                  # Публичная копия 3D-тура
|-- CAD_Project/
|   |-- images/                # Временный источник/резерв изображений
|   `-- videos/                # Временный источник/резерв видео
|-- output/
|   |-- tiles/                 # Временный источник/резерв тайлов 3D-тура
|   `-- preview.jpg            # Временный preview 3D-тура
`-- Текст для сайта(ред 20.03.25).docx # Исходные тексты
```

## Что считается рабочим

Рабочая MVC-структура:

- `app/`
- `config/`
- `public/`
- `bootstrap.php`
- `index.php`
- `.htaccess`

Старые папки `CAD_Project/` и `output/` пока оставлены только как временное хранилище медиа. Код, стили и скрипты оттуда не подключаются.

## Запуск в OpenServer

Рекомендуемый вариант: указать document root домена на:

```text
E:\code\OSPanel\home\cadProject.local\public
```

Допустимый вариант: указать домен на корень проекта:

```text
E:\code\OSPanel\home\cadProject.local
```

В этом случае корневой `.htaccess` перенаправит запросы в `public/`.

## Как добавлять страницы

1. Создать контроллер в `app/Controllers`, например `ProjectsController.php`.
2. Создать view в `app/Views/pages`, например `projects.php`.
3. Добавить маршрут в `config/routes.php`.
4. При необходимости добавить пункт меню в `app/Views/partials/header.php`.

Пример маршрута:

```php
'GET' => [
    '/' => [HomeController::class, 'index'],
    '/projects' => [ProjectsController::class, 'index'],
],
```

## Публичные ассеты

Все файлы, которые должен видеть браузер, кладутся только в `public/`:

- CSS: `public/assets/css`
- JS: `public/assets/js`
- изображения: `public/assets/images`
- видео: `public/assets/videos`
- 3D-тур: `public/tour`

В шаблонах пути должны начинаться от корня сайта:

```html
<link rel="stylesheet" href="/assets/css/main.css">
<script src="/assets/js/main.js" defer></script>
<img src="/assets/images/CAD.png" alt="">
```

## Текущий статус

- MVC-каркас создан.
- Главная страница перенесена в `app/Views/pages/home.php`.
- Шапка и подвал вынесены в partials.
- CSS, JS, изображения и видео скопированы в `public/assets`.
- 3D-тур скопирован в `public/tour`.
- Старые дубли HTML/CSS/JS вне MVC удалены.
