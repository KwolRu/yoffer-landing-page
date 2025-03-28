import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load sections for better performance
const HeroSection = lazy(() => import('./components/sections/Hero'));
const FeaturesSection = lazy(() => import('./components/sections/Features'));
const PartnersSection = lazy(() => import('./components/sections/Partners'));
const AlgorithmSection = lazy(() => import('./components/sections/Algorithm'));
const SliderSection = lazy(() => import('./components/sections/SliderSection'));
const TimelineSection = lazy(() => import('./components/sections/TimelineSection'));
const TrackingSystemSection = lazy(() => import('./components/sections/TrackingSystemSection'));
const DreamJobSection = lazy(() => import('./components/sections/DreamJobSection'));
const IncomeGrowthSection = lazy(() => import('./components/sections/IncomeGrowthSection'));
const SaveSection = lazy(() => import('./components/sections/SaveSection'));
const TestimonialsSection = lazy(() => import('./components/sections/TestimonialsSection'));
const StatsSection = lazy(() => import('./components/sections/UserStatsSection'));

// Main content component with error boundaries
const MainContent = () => (
  <ErrorBoundary fallback={<div className="error-container">Something went wrong. Please try again later.</div>}>
    <main className="main-content">
    <Suspense fallback={<LoadingSpinner />}>
          <HeroSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <FeaturesSection />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <PartnersSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <AlgorithmSection />
        </Suspense>


      <section id="slider" className="section-container">
        <Suspense fallback={<LoadingSpinner />}>
          <SliderSection />
        </Suspense>
      </section>

      <section id="timeline" className="section-container">
        <Suspense fallback={<LoadingSpinner />}>
          <TimelineSection />
        </Suspense>
      </section>

      <section id="tracking-system" className="section-container">
        <Suspense fallback={<LoadingSpinner />}>
          <TrackingSystemSection />
        </Suspense>
      </section>

      <section id="dream-job" className="section-container">
        <Suspense fallback={<LoadingSpinner />}>
          <DreamJobSection />
        </Suspense>
      </section>

     
      <section id="income-growth" className="section-container">
        <Suspense fallback={<LoadingSpinner />}>
          <IncomeGrowthSection />
        </Suspense>
      </section>
      <section id="save" className="section-container">
        <Suspense fallback={<LoadingSpinner />}>
          <SaveSection />
        </Suspense>
      </section>

      <section id="testimonials" className="section-container">
        <Suspense fallback={<LoadingSpinner />}>
          <TestimonialsSection />
        </Suspense>
      </section>
      
       <section id="statsSection" className="section-container">
        <Suspense fallback={<LoadingSpinner />}>
          <StatsSection />
        </Suspense>
      </section>

    </main>
  </ErrorBoundary>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/features" element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <FeaturesSection />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/Algorithm" element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <AlgorithmSection />
              </Suspense>
            </ErrorBoundary>
          } />
         
          
          <Route path="/slider" element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <SliderSection />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/timeline" element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <TimelineSection />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/tracking-system" element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <TrackingSystemSection />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/dream-job" element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <DreamJobSection />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/income-growth" element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <IncomeGrowthSection />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="/save" element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <SaveSection />
              </Suspense>
            </ErrorBoundary>
          } />
          
          <Route path="/testimonials" element={
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <TestimonialsSection />
              </Suspense>
            </ErrorBoundary>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
