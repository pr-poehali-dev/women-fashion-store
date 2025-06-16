import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-2xl font-script text-rose-600">
              Paris Boutique
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/new-arrivals"
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              Новинки
            </Link>
            <Link
              to="/sale"
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              Скидки
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              О нас
            </Link>
            <Link
              to="/delivery-payment"
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              Доставка
            </Link>
            <Link
              to="/contacts"
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              Контакты
            </Link>
          </div>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-rose-500 transition-colors"
            >
              <Icon name="ShoppingBag" size={24} />
              <span className="absolute -top-1 -right-1 bg-rose-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-pink-100 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/catalog"
                className="text-gray-700 hover:text-rose-500 transition-colors"
              >
                Каталог
              </Link>
              <Link
                to="/new-arrivals"
                className="text-gray-700 hover:text-rose-500 transition-colors"
              >
                Новинки
              </Link>
              <Link
                to="/sale"
                className="text-gray-700 hover:text-rose-500 transition-colors"
              >
                Скидки
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-rose-500 transition-colors"
              >
                О нас
              </Link>
              <Link
                to="/delivery-payment"
                className="text-gray-700 hover:text-rose-500 transition-colors"
              >
                Доставка
              </Link>
              <Link
                to="/contacts"
                className="text-gray-700 hover:text-rose-500 transition-colors"
              >
                Контакты
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
