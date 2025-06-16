import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SaleSection = () => {
  const saleItems = [
    {
      id: 1,
      name: "Шелковое платье",
      originalPrice: 12500,
      salePrice: 8750,
      discount: 30,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Кашемировый кардigan",
      originalPrice: 15800,
      salePrice: 11060,
      discount: 30,
      image:
        "https://images.unsplash.com/photo-1571513722275-4b8c8ac4b44c?w=300&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Вечернее платье",
      originalPrice: 28500,
      salePrice: 17100,
      discount: 40,
      image:
        "https://images.unsplash.com/photo-1566479179817-c7fe5ce29f34?w=300&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Элегантная блузка",
      originalPrice: 7800,
      salePrice: 5460,
      discount: 30,
      image:
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Percent" size={16} className="mr-2" />
            Специальные предложения
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">
            Скидки до 40%
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Не упустите возможность приобрести любимые вещи по специальным ценам
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {saleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  -{item.discount}%
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">{item.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-medium text-rose-600">
                    {item.salePrice.toLocaleString()} ₽
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {item.originalPrice.toLocaleString()} ₽
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/sale"
            className="inline-flex items-center bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors font-medium"
          >
            Все скидки
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
