import {
    FaMapMarkedAlt,
    FaBus,
    FaLeaf,
    FaCity,
    FaUsers,
    FaChartLine,
    FaUserShield,
    FaStreetView,
    FaBalanceScale
  } from "react-icons/fa";
  
  const features = [
    {
      icon: <FaMapMarkedAlt size={30} />,
      title: "Карта города",
      desc: "Сбор и анализ данных о городе для выявления проблем.",
    },
    {
      icon: <FaBus size={30} />,
      title: "Транспорт",
      desc: "Управление и оптимизация транспортной системы города.",
    },
    {
      icon: <FaLeaf size={30} />,
      title: "Экология",
      desc: "Мониторинг экологического состояния города.",
    },
    {
      icon: <FaCity size={30} />,
      title: "Городские сервисы",
      desc: "Оптимизация и автоматизация услуг для городской среды.",
    },
    {
      icon: <FaUsers size={30} />,
      title: "Социальная сфера",
      desc: "Поддержка и развитие социальных услуг.",
    },
    {
      icon: <FaChartLine size={30} />,
      title: "Экономика",
      desc: "Анализ экономических показателей.",
    },
    {
      icon: <FaStreetView size={30} />,
      title: "Портрет города",
      desc: "Социально экономический портрет города Алматы.",
    },
    {
      icon: <FaBalanceScale size={30} />,
      title: "Социально-экономический портрет",
      desc: "Детальный анализ ключевых аспектов жизни города.",
    },
    {
      icon: <FaUserShield size={30} />,
      title: "Безопасность",
      desc: "Построение системы мониторинга и быстрого реагирования.",
    },
  ];
  
  const SmartCityGrid = () => {
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-2 text-[#282828]">
          Основные направления для создания умного города в Алматы:
        </h2>
        <p className="text-[#282828]/70 max-w-2xl mx-auto mb-12">
          Эти направления помогут Алматы стать удобнее и безопаснее для всех жителей, повышая уровень жизни и устойчивость города.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow transition hover:shadow-lg hover:text-[#3057FF] group"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#F4F4FF] rounded-full mb-4 transition group-hover:bg-[#3057FF]/20 group-hover:text-[#3057FF] text-[#3057FF]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#282828] transition group-hover:text-[#3057FF]">
                {item.title}
              </h3>
              <p className="text-[#282828]/60 group-hover:text-[#3057FF] transition">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SmartCityGrid;
  