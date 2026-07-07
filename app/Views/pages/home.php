<section class="video_bg">
    <div class="videos">
        <?php foreach ($slides as $index => $slide): ?>
            <video class="video <?= $index === 0 ? 'video_current' : 'video_next' ?>" <?= $index === 0 ? 'autoplay' : '' ?> muted playsinline poster="<?= htmlspecialchars($slide['poster'], ENT_QUOTES, 'UTF-8') ?>">
                <source src="<?= htmlspecialchars($slide['video'], ENT_QUOTES, 'UTF-8') ?>" type="video/mp4">
            </video>
        <?php endforeach; ?>
    </div>

    <div class="effects">
        <div class="video_contents container">
            <?php foreach ($slides as $index => $slide): ?>
                <div class="content <?= $index === 0 ? 'content_current' : 'content_next' ?>">
                    <h1><?= htmlspecialchars($slide['title'], ENT_QUOTES, 'UTF-8') ?></h1>
                    <h2><?= htmlspecialchars($slide['description'], ENT_QUOTES, 'UTF-8') ?></h2>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="video_buttons active_button" aria-label="Переключение видео">
            <?php foreach ($slides as $index => $slide): ?>
                <button class="video_button active_button <?= $index === 0 ? 'active_now' : '' ?>" type="button" aria-label="Слайд <?= $index + 1 ?>">
                    <svg class="progress_ring <?= $index === 0 ? 'active_ring' : '' ?>" viewBox="0 0 36 36" aria-hidden="true">
                        <circle class="progress_ring_circle" cx="18" cy="18" r="14"></circle>
                    </svg>
                </button>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="container block_projects">
    <h1>Наши проекты</h1>
    <div class="projects">
        <?php foreach ($projects as $project): ?>
            <article class="active_button project">
                <img src="<?= htmlspecialchars($project['image'], ENT_QUOTES, 'UTF-8') ?>" alt="<?= htmlspecialchars($project['title'], ENT_QUOTES, 'UTF-8') ?>">
                <div class="project_overlay">
                    <span><?= htmlspecialchars($project['category'], ENT_QUOTES, 'UTF-8') ?></span>
                    <h2><?= htmlspecialchars($project['title'], ENT_QUOTES, 'UTF-8') ?></h2>
                    <button type="button">Быстрый просмотр</button>
                </div>
            </article>
        <?php endforeach; ?>
    </div>
    <a class="project_cta active_button" href="#contact">Понравились работы? Запишитесь на консультацию</a>
</section>

<section class="container block_3d_tours">
    <div class="tour_frame">
        <iframe src="/tour/index.html" title="3D-тур CAD Project" loading="lazy"></iframe>
        <button class="tour_overlay active_button" type="button">Нажмите, чтобы управлять 3D-туром</button>
    </div>
</section>

