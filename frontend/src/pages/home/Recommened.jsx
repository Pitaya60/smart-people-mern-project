import React from "react";
import capabilityImg from "../../assets/group.svg";
import img1 from "../../assets/icons/analytics.svg"
import img2 from "../../assets/icons/chart.svg"
import img3 from "../../assets/icons/report.svg"

const CapabilitiesSection = () => {
  return (
    <section className="bg-[#F4F4FF] text-[#282828] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Картинка */}
        <div className="md:w-1/2 w-full">
          <img src={capabilityImg} alt="Возможности центра" className="rounded-2xl shadow-md" />
        </div>

        {/* Контент */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Возможности</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            Центр обрабатывает городские данные в реальном времени, реагирует на угрозы и помогает быстро принимать важные решения для развития и безопасности.
          </p>

          <div className="space-y-8">
            {/* Блок 1 */}
            <div className="flex gap-4 items-start">
                <img src= {img1} alt="Анализ" className="w-6 h-6" />
              
              <div>
                <h3 className="text-xl font-semibold mb-1">Предиктивный анализ</h3>
                <p className="text-base text-[#282828]/80">
                  Прогнозирование событий и рисков с использованием алгоритмов анализа больших данных.
                </p>
              </div>
            </div>

            {/* Блок 2 */}
            <div className="flex gap-4 items-start">
                <img src={img2} alt="Визуализация" className="w-6 h-6" />
          
              <div>
                <h3 className="text-xl font-semibold mb-1">Визуализация в реальном времени</h3>
                <p className="text-base text-[#282828]/80">
                  Интерактивные панели, карты и графики помогают быстро реагировать и понимать происходящее.
                </p>
              </div>
            </div>

            {/* Блок 3 */}
            <div className="flex gap-4 items-start">
            
                <img src={img3} alt="Отчетность" className="w-6 h-6" />
           
              <div>
                <h3 className="text-xl font-semibold mb-1">Открытая отчетность</h3>
                <p className="text-base text-[#282828]/80">
                  Публикация отчетов и статистики — прозрачность действий и повышение доверия жителей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
