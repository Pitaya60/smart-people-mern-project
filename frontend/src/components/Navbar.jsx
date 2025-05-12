import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import logoImg from "../assets/idea.png";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  {name:"Создать заявку", href:"/create" }, 
  {name:'Истории заявок', href:"/cart"}, 
  {name:"ИИ-помощник", href:"/aichat"},
  {name:"Визуализация данных",href:""}, 
  {name: "Настройки", href: "/settings" },
  {name:"Мой Кабинет",href:"/profile"},
];

const menuLinks = [
  { name: "Главная", href: "/banner" },
  { name: "О проекте", href: "/about" },
  { name: "Сервисы", href: "/services" },
  { name: "Новости", href: "/news" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const { currentUser, logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  const token = localStorage.getItem("token");

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link to="/">
            <img src={logoImg} className="h-10 w-auto" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menuLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-[#282828] hover:text-[#3057FF] font-medium transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {currentUser ? (
            <>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img
                  src={avatarImg}
                  alt="user"
                  className={`h-8 w-8 rounded-full ${currentUser ? "ring-2 ring-[#3057FF]" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-4 top-20 w-48 bg-white shadow-lg rounded-md z-40">
                  <ul className="py-2">
                    {navigation.map((item) => (
                      <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Выйти
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : token ? (
            <Link to="/dashboard" className="border-b-2 border-[#3057FF] text-[#3057FF]">
              Dashboard
            </Link>
          ) : (
            <Link to="/login">
              <HiOutlineUser className="size-6 text-[#3057FF]" />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
