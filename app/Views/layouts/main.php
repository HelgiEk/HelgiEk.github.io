<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($title ?? 'CAD Project', ENT_QUOTES, 'UTF-8') ?></title>
    <link rel="stylesheet" href="/assets/css/normalize.css">
    <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
    <div class="cursor_dot hidden"></div>
    <div class="cursor_aura hidden"></div>

    <?php \App\Core\View::partial('header'); ?>

    <main>
        <?= $content ?>
    </main>

    <?php \App\Core\View::partial('footer'); ?>

    <script src="/assets/js/main.js" defer></script>
</body>
</html>

