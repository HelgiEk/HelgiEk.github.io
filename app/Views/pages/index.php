<?php
/** @var array<int, array{title: string, description: string, video: string, poster: string}> $slides */
/** @var array<int, array{label: string, slug: string}> $projectFilters */
/** @var array<int, array{title: string, image: string, preview_video: string, gallery: array<int, string>, category: string, category_slug: string, description: string}> $projects */
$slides = $slides ?? [];
$projectFilters = $projectFilters ?? [];
$projects = $projects ?? [];
?>

<section class="video_bg">
    <div class="videos">
        <?php foreach ($slides as $index => $slide): ?>
            <video class="video <?= $index === 0 ? 'video_current' : 'video_next' ?>" muted playsinline preload="<?= $index === 0 ? 'metadata' : 'none' ?>" poster="<?= htmlspecialchars($slide['poster'], ENT_QUOTES, 'UTF-8') ?>">
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

        <div class="video_buttons active_button" aria-label="Переключение слайдов">
            <?php foreach ($slides as $index => $slide): ?>
                <button class="video_button active_button <?= $index === 0 ? 'active_now' : '' ?>" type="button" aria-label="Слайд <?= $index + 1 ?>">
                    <svg class="progress_ring <?= $index === 0 ? 'active_ring' : '' ?>" viewBox="0 0 36 36" aria-hidden="true">
                        <circle class="progress_ring_circle" cx="18" cy="18" r="14"></circle>
                    </svg>
                </button>
            <?php endforeach; ?>
        </div>
    </div>

    <button class="hero_scroll_down active_button" type="button" aria-label="Перейти к следующей секции">
        <span aria-hidden="true"></span>
    </button>

    <a class="hero_order_project active_button" href="#contact">Заказать проект</a>
</section>

<div class="homepage_variant_label" aria-label="Вариант оформления">
    <span>Вариант №2 главного контейнера страницы</span>
</div>

<section id="engineering" class="engineering_showcase" aria-labelledby="engineeringTitle">
    <img
        class="engineering_showcase_image"
        src="/assets/images/upscaled-image_4_1.webp"
        alt="Современный загородный дом, спроектированный CAD Project"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
    >

    <div class="container engineering_showcase_content">
        <h2 id="engineeringTitle">Инженерное проектирование<br>и архитектура</h2>
        <p class="engineering_showcase_statement">Инновации<br>в каждом<br>проекте</p>

        <div class="engineering_showcase_action">
            <p>Создаём проекты, которые идеально сочетают функциональность, эстетику и современные инженерные решения.</p>
            <a class="engineering_showcase_button active_button" href="#contact">Заказать проект</a>
        </div>
    </div>
</section>

<section id="projects" class="container block_projects">
    <div class="projects_head">
        <h1>Наши проекты</h1>

        <div class="project_filters" aria-label="Фильтр проектов">
            <?php foreach ($projectFilters as $index => $filter): ?>
                <button
                    class="project_filter active_button <?= $index === 0 ? 'project_filter_active' : '' ?>"
                    type="button"
                    data-project-filter="<?= htmlspecialchars($filter['slug'], ENT_QUOTES, 'UTF-8') ?>"
                >
                    <?= htmlspecialchars($filter['label'], ENT_QUOTES, 'UTF-8') ?>
                </button>
            <?php endforeach; ?>
        </div>
    </div>

    <div class="projects">
        <?php foreach ($projects as $project): ?>
            <?php
                $projectGallery = $project['gallery'] ?? [$project['image'], $project['image'], $project['image']];
                $projectGalleryJson = htmlspecialchars((string) json_encode($projectGallery, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE), ENT_QUOTES, 'UTF-8');
            ?>
            <article
                class="active_button project"
                data-project-category="<?= htmlspecialchars($project['category_slug'], ENT_QUOTES, 'UTF-8') ?>"
                data-project-title="<?= htmlspecialchars($project['title'], ENT_QUOTES, 'UTF-8') ?>"
                data-project-label="<?= htmlspecialchars($project['category'], ENT_QUOTES, 'UTF-8') ?>"
                data-project-description="<?= htmlspecialchars($project['description'], ENT_QUOTES, 'UTF-8') ?>"
                data-project-gallery="<?= $projectGalleryJson ?>"
            >
                <img src="<?= htmlspecialchars($project['image'], ENT_QUOTES, 'UTF-8') ?>" alt="<?= htmlspecialchars($project['title'], ENT_QUOTES, 'UTF-8') ?>" loading="lazy" decoding="async" fetchpriority="low">
                <video class="project_preview_video" muted playsinline loop preload="none" aria-hidden="true">
                    <source src="<?= htmlspecialchars($project['preview_video'], ENT_QUOTES, 'UTF-8') ?>" type="video/mp4">
                </video>
                <div class="project_overlay">
                    <span><?= htmlspecialchars($project['category'], ENT_QUOTES, 'UTF-8') ?></span>
                    <h2><?= htmlspecialchars($project['title'], ENT_QUOTES, 'UTF-8') ?></h2>
                    <button class="project_quick_view active_button" type="button">Быстрый просмотр</button>
                </div>
            </article>
        <?php endforeach; ?>

        <a class="active_button project project_more" href="/projects" aria-label="Смотреть все проекты">
            <span>Смотреть все проекты</span>
            <span aria-hidden="true" class="project_more_arrow">→</span>
        </a>
    </div>
    <a class="project_cta active_button" href="#contact">Понравились работы? Консультация бесплатная</a>
</section>

<div class="project_modal" aria-hidden="true">
    <div class="project_modal_backdrop" data-project-modal-close></div>
    <article class="project_modal_window" role="dialog" aria-modal="true" aria-labelledby="projectModalTitle" tabindex="-1">
        <button class="project_modal_close active_button" type="button" aria-label="Закрыть окно" data-project-modal-close>×</button>

        <div class="project_modal_media">
            <img class="project_modal_image" alt="">
            <button class="project_modal_arrow project_modal_arrow_prev active_button" type="button" aria-label="Предыдущее изображение">‹</button>
            <button class="project_modal_arrow project_modal_arrow_next active_button" type="button" aria-label="Следующее изображение">›</button>
        </div>

        <div class="project_modal_info">
            <span class="project_modal_category"></span>
            <h2 id="projectModalTitle"></h2>
            <p></p>
            <a class="project_modal_contact active_button" href="#contact" data-project-modal-close>Связаться с нами</a>
        </div>
    </article>
</div>

<section class="container studio_advantages">
    <div class="studio_advantages_head">
        <span>CAD Project</span>
        <h2>10 преимуществ нашей студии</h2>
        <p>Собираем архитектуру, интерьер и визуальные материалы в понятный управляемый процесс: от первой идеи до презентации проекта заказчику.</p>
    </div>

    <div class="studio_advantages_grid">
        <article class="studio_advantage">
            <span class="studio_advantage_number">01</span>
            <h2>Экономия средств</h2>
            <p>Мы предоставляем доступ к эксклюзивным скидкам на строительные и отделочные материалы благодаря партнерским программам с ведущими поставщиками. <br>
            Наше тщательное проектирование минимизирует ошибки, переделки и непродуманные решения, что исключает дополнительные расходы на материалы и незапланированные работы.<br>
            Четкая организация процессов и профессиональный подход сокращают сроки реализации, сохраняя качество.
            </p>
        </article>
        <article class="studio_advantage">
            <span class="studio_advantage_number">02</span>
            <h2>Профессиональные и порядочные строительные бригады</h2>
            <p>Наша команда достаточно обширная, чтобы работать комплексно, под ключ.<br>
            В ней работают не только архитекторы и дизайнеры, но и строители, электрики, маляры, специалисты по укладке плитки и др. Каждый сотрудник работает сообща, каждая деталь проекта заранее обсуждается – так работает гармоничное единство в реализации задуманного на стройке.<br>
            У нас работают граждане Российской Федерации, которые не уедут в неизвестное направление забрав денежные средства, не выполнив работу.<br>
            Дорожим своей репутацией, поэтому в нашей студии работают сотрудники с высшем образованием и большим опытом работы.<br>
            До начала работы, предоставляем смету на основании проекта и обсуждаем все необходимые детали.
            </p>
        </article>
        <article class="studio_advantage">
            <span class="studio_advantage_number">03</span>
            <h2>Готовый проект за 30 дней</h2>
            <p>Вы можете быть уверены, что проект будет реализован без задержек.<br>
            Мы ценим ваше время, поэтому при необходимости, можем сократить сроки проектирования без потери качества. Четко соблюдаем все этапы работ и сроки, прописанные в договоре.
            </p>
        </article>
        <article class="studio_advantage">
            <span class="studio_advantage_number">04</span>
            <h2>Закупка и подбор материалов</h2>
            <p>Избавим вас от мук выбора и ссор с женой.<br>
            Мы берем на себя все заботы по подбору и закупке материалов. Наши специалисты помогут выбрать качественные и стильные решения, которые соответствуют вашему бюджету и дизайн-проекту. Вы можете быть уверены, что все материалы будут доставлены в нужное время и в нужном количестве.
            </p>
        </article>
        <article class="studio_advantage">
            <span class="studio_advantage_number">05</span>
            <h2>Приемка квартир</h2>
            <p>Рентгеновский снимок для вашей квартиры.<br>
            Мы предлагаем услугу профессиональной приемки квартир. Наши специалисты проверят качество выполненных работ, соответствие проекту и строительным нормам, чтобы вы могли быть уверены в своем выборе. С нами вы получите полный цикл услуг: Мы сопровождаем клиентов на всех этапах — от выбора участка или квартиры до завершения строительства и расстановки мебели.
            </p>
        </article>
        <article class="studio_advantage">
            <span class="studio_advantage_number">06</span>
            <h2>Высокий стандарт качества</h2>
            <p>Наши проекты – это не только красивые визуализации, но и тщательно продуманные решения, которые учитывают долговечность, удобство и эстетику.<br>
            У нас работают архитекторы, дизайнеры и строители с высшем образованием и с большим опытом работы.<br>
            Мы используем только проверенные материалы и технологии, чтобы результат радовал вас годами.
            </p>
        </article>
        <article class="studio_advantage">
            <span class="studio_advantage_number">07</span>
            <h2>Реалистичность</h2>
            <p>Красивая идея – это не воздушный замок, а мечта помноженная на функцию.<br>
            Мы создаем проекты, которые не только выглядят эстетично, но и полностью реализуемы на практике.<br>
            На этапе проектирования мы учитываем современные строительные технологии, доступность материалов и их соответствие заявленным стандартам качества. Это позволяет избежать ситуаций, когда красивая идея оказывается невозможной в реализации из-за технических или ресурсных ограничений. <br>
            Наша команда учитывает все нюансы: от логистики материалов до сезонных особенностей строительства.
            </p>
        </article>
        <article class="studio_advantage">
            <span class="studio_advantage_number">08</span>
            <h2>Современные инструменты</h2>
            <p>Да, на кульмане не чертим. Да, у нас есть мониторы… и клавиатура.<br>
            Мы активно внедряем передовые технологии при обмерах, проектировании и строительстве. Для презентации проектов применяются VR-очков (виртуальной реальности), которые позволяют клиентам «погрузиться» в будущий проект еще до начала строительства.<br>
            Это не только помогает наглядно оценить дизайн и планировку, но и своевременно внести корректировки, избегая неудовлетворения окончательным результатом. Такие инструменты делают процесс проектирования более прозрачным, интерактивным и эффективным.
            </p>
        </article>
        <article class="studio_advantage">
            <span class="studio_advantage_number">09</span>
            <h2>Поэтапная система оплаты</h2>
            <p>Утром стулья – вечером деньги! Вечером деньги…<br>
            Для вашего комфорта и чувства безопасности, мы работаем с поэтапной системой оплаты. Это позволяет вам оплачивать частями, по мере выполнения работ ремонта или строительства. Вы всегда знаете, когда, сколько и что нужно оплатить.<br>
            Все расчеты происходят удаленно, удобным для вас способом.
            </p>
        </article>
        <article class="studio_advantage">
            <span class="studio_advantage_number">10</span>
            <h2>Сотрудничество удаленно</h2>
            <p>Алло… Из Испании?? У нас же роуминг!!!<br>
            Если по тем или иным причинам физическое присутствие — наше или ваше — невозможно, наша студия готова решить все задачи дистанционно с помощью современных технологий: видеозвонков, переписки и обычных звонков.<br>
            Подобным образом уже было успешно реализовано 4 проекта в Москве. Такой подход делает сотрудничество комфортным, прозрачным и эффективным, независимо от расстояния. Мы гарантируем, что удаленная работа не скажется на качестве проекта, а лишь сэкономит ваше время и упростит процесс.
            </p>
        </article>
    </div>

    <a class="studio_advantages_cta active_button" href="#contact">Обсудить проект</a>
</section>

<section class="container studio_principles" aria-labelledby="studio-principles-title">
    <div class="studio_principles_inner">
        <span class="studio_principles_label">Подход CAD Project</span>
        <h2 id="studio-principles-title">Наши принципы</h2>
        <h3>Пространство. Свет. Порядок.</h3>
        <p>Мы создаем современные архитектурные решения, где эстетика идеально сочетается с функциональностью. Пространства получаются легкими и лаконичными, без лишних деталей, а интерьеры привлекают внимание и вызывают восхищение. Наша цель — проектировать объекты, которые не только радуют глаз, но и вызывают восторг у наших клиентов. За годы работы мы сформировали 4 ключевых принципа, которые лежат в основе каждого проекта:
</p>
    </div>
</section>

<section class="studio_expertise" aria-label="Направления работы студии">
    <div class="studio_expertise_grid">
        <article class="studio_expertise_item">
            <div class="studio_expertise_content">
                <h2>Слушать и слышать каждого клиента</h2>
                <p>Обращение к дизайнеру или архитектору можно сравнить с визитом к врачу: важно понять «боли», потребности и пожелания клиента. Нередко заказчики не разбираются в тонкостях дизайна или архитектуры, и в таких случаях мы помогаем им осознать свои потребности через внимательный диалог. Наш многолетний опыт позволяет быстро сформировать детальный план действий для достижения поставленных целей. Мы учитываем каждую мелочь: от состава семьи до режима сна, работы и отдыха каждого члена семьи. Благодаря такому подходу, мы часто решаем проблемы, о которых клиенты даже не подозревали.</p>
            </div>
        </article>
        <article class="studio_expertise_item">
            <div class="studio_expertise_content">
                <h2>Оптимизация бюджета с учетом пожеланий клиента</h2>
                <p>Мы подходим к каждому проекту так, будто сами являемся заказчиками. Понимая, насколько важен финансовый аспект, мы всегда предлагаем решения, которые не нарушают бюджет клиента. За 11 лет работы мы накопили обширную базу проверенных поставщиков и подрядчиков, что позволяет нам находить оптимальные варианты без ущерба качеству.</p>
            </div>
        </article>
        <article class="studio_expertise_item">
            <div class="studio_expertise_content">
                <h2>Удобство во всех аспектах</h2>
                <p>Ремонт или заказ архитектурного/дизайнерского проекта часто ассоциируется со стрессом, страхом и неопределенностью. Благодаря нашему опыту и множеству реализованных проектов, мы выстроили четкий процесс работы, который минимизирует эти негативные факторы. Мы относимся к каждому клиенту с эмпатией, понимая, что у них и так достаточно забот. Наша задача — сделать процесс максимально комфортным и прозрачным.</p>
            </div>
        </article>
        <article class="studio_expertise_item">
            <div class="studio_expertise_content">
                <h2>Проект от А до Я — от концепции до сдачи объекта</h2>
                <p>В современном мире время и спокойствие — самые ценные ресурсы. Именно поэтому мы создали команду профессионалов, которая берет на себя все этапы работы: от разработки концепции до реализации проекта. Мы полностью отвечаем за каждый этап, а от вас требуется только наблюдать за воплощением вашей мечты в жизнь</p>
            </div>
        </article>
    </div>
</section>

<section class="container block_3d_tours">
    <div class="tour_frame">
        <iframe data-src="/tour/index.html" title="3D-тур CAD Project" loading="lazy"></iframe>
        <button class="tour_overlay active_button" type="button">Нажмите, чтобы управлять 3D-туром</button>
    </div>
</section>
