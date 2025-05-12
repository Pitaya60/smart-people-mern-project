import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'Какой основной функционал вашего проекта?',
    answer: 'Наш проект помогает пользователям быстро находить проверенные квартиры по заданным критериям: бюджет, расположение, безопасность и договор аренды.',
  },
  {
    question: 'Безопасно ли пользоваться платформой?',
    answer: 'Да. Мы проверяем объявления, предупреждаем о мошенниках и помогаем пользователям заключать безопасные сделки с договорами и рекомендациями.',
  },
  {
    question: 'Могу ли я добавить свою квартиру?',
    answer: 'Конечно! Зарегистрируйтесь, заполните форму, прикрепите фото и отправьте на модерацию. Мы свяжемся с вами в течение 24 часов.',
  },
  {
    question: 'Как связаться с поддержкой?',
    answer: 'Вы можете написать нам на email: support@rentbuddy.kz или через Telegram-бот @rentbuddy_bot. Мы отвечаем быстро и с заботой.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F4F4FF] text-[#282828] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Часто задаваемые вопросы</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium focus:outline-none hover:bg-gray-50"
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
