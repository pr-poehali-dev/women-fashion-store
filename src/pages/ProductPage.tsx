import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const ProductPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Мок данные товара
  const product = {
    id: id || "1",
    name: "Летний сарафан из натурального хлопка",
    price: 9800,
    originalPrice: 12500,
    description:
      "Воздушный летний сарафан из 100% хлопка с романтическим принтом. Идеально подходит для прогулок по городу и романтических свиданий.",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-c7fe5ce29f34?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571513722275-4b8c8ac4b44c?w=600&h=800&fit=crop",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Розовый", "Белый", "Голубой"],
    inStock: true,
    features: [
      "100% натуральный хлопок",
      "Ручная стирка при 30°C",
      "Романтический дизайн",
      "Свободный крой",
    ],
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Хлебные крошки */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-rose-500 transition-colors">
            Главная
          </Link>
          <Icon name="ChevronRight" size={16} />
          <Link to="/catalog" className="hover:text-rose-500 transition-colors">
            Каталог
          </Link>
          <Icon name="ChevronRight" size={16} />
          <span className="text-gray-700">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Галерея изображений */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-pink-50">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg ${
                    selectedImage === index ? "ring-2 ring-rose-400" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Информация о товаре */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-light text-gray-800 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-semibold text-rose-600">
                  {product.price.toLocaleString()} ₽
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      {product.originalPrice.toLocaleString()} ₽
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                      -{discount}%
                    </span>
                  </>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Выбор размера */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-800">Размер</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      selectedSize === size
                        ? "border-rose-400 bg-rose-50 text-rose-600"
                        : "border-gray-200 hover:border-rose-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Количество */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-800">Количество</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:border-rose-300 transition-colors"
                >
                  <Icon name="Minus" size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center hover:border-rose-300 transition-colors"
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="space-y-3">
              <button className="w-full bg-rose-500 text-white py-4 rounded-xl font-medium hover:bg-rose-600 transition-colors flex items-center justify-center space-x-2">
                <Icon name="ShoppingBag" size={20} />
                <span>Добавить в корзину</span>
              </button>
              <button className="w-full border border-rose-200 text-rose-600 py-4 rounded-xl font-medium hover:bg-rose-50 transition-colors flex items-center justify-center space-x-2">
                <Icon name="Heart" size={20} />
                <span>В избранное</span>
              </button>
            </div>

            {/* Особенности товара */}
            <div className="space-y-3">
              <h3 className="font-medium text-gray-800">Особенности</h3>
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-600"
                  >
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Доставка */}
            <div className="bg-pink-50 p-6 rounded-xl space-y-3">
              <h3 className="font-medium text-gray-800 flex items-center space-x-2">
                <Icon name="Truck" size={20} className="text-rose-500" />
                <span>Доставка</span>
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>Доставка по Москве — 1-2 дня</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Бесплатная доставка от 5000 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
