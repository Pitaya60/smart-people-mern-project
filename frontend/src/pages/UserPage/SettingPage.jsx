import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';

const kazakhCities = [
  "Алматы", "Астана", "Шымкент", "Караганда", "Актобе", "Тараз", "Павлодар", 
  "Усть-Каменогорск", "Семей", "Кызылорда", "Уральск", "Костанай", "Атырау", "Петропавловск"
];

const SettingsPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [city, setCity] = useState("");

  const onSubmit = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    Swal.fire({
      icon: 'success',
      title: 'Настройки сохранены',
      html: `
        <p><strong>Имя:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Телефон:</strong> ${data.phone}</p>
        <p><strong>Область:</strong> ${data.region}</p>
        <p><strong>Город:</strong> ${data.city}</p>
        <p><strong>Адрес:</strong> ${data.address}</p>
      `
    });
  };

  return (
    <section className="min-h-screen p-6 bg-[#F4F4FF] flex items-center justify-center">
      <div className="container max-w-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-[#282828] mb-6">Настройки профиля</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Имя */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#282828] mb-1">Имя</label>
              <input
                type="text"
                {...register("name", { required: "Введите имя" })}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#282828] mb-1">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Введите email",
                  pattern: { value: /^\S+@\S+$/i, message: "Неверный формат email" }
                })}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Телефон */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#282828] mb-1">Телефон</label>
              <InputMask
                mask="+7 (999) 999-99-99"
                {...register("phone", { required: "Введите номер телефона" })}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="tel"
                    className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
                  />
                )}
              </InputMask>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>

            {/* Область */}
            <div>
              <label htmlFor="region" className="block text-sm font-medium text-[#282828] mb-1">Область</label>
              <input
                type="text"
                {...register("region", { required: "Введите область" })}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              />
              {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region.message}</p>}
            </div>

            {/* Город */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-[#282828] mb-1">Город</label>
              <select
                {...register("city", { required: "Выберите город" })}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              >
                <option value="">Выберите город</option>
                {kazakhCities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
            </div>

            {/* Адрес */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-[#282828] mb-1">Адрес проживания</label>
              <input
                type="text"
                {...register("address", { required: "Введите адрес" })}
                className="w-full px-4 py-2 border rounded-md bg-[#F4F4FF] focus:outline-none focus:ring-2 focus:ring-[#3057FF]"
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
            </div>

            {/* Кнопка */}
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 font-semibold rounded-md text-white bg-[#3057FF] hover:bg-blue-700 transition"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
