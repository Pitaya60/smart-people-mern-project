import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-[#F4F4FF] py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#282828] mb-4">
          Связаться с нами
        </h2>
        <p className="text-lg text-[#282828] mb-10">
          Остались вопросы? Напишите нам — мы свяжемся с вами как можно скорее.
        </p>

        {/* Форма */}
        <form className="bg-white rounded-3xl shadow-md p-8 space-y-6">
          {/* Имя */}
          <div>
            <label className="block text-[#282828] mb-2 font-medium">
              Ваше имя
            </label>
            <input
              type="text"
              placeholder="Иван Иванов"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#282828] mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
            />
          </div>

          {/* Сообщение */}
          <div>
            <label className="block text-[#282828] mb-2 font-medium">
              Сообщение
            </label>
            <textarea
              rows="5"
              placeholder="Напишите ваш вопрос или сообщение..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
            ></textarea>
          </div>

          {/* Кнопка отправки */}
          <button
            type="submit"
            className="bg-[#3057FF] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
          >
            Отправить сообщение
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
