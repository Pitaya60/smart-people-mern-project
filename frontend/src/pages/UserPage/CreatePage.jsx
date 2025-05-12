import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/сart/CartSlice'
import { v4 as uuidv4 } from 'uuid' 

const kazakhCities = [
  'Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актобе', 'Тараз', 'Павлодар',
  'Усть-Каменогорск', 'Семей', 'Кызылорда', 'Уральск', 'Костанай', 'Петропавловск',
  'Атырау', 'Актау'
]

const categories = [
  'Экология', 'Образование', 'Инфраструктура', 'Здоровье',
  'Транспорт', 'Безопасность', 'Социальная помощь', 'Другое'
]

const InitiativeCreatePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [image, setImage] = useState(null)

  const onSubmit = (data) => {
    const newInitiative = {
      _id: uuidv4(), // Генерация уникального ID
      title: data.title,
      city: data.city,
      date: data.date,
      category: data.category,
      description: data.description,
      link: data.link || '',
      image: image ? URL.createObjectURL(image) : '', // Для предпросмотра
      authorName: 'Вы' // или current user name
    }

    dispatch(addToCart(newInitiative)) // Добавление инициативы в корзину

    Swal.fire({
      icon: 'success',
      title: 'Инициатива отправлена!',
      text: 'Спасибо за вашу активность!',
    }).then(() => navigate('/cart')) // Перенаправление на корзину
  }

  return (
    <section className="min-h-screen p-6 bg-[#F4F4FF] flex items-center justify-center">
      <div className="container max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-[#282828] mb-6 text-center">
            Создание инициативы
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Название */}
            <div>
              <label className="block text-sm font-medium text-[#282828] mb-1">
                Название заявки
              </label>
              <input
                type="text"
                {...register('title', { required: 'Введите название' })}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
            </div>

            {/* Город */}
            <div>
              <label className="block text-sm font-medium text-[#282828] mb-1">Город</label>
              <select
                {...register('city', { required: 'Выберите город' })}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              >
                <option value="">Выберите город</option>
                {kazakhCities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
            </div>

            {/* Дата */}
            <div>
              <label className="block text-sm font-medium text-[#282828] mb-1">Дата</label>
              <input
                type="date"
                {...register('date', { required: 'Выберите дату' })}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
            </div>

            {/* Категория */}
            <div>
              <label className="block text-sm font-medium text-[#282828] mb-1">Категория</label>
              <select
                {...register('category', { required: 'Выберите категорию' })}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              >
                <option value="">Выберите категорию</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
            </div>

            {/* Описание */}
            <div>
              <label className="block text-sm font-medium text-[#282828] mb-1">Описание</label>
              <textarea
                {...register('description', { required: 'Введите описание' })}
                className="w-full px-4 py-2 h-32 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              />
              {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
            </div>

            {/* Ссылка */}
            <div>
              <label className="block text-sm font-medium text-[#282828] mb-1">Ссылка (если есть)</label>
              <input
                type="url"
                {...register('link')}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              />
            </div>

            {/* Изображение */}
            <div>
              <label className="block text-sm font-medium text-[#282828] mb-1">Прикрепить изображение</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3057FF] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#282828] transition duration-300"
            >
              Отправить инициативу
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default InitiativeCreatePage
