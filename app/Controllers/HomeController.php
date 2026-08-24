<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Core\Controller;

final class HomeController extends Controller
{
    public function index(): void
    {
        $projectPreviewVideo = '/assets/videos/project_preview_web.mp4';

        $slides = [
            [
                'title' => 'CAD Project',
                'description' => 'Архитектура, интерьер и интерактивные презентации проектов.',
                'video' => '/assets/videos/video_1_web.mp4',
                'poster' => '/assets/videos/poster_1.webp',
            ],
            [
                'title' => 'Проекты в движении',
                'description' => 'Видео, 3D-туры и визуальные сценарии для будущей web-платформы.',
                'video' => '/assets/videos/video_2_web.mp4',
                'poster' => '/assets/videos/poster_2.webp',
            ],
            [
                'title' => 'Интерьеры с характером',
                'description' => 'Заглушка будущего слайда на базе первого hero-видео.',
                'video' => '/assets/videos/video_1_web.mp4',
                'poster' => '/assets/videos/poster_1.webp',
            ],
            [
                'title' => 'Архитектурные сценарии',
                'description' => 'Заглушка будущего слайда на базе второго hero-видео.',
                'video' => '/assets/videos/video_2_web.mp4',
                'poster' => '/assets/videos/poster_2.webp',
            ],
            [
                'title' => 'Коммерческие пространства',
                'description' => 'Заглушка будущего слайда на базе первого hero-видео.',
                'video' => '/assets/videos/video_1_web.mp4',
                'poster' => '/assets/videos/poster_1.webp',
            ],
            [
                'title' => 'Дизайн-проект под реализацию',
                'description' => 'Заглушка будущего слайда на базе второго hero-видео.',
                'video' => '/assets/videos/video_2_web.mp4',
                'poster' => '/assets/videos/poster_2.webp',
            ],
            [
                'title' => 'Полный цикл проекта',
                'description' => 'Заглушка будущего слайда на базе первого hero-видео.',
                'video' => '/assets/videos/video_1_web.mp4',
                'poster' => '/assets/videos/poster_1.webp',
            ],
        ];

        $projectFilters = [
            ['label' => 'Все', 'slug' => 'all'],
            ['label' => 'Премиум сегмент', 'slug' => 'premium'],
            ['label' => 'Бюджетный сегмент', 'slug' => 'budget'],
            ['label' => 'Дизайн общественных интерьеров', 'slug' => 'social-interior'],
            ['label' => 'Архитектурное проектирование', 'slug' => 'design-project'],
            ['label' => 'Другие проекты', 'slug' => 'other'],
        ];

        $projects = [
            [
                'title' => 'Night Residence',
                'image' => '/assets/images/night.webp',
                'preview_video' => $projectPreviewVideo,
                'gallery' => ['/assets/images/night.webp', '/assets/images/kitchen.webp', '/assets/images/night.webp'],
                'category' => 'Премиум сегмент',
                'category_slug' => 'premium',
                'description' => 'Спокойный интерьер с мягким светом, продуманными сценариями хранения и выразительной ночной атмосферой.',
            ],
            [
                'title' => 'Kitchen Space',
                'image' => '/assets/images/kitchen.webp',
                'preview_video' => $projectPreviewVideo,
                'gallery' => ['/assets/images/kitchen.webp', '/assets/images/night.webp', '/assets/images/kitchen.webp'],
                'category' => 'Бюджетный сегмент',
                'category_slug' => 'budget',
                'description' => 'Функциональное кухонное пространство с чистой геометрией, светлыми материалами и удобной рабочей логикой.',
            ],
            [
                'title' => 'Apartment Light',
                'image' => '/assets/images/night.webp',
                'preview_video' => $projectPreviewVideo,
                'gallery' => ['/assets/images/night.webp', '/assets/images/kitchen.webp', '/assets/images/night.webp'],
                'category' => 'Премиум сегмент',
                'category_slug' => 'premium',
                'description' => 'Светлая квартира с акцентом на воздух, тактильные поверхности и гибкие сценарии повседневной жизни.',
            ],
            [
                'title' => 'Urban Concept',
                'image' => '/assets/images/night.webp',
                'preview_video' => $projectPreviewVideo,
                'gallery' => ['/assets/images/night.webp', '/assets/images/kitchen.webp', '/assets/images/night.webp'],
                'category' => 'Архитектурное проектирование',
                'category_slug' => 'design-project',
                'description' => 'Архитектурная концепция для городской среды с ясным силуэтом, ритмом фасада и выразительной посадкой объёма.',
            ],
            [
                'title' => 'Private House',
                'image' => '/assets/images/kitchen.webp',
                'preview_video' => $projectPreviewVideo,
                'gallery' => ['/assets/images/kitchen.webp', '/assets/images/night.webp', '/assets/images/kitchen.webp'],
                'category' => 'Архитектурное проектирование',
                'category_slug' => 'design-project',
                'description' => 'Частный дом с вниманием к приватности, естественному свету и связи внутренних пространств с участком.',
            ],
            [
                'title' => 'Facade Study',
                'image' => '/assets/images/night.webp',
                'preview_video' => $projectPreviewVideo,
                'gallery' => ['/assets/images/night.webp', '/assets/images/kitchen.webp', '/assets/images/night.webp'],
                'category' => 'Архитектурное проектирование',
                'category_slug' => 'design-project',
                'description' => 'Исследование фасадного решения: пропорции, материалы, пластика и визуальный характер здания.',
            ],
            [
                'title' => 'Commercial Lobby',
                'image' => '/assets/images/kitchen.webp',
                'preview_video' => $projectPreviewVideo,
                'gallery' => ['/assets/images/kitchen.webp', '/assets/images/night.webp', '/assets/images/kitchen.webp'],
                'category' => 'Дизайн общественных интерьеров',
                'category_slug' => 'social-interior',
                'description' => 'Представительское входное пространство для коммерческого объекта с понятной навигацией и деловым настроением.',
            ],
            [
                'title' => 'Concept Package',
                'image' => '/assets/images/night.webp',
                'preview_video' => $projectPreviewVideo,
                'gallery' => ['/assets/images/night.webp', '/assets/images/kitchen.webp', '/assets/images/night.webp'],
                'category' => 'Другие проекты',
                'category_slug' => 'other',
                'description' => 'Пакет концепции с визуальной логикой, подбором материалов и направлением для дальнейшей реализации.',
            ],
            [
                'title' => 'Office Line',
                'image' => '/assets/images/kitchen.webp',
                'preview_video' => $projectPreviewVideo,
                'gallery' => ['/assets/images/kitchen.webp', '/assets/images/night.webp', '/assets/images/kitchen.webp'],
                'category' => 'Дизайн общественных интерьеров',
                'category_slug' => 'social-interior',
                'description' => 'Офисное пространство с аккуратной рабочей эстетикой, зонами коммуникации и ясным визуальным порядком.',
            ],
            [
                'title' => 'Soft Minimal',
                'image' => '/assets/images/night.webp',
                'preview_video' => $projectPreviewVideo,
                'gallery' => ['/assets/images/night.webp', '/assets/images/kitchen.webp', '/assets/images/night.webp'],
                'category' => 'Бюджетный сегмент',
                'category_slug' => 'budget',
                'description' => 'Минималистичный проект с мягкими фактурами, спокойной палитрой и вниманием к деталям исполнения.',
            ],
            [
                'title' => 'City Apartment',
                'image' => '/assets/images/kitchen.webp',
                'preview_video' => $projectPreviewVideo,
                'gallery' => ['/assets/images/kitchen.webp', '/assets/images/night.webp', '/assets/images/kitchen.webp'],
                'category' => 'Бюджетный сегмент',
                'category_slug' => 'budget',
                'description' => 'Городская квартира с компактными решениями, чистыми линиями и комфортным визуальным ритмом.',
            ],
        ];

        $this->view('pages/index', [
            'title' => 'CAD Project',
            'slides' => $slides,
            'projectFilters' => $projectFilters,
            'projects' => $projects,
        ]);
    }
}
