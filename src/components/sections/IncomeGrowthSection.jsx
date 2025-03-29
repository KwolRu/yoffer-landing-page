import React from 'react';
import './IncomeGrowthSection.css';

const IncomeGrowthSection = () => {
    // Sample  incomes for the circle grid
    const incomes = [
        {
            title: 'Анализ рынка',
            description: 'Определение рыночной стоимости специалиста с вашими навыками'
        },
        {
            title: 'Выделение навыков',
            description: 'Акцент на компетенциях, за которые работодатели готовы платить больше'
        },
        {
            title: 'Структурирование опыта',
            description: 'Представление вашего опыта в выгодном свете'
        },
        {
            title: 'Оптимизация резюме',
            description: 'Фокус на достижениях, которые повышают вашу ценность'
        }
    ];

    return (
        <div className="income-growth-section">
            <div className="container row flex-mobile">
                <div>
                    <div className="income-heading">
                        <h2 className="section-title">10-20%</h2>
                        <h3 className="description">рост уровня дохода</h3>
                    </div>
                    <div className="income-description desktop">
                        <p><span className='accent'>Yoffer</span> умеет выделять ваши сильные стороны и структурировать резюме так, чтоб работодатель увидел ваше конкурентное преимущество и предложил зарплату выше</p>
                    </div>
                </div>
                <div className=" income-card">
                    <p className='income-top-table-card'>доход, который вы теряете</p>
                    <div className="cir-grid">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="cirсle"></div>
                        ))}
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="cirсle on"></div>
                        ))}
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="cirсle"></div>
                        ))}
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="cirсle on"></div>
                        ))}
                        {Array.from({ length: 7 }).map((_, index) => (
                            <div key={index} className="cirсle"></div>
                        ))}
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="cirсle on"></div>
                        ))}
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="cirсle"></div>
                        ))}
                        {Array.from({ length: 2 }).map((_, index) => (
                            <div key={index} className="cirсle on"></div>
                        ))}
                        {Array.from({ length: 9 }).map((_, index) => (
                            <div key={index} className="cirсle"></div>
                        ))}
                        {Array.from({ length: 1 }).map((_, index) => (
                            <div key={index} className="cirсle on"></div>
                        ))}
                    </div>
                    <p className='income-bottom-table-card'>текущий доход</p>
                </div>
                <div className="income-description phone">
                    <p><span className='accent'>Yoffer</span> умеет выделять ваши сильные стороны и структурировать резюме так, чтоб работодатель увидел ваше конкурентное преимущество и предложил зарплату выше</p>
                </div>
            </div>
        </div>
    );
};

export default IncomeGrowthSection;
