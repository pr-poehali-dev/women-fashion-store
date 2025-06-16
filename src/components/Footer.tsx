import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-pink-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-2xl font-script text-rose-600">
                Paris Boutique
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Изысканная женская одежда для современных и стильных женщин.
              Качество, элегантность и внимание к деталям — наши главные
              принципы.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-rose-500 transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rose-500 transition-colors"
              >
                <Icon name="Facebook" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rose-500 transition-colors"
              >
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Навигация</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-rose-500 transition-colors"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="hover:text-rose-500 transition-colors"
                >
                  Новинки
                </Link>
              </li>
              <li>
                <Link
                  to="/sale"
                  className="hover:text-rose-500 transition-colors"
                >
                  Скидки
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-rose-500 transition-colors"
                >
                  О нас
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Поддержка</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to="/delivery-payment"
                  className="hover:text-rose-500 transition-colors"
                >
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="hover:text-rose-500 transition-colors"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Возврат товара
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Размерная сетка
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 Paris Boutique. Все права защищены.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-rose-500 transition-colors">
              Политика конфиденциальности
            </a>
            <span>•</span>
            <a href="#" className="hover:text-rose-500 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
