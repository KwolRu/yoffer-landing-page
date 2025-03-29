import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const TestimonialsSection = () => {
    // Sample testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Анастасия",
            position: "UX/UI-дизайнер",
            title: "«Работодатели просматривали резюме, но не перезванивали»",
            text_before: "отправила свое резюме в 7 компаний, перезвонили только из одной. И те оказались мошенниками",
            text_after: "сделала резюме при помощи «Прозрачности» под 5 разных компаний. От 4-х из них получила приглашения на собеседования. В одной из них теперь работаю"
        },

        {
            id: 2,
            name: "Игорь",
            position: "Project-менеджер",
            title: "«Мне нужно было срочно найти работу»",
            text_before: "Мне нужно было срочно найти работу",
            text_after: "создал резюме при помощи «Прозрачности», разместил в открытом доступе. Пока искал вакансии, на которые хотел бы откликнуться, мне стали сами звонить работодатели. В итоге нашел работу меньше, чем за неделю"
        },
        {
            id: 3,
            name: "Елена",
            position: "Бухгалтер",
            title: "«Работа давно не устраивала, но написать резюме никак не доходили руки»",
            text_before: "обстановка на работе просто ужас. Каждый день думала «уволюсь». Но что писать в резюме? Кому я нужна?! Если бы не Yoffer, так и сидела бы там",
            text_after: "я, честно говоря, офигела от того, как меня описал алгоритм! Сама бы такого сотрудника наняла за двойную плату) Итог — работаю сейчас на новом месте, где меня ценят, уважают и платят в 1,5 раза больше"
        },
        {
            id: 4,
            name: "Андрей",
            position: "Коммерческий директор",

            title: "«Претендовал на зп 300+ на ТОПовую позицию, долго не было откликов»",
            text_before: "претендовал на позицию коммерческого директора. Самостоятельно искал около полугода. Откликов почти ноль",
            text_after: "алгоритм отлично упаковал мои знания и навыки. Так что я даже решил повысить планку зарплатных ожиданий и, как ни странно, нашел новую работу, где мне готовы столько платить"
        },
        {
            id: 5,
            name: "Ксения",
            position: "SMM-специалист",

            title: "«Работодатель повысил зарплату»",
            text_before: "меня постоянно перегружали и при этом не доплачивали за это. Я решила найти новую работу",
            text_after: "получилось классное резюме. Уже через 1,5 недели у меня был офер от нового работодателя. Пошла увольняться, но начальник меня не отпустил. Сказал, что без меня тут все рухнет. Поднял мне зарплату и больше не дергает по выходным"
        }


    ];

    const [isMobile, setIsMobile] = useState(false);
    
    // Check if we're on mobile based on screen width
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 992);
        };
        
        // Initial check
        checkIfMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);
        
        // Clean up
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <div className="testimonials-section">
            <div className="container">
                <h3 className="section-title">Результаты пользователей </h3>

                <div className="swiper-container testimonials-swiper">
                    <Swiper
                        slidesPerView={isMobile ? 1 : 'auto'}
                        spaceBetween={16}
                        loop={true}
                        centeredSlides={false}
                        speed={800}
                        cssMode={false}
                        updateOnImagesReady={true}
                        preloadImages={true}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination'
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className="testimonial-slide">
                                <div className="testimonial-card">
                                    <div className="testimonial-header">
                                        <div className="testimonial-author">
                                            <h4>{testimonial.name}</h4>
                                            <p className="testimonial-position">{testimonial.position}</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-title">
                                        <p>{testimonial.title}</p>
                                    </div>
                                    <p className="testimonial-text"><strong>До: </strong>{testimonial.text_before}</p>
                                    <p className="testimonial-text"><strong>После: </strong>{testimonial.text_after}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
