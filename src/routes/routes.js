import React, { lazy } from 'react';

// Lazy load components
const HeroSection = lazy(() => import('../components/sections/Hero'));
const FeaturesSection = lazy(() => import('../components/sections/Features'));
const PartnersSection = lazy(() => import('../components/sections/Partners'));
const AlgorithmSection = lazy(() => import('../components/sections/Algorithm'));
const SliderSection = lazy(() => import('../components/sections/SliderSection'));
const TimelineSection = lazy(() => import('../components/sections/TimelineSection'));
const TrackingSystemSection = lazy(() => import('../components/sections/TrackingSystemSection'));
const DreamJobSection = lazy(() => import('../components/sections/DreamJobSection'));
const IncomeGrowthSection = lazy(() => import('../components/sections/IncomeGrowthSection'));
const SaveSection = lazy(() => import('../components/sections/SaveSection'));
const TestimonialsSection = lazy(() => import('../components/sections/TestimonialsSection'));
const StatsSection = lazy(() => import('../components/sections/UserStatsSection'));

// Главная страница
const MainComponents = [
  { id: 'hero', Component: HeroSection, title: 'Главная' },
  { id: 'features', Component: FeaturesSection, title: 'Возможности' },
  { id: 'partners', Component: PartnersSection, title: 'Партнеры' },
  { id: 'algorithm', Component: AlgorithmSection, title: 'Алгоритм' },
  { id: 'slider', Component: SliderSection, title: 'Слайдер' },
  { id: 'timeline', Component: TimelineSection, title: 'Таймлайн' },
  { id: 'tracking', Component: TrackingSystemSection, title: 'Отслеживание' },
  { id: 'dream-job', Component: DreamJobSection, title: 'Работа мечты' },
  { id: 'income', Component: IncomeGrowthSection, title: 'Доход' },
  { id: 'save', Component: SaveSection, title: 'Экономия' },
  { id: 'testimonials', Component: TestimonialsSection, title: 'Отзывы' },
  { id: 'stats', Component: StatsSection, title: 'Статистика' }
];

// Отдельные маршруты
const routes = [
  { path: '/', title: 'Главная', isMain: true },
  { path: '/features', title: 'Возможности', Component: FeaturesSection },
  { path: '/algorithm', title: 'Алгоритм', Component: AlgorithmSection },
  { path: '/slider', title: 'Слайдер', Component: SliderSection },
  { path: '/timeline', title: 'Таймлайн', Component: TimelineSection },
  { path: '/tracking-system', title: 'Система отслеживания', Component: TrackingSystemSection },
  { path: '/dream-job', title: 'Работа мечты', Component: DreamJobSection },
  { path: '/income-growth', title: 'Рост дохода', Component: IncomeGrowthSection },
  { path: '/save', title: 'Экономия', Component: SaveSection },
  { path: '/testimonials', title: 'Отзывы', Component: TestimonialsSection }
];

export { MainComponents, routes };
