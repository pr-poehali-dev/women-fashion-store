import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-pink-50 to-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-800 mb-6">
              Элегантность в каждой детали
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Откройте для себя изысканную коллекцию женской одежды, созданную
              для современных и утонченных женщин
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/catalog"
                className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors font-medium"
              >
                Смотреть коллекцию
              </Link>
              <Link
                to="/new-arrivals"
                className="border-2 border-rose-300 text-rose-600 px-8 py-3 rounded-full hover:bg-rose-50 transition-colors font-medium"
              >
                Новинки
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-br from-pink-200 to-rose-300 p-8">
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=500&fit=crop"
                alt="Элегантная женская одежда"
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
