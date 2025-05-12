import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../../utils/getImgUrl'
import { removeFromCart, clearCart } from '../../redux/features/сart/CartSlice'

const InitiativeCartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const handleRemove = (initiative) => {
    dispatch(removeFromCart(initiative))
  }

  const handleClear = () => {
    dispatch(clearCart())
  }

  // Стейт для выбора активной вкладки (Новые или Архив)
  const [activeTab, setActiveTab] = useState('new')

  // Фильтрация инициатив
  const activeItems = cartItems.filter(item => item.status !== 'accepted' && item.status !== 'rejected')
  const archivedItems = cartItems.filter(item => item.status === 'accepted' || item.status === 'rejected')

  return (
    <section className="min-h-screen p-6 bg-[#F4F4FF] flex items-center justify-center">
      <div className="container max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-[#282828] mb-6 text-center">
            Избранные инициативы
          </h2>

          {/* Кнопки для переключения между новыми и архивом */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('new')}
              className={`px-4 py-2 text-sm font-semibold rounded-md ${activeTab === 'new' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Новые инициативы
            </button>
            <button
              onClick={() => setActiveTab('archived')}
              className={`px-4 py-2 text-sm font-semibold rounded-md ${activeTab === 'archived' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              Архив
            </button>
          </div>

          {/* Отображение активных инициатив или архива в зависимости от выбранной вкладки */}
          {activeTab === 'new' && activeItems.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-[#282828] mb-4">Новые инициативы</h3>
              <ul className="space-y-6">
                {activeItems.map(item => (
                  <li key={item._id} className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Link to={`/initiatives/${item._id}`}>
                          <img
                            src={getImgUrl(item.image)}
                            alt={item.title || 'Инициатива'}
                            className="h-full w-full object-cover object-center"
                          />
                        </Link>
                      </div>
                      <div className="ml-4 flex flex-col">
                        <h3 className="text-lg font-medium text-gray-900">
                          <Link to={`/initiatives/${item._id}`} className="hover:underline">
                            {item.title}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.description.length > 100
                            ? `${item.description.slice(0, 100)}...`
                            : item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-sm text-gray-500">Инициатор: {item.authorName || 'Аноним'}</p>
                      <button
                        onClick={() => handleRemove(item)}
                        className="mt-2 font-medium text-red-600 hover:text-red-500"
                      >
                        Удалить
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'archived' && archivedItems.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#282828] mb-4">Архив</h3>
              <ul className="space-y-6">
                {archivedItems.map(item => (
                  <li key={item._id} className="flex justify-between items-center border-b py-4">
                    <div className="flex items-center">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Link to={`/initiatives/${item._id}`}>
                          <img
                            src={getImgUrl(item.image)}
                            alt={item.title || 'Инициатива'}
                            className="h-full w-full object-cover object-center"
                          />
                        </Link>
                      </div>
                      <div className="ml-4 flex flex-col">
                        <h3 className="text-lg font-medium text-gray-900">
                          <Link to={`/initiatives/${item._id}`} className="hover:underline">
                            {item.title}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.description.length > 100
                            ? `${item.description.slice(0, 100)}...`
                            : item.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-sm text-gray-500">Инициатор: {item.authorName || 'Аноним'}</p>
                      <p className="mt-2 text-sm text-gray-500">
                        Статус: {item.status === 'accepted' ? '✅ Принята' : '❌ Отклонена'}
                      </p>
                      {item.rejectionReason && item.status === 'rejected' && (
                        <p className="text-sm text-red-500">Причина: {item.rejectionReason}</p>
                      )}
                      {item.category && (
                        <p className="text-sm text-gray-500">Категория: {item.category}</p>
                      )}
                      {item.location && (
                        <p className="text-sm text-gray-500">Локация: {item.location}</p>
                      )}
                      {item.createdAt && (
                        <p className="text-sm text-gray-400">Дата подачи: {new Date(item.createdAt).toLocaleDateString()}</p>
                      )}

                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 flex justify-between items-center">
            <div className="text-base font-medium text-gray-900">
              <p>Всего инициатив: {cartItems.length}</p>
            </div>

            {cartItems.length > 0 && (
              <button
                onClick={handleClear}
                className="px-6 py-3 text-white bg-red-500 rounded-md hover:bg-red-600 transition duration-200"
              >
                Очистить корзину
              </button>
            )}
          </div>

          <div className="mt-6 flex justify-center text-sm text-gray-500">
            <span>или</span>
            <Link to="/" className="ml-1 font-medium text-[#3057FF] hover:text-[#3057FF]">
              Вернуться на главную <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-6">
            <Link
              to="/allInitiatives"
              className="w-full flex justify-center items-center py-3 px-6 bg-[#3057FF] text-white font-semibold rounded-md hover:bg-[#282828] transition"
            >
              Смотреть другие инициативы
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InitiativeCartPage
