import React from 'react';
import bannerImg from '../../assets/image2.png';

const About = () => {
  return (
    <section className="bg-white px-6 py-16 text-[#1e1e1e]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Текстовая часть */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3057FF]">О проекте</h2>
          <p className="text-lg leading-relaxed mb-4">
Сервис позволяет каждому жителю подать заявку, предложить улучшения и участвовать в развитии города. Делитесь своими инициативами — и вас услышат.          </p>
        
        </div>

        {/* Иллюстрация */}
        <div className="relative">
          <img
            src={bannerImg}
            alt="О проекте"
          />
        </div>
      </div>
    </section>
  );
};

export default About;