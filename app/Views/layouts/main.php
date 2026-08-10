<?php

/** @var string $content */
/** @var string|null $title */

$content = $content ?? '';

\App\Core\View::partial('header', [
    'title' => $title ?? 'CAD Project',
]);
?>

<main>
    <?= $content ?>
</main>

<?php \App\Core\View::partial('footer'); ?>
