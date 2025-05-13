import { useState } from "react";

const InitiativesDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Инициативы из первого файла
  const initiatives = [
    {
      _id: "1a2b3c4d-0001-1111-aaaa-123456789abc",
      title: "Очистка парка от мусора",
      city: "Алматы",
      date: "2025-05-20",
      category: "Экология",
      description: "Организация субботника в Центральном парке города.",
      link: "https://example.com/park-cleanup",
      image: "",
      authorName: "Вы"
    },
    {
      _id: "1a2b3c4d-0002-2222-bbbb-123456789abc",
      title: "Установка светофора у школы №56",
      city: "Астана",
      date: "2025-06-01",
      category: "Безопасность",
      description: "Просьба установить светофор у оживлённого перекрёстка рядом со школой.",
      link: "",
      image: "",
      authorName: "Вы"
    },
    {
      _id: "1a2b3c4d-0003-3333-cccc-123456789abc",
      title: "Открытие кружка робототехники",
      city: "Шымкент",
      date: "2025-06-15",
      category: "Образование",
      description: "Создание бесплатного кружка робототехники для школьников.",
      link: "https://example.com/robotics",
      image: "",
      authorName: "Вы"
    },
    {
      _id: "1a2b3c4d-0004-4444-dddd-123456789abc",
      title: "Ремонт автобусной остановки на ул. Абая",
      city: "Караганда",
      date: "2025-05-28",
      category: "Инфраструктура",
      description: "Разрушенная остановка нуждается в ремонте и установке навеса.",
      link: "",
      image: "",
      authorName: "Вы"
    },
    {
      _id: "1a2b3c4d-0005-5555-eeee-123456789abc",
      title: "Доступ к скорой помощи в районе Саяхат",
      city: "Павлодар",
      date: "2025-06-05",
      category: "Здоровье",
      description: "Необходима организация круглосуточного медицинского пункта.",
      link: "https://example.com/health-access",
      image: "",
      authorName: "Вы"
    }
  ];

  const cities = [
    'Все города', 'Алматы', 'Астана', 'Шымкент', 'Караганда', 'Павлодар'
  ];

  const categories = [
    'Все категории', 'Экология', 'Образование', 'Инфраструктура', 'Здоровье', 'Безопасность'
  ];

  // Форматирование даты
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Фильтрация инициатив
  const filteredInitiatives = initiatives.filter(initiative => {
    const matchesSearch = initiative.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         initiative.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = cityFilter === '' || cityFilter === 'Все города' || initiative.city === cityFilter;
    const matchesCategory = categoryFilter === '' || categoryFilter === 'Все категории' || initiative.category === categoryFilter;
    
    return matchesSearch && matchesCity && matchesCategory;
  });

  // Обработчики для удаления инициатив
  const handleDelete = (id) => {
    alert(`Инициатива ${id} будет удалена`);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Управление инициативами</h1>
        
        {/* Фильтры */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Поиск инициатив..."
              className="p-2 border rounded w-full md:w-auto flex-grow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <select 
              className="p-2 border rounded bg-white"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            
            <select 
              className="p-2 border rounded bg-white"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Создать новую инициативу
            </button>
          </div>
          
        
        </div>
        
        {/* Таблица инициатив */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">№</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Название</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Город</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Категория</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Описание</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Действия</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInitiatives.map((initiative, index) => (
                  <tr key={initiative._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{initiative.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{initiative.city}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {initiative.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(initiative.date)}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{initiative.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          Редактировать
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-900"
                          onClick={() => handleDelete(initiative._id)}
                        >
                          Удалить
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          Написать автору
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredInitiatives.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              Инициативы не найдены. Попробуйте изменить параметры поиска.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InitiativesDashboard;