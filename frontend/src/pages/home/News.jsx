import React, { useState } from 'react'

const newsData = [
  {
    id: 1,
    title: 'Запущен проект цифровой карты Алматы',
    category: 'Карта города',
    date: '2025-05-01',
    image: 'https://source.unsplash.com/600x400/?map,city',
    summary: 'Новая карта поможет выявлять проблемные зоны и планировать развитие города.'
  },
  {
    id: 2,
    title: 'Обновление маршрутов общественного транспорта',
    category: 'Транспорт',
    date: '2025-04-28',
    image: 'https://source.unsplash.com/600x400/?bus,transport',
    summary: 'Маршруты и интервалы движения изменены для повышения удобства жителей.'
  },
  {
    id: 3,
    title: 'Уровень загрязнения снизился на 15%',
    category: 'Экология',
    date: '2025-04-21',
    image: 'https://source.unsplash.com/600x400/?nature,air',
    summary: 'В Алматы внедрены новые системы мониторинга и очистки воздуха.'
  },
  {
    id: 4,
    title: 'Оптимизация системы ЖКХ',
    category: 'Городские сервисы',
    date: '2025-04-17',
    image: 'https://source.unsplash.com/600x400/?services,city',
    summary: 'Новая платформа позволяет жителям быстрее оставлять заявки и получать ответы.'
  },
  {
    id: 5,
    title: 'Открытие нового центра помощи семьям',
    category: 'Социальная сфера',
    date: '2025-04-10',
    image: 'https://source.unsplash.com/600x400/?social,people',
    summary: 'Центр предоставит поддержку малоимущим и многодетным семьям.'
  },
  {
    id: 6,
    title: 'Рост малого бизнеса в Алматы',
    category: 'Экономика',
    date: '2025-04-05',
    image: 'https://source.unsplash.com/600x400/?economy,business',
    summary: 'Программы поддержки предпринимателей показали высокий результат.'
  },
  {
    id: 7,
    title: 'Алматы — цифровой портрет города',
    category: 'Портрет города',
    date: '2025-03-30',
    image: 'https://source.unsplash.com/600x400/?almaty,city',
    summary: 'Представлены ключевые показатели цифрового развития города.'
  },
  {
    id: 8,
    title: 'Новый отчёт о жизни в мегаполисе',
    category: 'Социально-экономический портрет',
    date: '2025-03-20',
    image: 'https://source.unsplash.com/600x400/?urban,society',
    summary: 'Исследование охватывает жильё, образование, работу и благосостояние.'
  },
  {
    id: 9,
    title: 'AI-мониторинг безопасности города',
    category: 'Безопасность',
    date: '2025-03-15',
    image: 'https://source.unsplash.com/600x400/?security,camera',
    summary: 'Внедрены новые камеры с AI для обнаружения угроз в реальном времени.'
  }
]

const categories = [
  'Все',
  'Карта города',
  'Транспорт',
  'Экология',
  'Городские сервисы',
  'Социальная сфера',
  'Экономика',
  'Портрет города',
  'Социально-экономический портрет',
  'Безопасность',
]


const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все')

  const filteredNews = selectedCategory === 'Все'
    ? newsData
    : newsData.filter(item => item.category === selectedCategory)

  return (
    <section className="min-h-screen bg-[#F4F4FF] p-6 font-avenir">
      <h2 className="text-3xl font-bold text-[#3057FF] text-center mb-6">Новости</h2>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              selectedCategory === cat
                ? 'bg-[#3057FF] text-white'
                : 'bg-white text-[#3057FF] border-[#3057FF]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map(news => (
          <div key={news.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-sm text-[#6B7280]">{news.date}</span>
              <h3 className="text-lg font-semibold text-[#282828] my-2">{news.title}</h3>
              <p className="text-sm text-[#4B5563]">{news.summary}</p>
              <div className="mt-4 text-right">
                <span className="text-xs text-[#3057FF]">{news.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewsPage
