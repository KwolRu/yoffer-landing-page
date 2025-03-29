import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from '../common/Button';

const links = [
    { to: '/', label: 'Главная' },
    { to: '/about', label: 'О нас' },
    { to: '/services', label: 'Услуги' },
    { to: '/contacts', label: 'Контакты' },
];

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Close nav when ESC key is pressed
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && isNavActive) {
                setIsNavActive(false);
            }
        };

        document.addEventListener('keydown', handleEscKey);

        // Lock body scroll when sidebar is open
        if (isNavActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = '';
        };
    }, [isNavActive]);

    // Track scroll position to highlight active section
    useEffect(() => {
        const sections = ['features', 'algorithm', 'tracking-system', 'dream-job', 'testimonials'];
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const headerOffset = 100; // A bit more than header height to account for scroll position
            
            // Find the current section based on scroll position
            let current = '';
            
            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop - headerOffset;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        current = sectionId;
                        break;
                    }
                }
            }
            
            setActiveSection(current);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Initial check on mount
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    const closeNav = () => {
        setIsNavActive(false);
    };

    // Function to handle smooth scrolling to sections
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        closeNav();
        
        const section = document.getElementById(sectionId);
        if (section) {
            const headerOffset = 80; // Height of fixed header
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <header className="header">
            <div className="container">
                <button
                    className={`mobile-menu ${isNavActive ? 'active' : ''}`}
                    onClick={toggleNav}
                    aria-label="Toggle menu"
                >
                    <img src="/img/menu.svg" alt="Logo" />
                </button>
                <div className="logo-main">
                    <Link to="/" onClick={scrollToTop}>
                        <img src="/img/logo-m.svg" alt="Logo" />
                    </Link>
                </div>
                <div className="auth-main phone">
                    <Link to="/" onClick={closeNav}>
                        <img src="/img/auth.svg" alt="Logo" />
                    </Link>
                </div>

                {/* Overlay that closes the sidebar when clicked */}
                <div
                    className={`sidebar-overlay ${isNavActive ? 'active' : ''}`}
                    onClick={closeNav} 
                ></div>

                <nav className={`nav ${isNavActive ? 'active' : ''}`}>
                    <div className='nav-header row'>
                        <button
                            className={`mobile-menu ${isNavActive ? 'active' : ''}`}
                            onClick={toggleNav}
                            aria-label="Toggle menu"
                        >
                            <img src="/img/menu.svg" alt="Logo" />
                        </button>
                        <div className='menu phone'>Меню</div>
                    </div>
                    <ul className="nav-list">
                        <li className={`nav-item ${activeSection === 'features' ? 'active' : ''}`}>
                            <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>О сервисе</a>
                        </li>
                        <li className={`nav-item ${activeSection === 'algorithm' ? 'active' : ''}`}>
                            <a href="#algorithm" onClick={(e) => scrollToSection(e, 'algorithm')}>Как работаем</a>
                        </li>
                        <li className={`nav-item ${activeSection === 'tracking-system' ? 'active' : ''}`}>
                            <a href="#tracking-system" onClick={(e) => scrollToSection(e, 'tracking-system')}>Система ATS</a>
                        </li>
                        <li className={`nav-item ${activeSection === 'dream-job' ? 'active' : ''}`}>
                            <a href="#dream-job" onClick={(e) => scrollToSection(e, 'dream-job')}>Почему мы</a>
                        </li>
                        <li className={`nav-item ${activeSection === 'testimonials' ? 'active' : ''}`}>
                            <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>Результаты пользователей</a>
                        </li>
                    </ul>

                    <div className="divider"></div>

                    <div className='desktop'>
                        <div className="auth-buttons">
                            <Button type="secondary">Вход</Button>
                            <Button size="small">Регистрация</Button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

