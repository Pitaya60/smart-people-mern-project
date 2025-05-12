import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import getBaseUrl from '../../utils/baseURL';
import { MdIncompleteCircle, MdFlag, MdCheckCircle, MdPending, MdPerson } from 'react-icons/md'
import RevenueChart from './RevenueChart';

// Компонент инициатив
const CityInitiatives = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    city: '',
    date: '',
    category: '',
    description: '',
    link: '',
  });
  
  const initiativeTypes = [
    { id: 'all', name: 'Все инициативы' },
    { id: 'map', name: 'Карта города', description: 'Сбор и анализ данных о городе для выявления проблем.' },
    { id: 'transport', name: 'Транспорт', description: 'Управление и оптимизация транспортной системы города.' },
    { id: 'ecology', name: 'Экология', description: 'Мониторинг экологического состояния города.' },
    { id: 'services', name: 'Городские сервисы', description: 'Оптимизация и автоматизация услуг для городской среды.' },
    { id: 'social', name: 'Социальная сфера', description: 'Поддержка и развитие социальных услуг.' },
    { id: 'economy', name: 'Экономика', description: 'Анализ экономических показателей.' },
    { id: 'portrait', name: 'Портрет города', description: 'Социально экономический портрет города Алматы.' },
    { id: 'socio-economic', name: 'Социально-экономический портрет', description: 'Детальный анализ ключевых аспектов жизни города.' },
    { id: 'security', name: 'Безопасность', description: 'Построение системы мониторинга и быстрого реагирования.' },
  ];
  
  const cities = [
    'Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актобе', 'Тараз', 'Павлодар', 
    'Усть-Каменогорск', 'Семей', 'Кызылорда', 'Уральск', 'Костанай', 'Петропавловск', 'Атырау', 'Актау'
  ];
  
  const categories = [
    'Экология', 'Образование', 'Инфраструктура', 'Здоровье', 
    'Транспорт', 'Безопасность', 'Социальная помощь', 'Другое'
  ];
  
  // Sample initiative data
  const initiatives = [
    { id: 1, type: 'ecology', title: 'Мониторинг качества воздуха', city: 'Алматы', date: '2025-05-01' },
    { id: 2, type: 'transport', title: 'Оптимизация автобусных маршрутов', city: 'Астана', date: '2025-04-15' },
    { id: 3, type: 'social', title: 'Программа поддержки пожилых', city: 'Шымкент', date: '2025-05-10' },
    { id: 4, type: 'map', title: 'Карта проблемных зон', city: 'Алматы', date: '2025-03-22' },
    { id: 5, type: 'security', title: 'Мониторинг безопасности районов', city: 'Караганда', date: '2025-04-30' },
  ];
  
  const filteredInitiatives = activeFilter === 'all' 
    ? initiatives 
    : initiatives.filter(initiative => initiative.type === activeFilter);
  
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    if (e) e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form and close
    setFormData({
      title: '',
      city: '',
      date: '',
      category: '',
      description: '',
      link: '',
    });
    setShowCreateForm(false);
  };
  
  return (
    <>
      {/* Filters */}
      <div className="mb-4">
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md text-gray-700"
        >
          Фильтр
         
        </button>
        
        {showFilters && (
          <div className="mt-2 p-4 bg-gray-50 rounded-md flex flex-wrap gap-2">
            {initiativeTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setActiveFilter(type.id)}
                className={`px-3 py-1.5 rounded-full text-sm ${
                  activeFilter === type.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Initiatives List */}
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">Список инициатив</h3>
        
        {filteredInitiatives.length > 0 ? (
          <div className="space-y-3">
            {filteredInitiatives.map(initiative => (
              <div key={initiative.id} className="p-3 bg-gray-50 rounded-md border border-gray-200">
                <h4 className="font-medium">{initiative.title}</h4>
                <div className="text-sm text-gray-500 mt-1">
                  {initiative.city} • {initiative.date}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-gray-500">
            Инициативы не найдены
          </div>
        )}
      </div>
      
      {/* Create Initiative Button */}
      <div className="mb-4">
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Создание инициативы
        </button>
      </div>
      
      {/* Create Initiative Form */}
      {showCreateForm && (
        <div className="p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-medium mb-4">Создание инициативы</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Название заявки</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block font-medium mb-1">Город</label>
              <select 
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              >
                <option value="">Выберите город</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block font-medium mb-1">Дата</label>
              <input 
                type="date" 
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block font-medium mb-1">Категория</label>
              <select 
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              >
                <option value="">Выберите категорию</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block font-medium mb-1">Описание</label>
              <textarea 
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                rows={4}
              />
            </div>
            
            <div>
              <label className="block font-medium mb-1">Ссылка (если есть)</label>
              <input 
                type="url" 
                value={formData.link}
                onChange={(e) => handleInputChange('link', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block font-medium mb-1">Прикрепить изображение</label>
              <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-4 pb-4">
                   
                    <p className="text-sm text-gray-500">Нажмите для загрузки</p>
                  </div>
                  <input type="file" className="hidden" />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <button 
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
              >
                Отмена
              </button>
              <button 
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Создать
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    // console.log(data)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response =  await axios.get(`${getBaseUrl()}/api/admin`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                })

                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
    }, []);

    // console.log(data)

    if(loading) return <Loading/>

  return (
    <>
     <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-[#3057FF] bg-blue-100 rounded-full mr-6">
                <MdFlag className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#282828]">{data?.totalBooks}</span>
                  <span className="block text-[#282828]">Инициативы</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-[#3057FF] bg-blue-100 rounded-full mr-6">
                  <MdCheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#282828]">{data?.totalSales}</span>
                  <span className="block text-[#282828]">Принятые</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-[#3057FF] bg-blue-100 rounded-full mr-6">
                  <MdPending className="h-6 w-6" />
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold text-[#282828]">{data?.trendingBooks}</span>
                  <span className="inline-block text-xl text-[#282828] font-semibold">(13%)</span>
                  <span className="block text-[#282828]">Незавершенные</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-[#3057FF] bg-blue-100 rounded-full mr-6">
                <MdIncompleteCircle className='size-6'/>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#282828]">{data?.totalOrders}</span>
                  <span className="block text-[#282828]">Всего запросов</span>
                </div>
              </div>
            </section>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100 text-[#282828]">График по месяцам</div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-center h-full px-4 py-16 text-[#282828] text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                  <RevenueChart />
                  </div>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-[#3057FF] bg-blue-100 rounded-full mr-6">
                  <MdPerson className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#282828]">02</span>
                  <span className="block text-[#282828]">Запросы</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-[#3057FF] bg-blue-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#282828]">139</span>
                  <span className="block text-[#282828]">Посещений сайта (за день)</span>
                </div>
              </div>
              <div className="row-span-3 bg-white shadow rounded-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span className="text-[#282828]">Пользователи </span>
                </div>
                <div className="overflow-y-auto" style={{maxHeight: '24rem'}}>
                  <ul className="p-6 space-y-6">
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-[#3057FF] rounded-full flex items-center justify-center text-white font-bold">АЖ</div>
                      <span className="text-[#282828]">Айжан Жумабек</span>
                      <span className="ml-auto font-semibold text-[#282828]">9</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-[#3057FF] rounded-full flex items-center justify-center text-white font-bold">НК</div>
                      <span className="text-[#282828]">Нурлан Касым</span>
                      <span className="ml-auto font-semibold text-[#282828]">8</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-[#3057FF] rounded-full flex items-center justify-center text-white font-bold">АТ</div>
                      <span className="text-[#282828]">Айдос Тасболат</span>
                      <span className="ml-auto font-semibold text-[#282828]">8</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-[#3057FF] rounded-full flex items-center justify-center text-white font-bold">СМ</div>
                      <span className="text-[#282828]">Сауле Магжан</span>
                      <span className="ml-auto font-semibold text-[#282828]">8</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-[#3057FF] rounded-full flex items-center justify-center text-white font-bold">ДН</div>
                      <span className="text-[#282828]">Динара Нурлан</span>
                      <span className="ml-auto font-semibold text-[#282828]">7</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-[#3057FF] rounded-full flex items-center justify-center text-white font-bold">АС</div>
                      <span className="text-[#282828]">Асхат Серик</span>
                      <span className="ml-auto font-semibold text-[#282828]">7</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-[#3057FF] rounded-full flex items-center justify-center text-white font-bold">ЖБ</div>
                      <span className="text-[#282828]">Жанар Болат</span>
                      <span className="ml-auto font-semibold text-[#282828]">6</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-[#3057FF] rounded-full flex items-center justify-center text-white font-bold">ТК</div>
                      <span className="text-[#282828]">Тимур Казыбек</span>
                      <span className="ml-auto font-semibold text-[#282828]">6</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100 text-[#282828]">Участники по типу инициативы</div>
                <div className="p-4 flex-grow">
                  {/* Вставляем компонент инициатив вместо плейсхолдера */}
                  <CityInitiatives />
                </div>
              </div>
            </section>
    </>
  )
}

export default Dashboard