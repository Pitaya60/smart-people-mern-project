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
            Наш проект — это не просто сервис по поиску жилья. Это <span className="font-semibold text-[#3057FF]">интуитивный помощник</span> для студентов и молодых людей, которые хотят найти безопасное, честное и доступное жильё.
          </p>
          <p className="text-md text-gray-700 mb-4">
            Мы вдохновились реальными историями людей, столкнувшихся с трудностями аренды. Из этого выросла идея создать продукт, где пользователю не нужно тратить часы на поиск и сомнительные звонки.
          </p>
          <p className="text-md text-gray-700">
            Здесь собраны <span className="font-medium">проверенные объявления, поддержка 24/7, удобный фильтр</span> и дружелюбный дизайн — всё, чтобы вы чувствовали себя уверенно.
          </p>
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
