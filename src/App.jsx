import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';
import LoadingScreen from './components/common/LoadingScreen';
import { MainComponents, routes } from './routes/routes';

// Компонент для главной страницы
const MainContent = () => (
  <ErrorBoundary fallback={<div className="error-container">Something went wrong. Please try again later.</div>}>
    <main className="main-content">
      {MainComponents.map(({ id, Component }) => (
        <section key={id} id={id} className="section-container">
          <Suspense fallback={<LoadingSpinner />}>
            <Component />
          </Suspense>
        </section>
      ))}
    </main>
  </ErrorBoundary>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Главный маршрут */}
          <Route path="/" element={<MainContent />} />
          
          {/* Динамически создаем маршруты из конфигурации */}
          {routes.filter(route => !route.isMain).map(({ path, Component }) => (
            <Route 
              key={path} 
              path={path} 
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Component />
                  </Suspense>
                </ErrorBoundary>
              } 
            />
          ))}
          
          {/* Перенаправление для неизвестных маршрутов */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
