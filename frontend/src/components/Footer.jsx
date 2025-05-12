import React from 'react'
import footerLogo from "../assets/idea.png"
import { FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-[#282828] text-[#F4F4FF] px-6 pt-10 pb-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

        {/* Logo and Description */}
        <div>
          <img src={footerLogo} alt="Logo" className="mb-4 w-28" />
          <p className="text-sm leading-relaxed text-[#F4F4FF]">
            Создаем интуитивное решение с заботой, функциональностью и любовью к деталям.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-[#3057FF] font-semibold mb-3">Навигация</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-[#3057FF]">Главная</a></li>
            <li><a href="#services" className="hover:text-[#3057FF]">Сервисы</a></li>
            <li><a href="#about" className="hover:text-[#3057FF]">О проекте</a></li>
            <li><a href="#contact" className="hover:text-[#3057FF]">Контакты</a></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-[#3057FF] font-semibold mb-3">Контакты</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: camillaabdulla04@gmail.com</li>
            <li>Телефон: +7 707 823 90 20</li>
            <li>Адрес: Satbayev University, Алматы</li>
          </ul>
        </div>

        {/* Map Embed */}
        <div>
          <h3 className="text-[#3057FF] font-semibold mb-3">Наше местоположение</h3>
          <div className="rounded-md overflow-hidden w-full h-32">
            <iframe
              title="Satbayev University Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.405991237964!2d76.94566101549224!3d43.2377289791376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836ef2851223ab%3A0xf2ae5636b503bfbf!2sSatbayev%20University!5e0!3m2!1sen!2skz!4v1684175322732!5m2!1sen!2skz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="border-t border-[#444] pt-4 flex justify-center gap-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3057FF]">
          <FaInstagram size={20} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3057FF]">
          <FaYoutube size={20} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
