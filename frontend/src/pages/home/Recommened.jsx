import React from "react";

const CapabilitiesSection = () => {
  return (
    <section className="bg-[#F4F4FF] text-[#282828] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Возможности Ситуационного Центра
          </h2>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
            Центр отслеживает в режиме реального времени городские процессы, выявляет угрозы и помогает оперативно принимать управленческие решения для обеспечения безопасности и устойчивого развития.
          </p>

          <a
            href="#data"
            className="mt-6 inline-block text-[#3057FF] font-medium border-b-2 border-[#3057FF] hover:text-blue-700 transition duration-200"
          >
            Перейти к данным →
          </a>
        </div>

        {/* Блоки с возможностями */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Карточка 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-[#3057FF] text-5xl font-bold mb-4">01</div>
            <h3 className="text-xl font-semibold mb-3">
              Анализ и прогнозирование данных
            </h3>
            <p className="text-base leading-relaxed">
              Применение аналитических алгоритмов для анализа данных и прогнозирования возможных происшествий. Это позволяет городским службам действовать на опережение, снижая риски и повышая безопасность.
            </p>
          </div>

          {/* Карточка 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-[#3057FF] text-5xl font-bold mb-4">02</div>
            <h3 className="text-xl font-semibold mb-3">Визуализация данных</h3>
            <p className="text-base leading-relaxed">
              Все поступающие данные отображаются на интерактивных панелях, графиках и картах. Это облегчает восприятие информации, ускоряет принятие решений и предоставляет комплексное представление о текущей ситуации.
            </p>
          </div>

          {/* Карточка 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-[#3057FF] text-5xl font-bold mb-4">03</div>
            <h3 className="text-xl font-semibold mb-3">Прозрачность и отчетность</h3>
            <p className="text-base leading-relaxed">
              Ситуационный центр формирует регулярные отчеты и предоставляет открытые статистические данные. Это повышает прозрачность деятельности органов управления и укрепляет доверие со стороны горожан.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
