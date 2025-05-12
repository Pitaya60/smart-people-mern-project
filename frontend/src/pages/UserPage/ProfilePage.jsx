import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("userData");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F4FF]">
        <p className="text-gray-600 text-lg">Данные не найдены. Пожалуйста, заполните настройки профиля.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen p-6 bg-[#F4F4FF] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-[#282828] mb-6">Мой профиль</h2>

        <div className="space-y-4 text-[#282828]">
          <p><strong>Имя:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Телефон:</strong> {user.phone}</p>
          <p><strong>Область:</strong> {user.region}</p>
          <p><strong>Город:</strong> {user.city}</p>
          <p><strong>Адрес:</strong> {user.address}</p>
        </div>

        <div className="mt-6 text-right">
          <a href="/settings" className="text-[#3057FF] hover:underline">Редактировать профиль</a>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
