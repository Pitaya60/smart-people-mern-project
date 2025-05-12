import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../../utils/getImgUrl'

const AllInitiativesPage = () => {
  const allItems = useSelector(state => state.cart.allInitiatives) // или другой источник

  const [categoryFilter, setCategoryFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [searchText, setSearchText] = useState('')

  const filteredItems = (allItems || []).filter(item => {
    return (
      (!categoryFilter || item.category === categoryFilter) &&
      (!statusFilter || item.status === statusFilter) &&
      item.title.toLowerCase().includes(searchText.toLowerCase())
    )
  })

  return (
    <section className="min-h-screen bg-[#F4F4FF] p-6">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Все инициативы</h1>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <input
            type="text"
            placeholder="Поиск по названию"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="px-4 py-2 border rounded-md w-60"
          />
          <select
            value={categoryFilter}
            onChange={e => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            <option value="">Все категории</option>
            <option value="Экология">Экология</option>
            <option value="Образование">Образование</option>
            <option value="Технологии">Технологии</option>
          </select>
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            <option value="">Любой статус</option>
            <option value="new">Новая</option>
            <option value="accepted">Принята</option>
            <option value="rejected">Отклонена</option>
          </select>
        </div>

        {/* Список инициатив */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map(item => (
            <li key={item._id} className="bg-white rounded-xl shadow p-4 flex gap-4">
              <div className="h-24 w-24 overflow-hidden rounded-lg border border-gray-200">
                <Link to={`/initiatives/${item._id}`}>
                  <img
                    src={getImgUrl(item.image)}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold">
                    <Link to={`/initiatives/${item._id}`} className="hover:underline">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description.length > 80 ? `${item.description.slice(0, 80)}...` : item.description}
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Автор: {item.authorName || 'Аноним'} • Категория: {item.category}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 mt-8">Инициативы не найдены 😢</p>
        )}
      </div>
    </section>
  )
}

export default AllInitiativesPage
