<?php

declare(strict_types=1);

namespace App\Controllers;

use App\Core\Controller;

final class HomeController extends Controller
{
    public function index(): void
    {
        $slides = [
            [
                'title' => 'CAD Project',
                'description' => 'Архитектура, интерьер и интерактивные презентации проектов.',
                'video' => '/assets/videos/video_1.mp4',
                'poster' => '/assets/videos/poster_1.png',
            ],
            [
                'title' => 'Проекты в движении',
                'description' => 'Видео, 3D-туры и визуальные сценарии для будущей web-платформы.',
                'video' => '/assets/videos/video_2.mp4',
                'poster' => '/assets/videos/poster_2.png',
            ],
        ];

        $projects = [
            ['title' => 'Night Residence', 'image' => '/assets/images/night.png', 'category' => 'Интерьер'],
            ['title' => 'Kitchen Space', 'image' => '/assets/images/kitchen.png', 'category' => 'Интерьер'],
            ['title' => 'Urban Concept', 'image' => '/assets/images/night.png', 'category' => 'Архитектура'],
            ['title' => 'Private House', 'image' => '/assets/images/kitchen.png', 'category' => 'Архитектура'],
            ['title' => 'Apartment Light', 'image' => '/assets/images/night.png', 'category' => 'Интерьер'],
            ['title' => 'Commercial Lobby', 'image' => '/assets/images/kitchen.png', 'category' => 'Коммерция'],
        ];

        $this->view('pages/home', [
            'title' => 'CAD Project',
            'slides' => $slides,
            'projects' => $projects,
        ]);
    }
}

