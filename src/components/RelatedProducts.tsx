import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

const RelatedProducts = () => {
  const products: Product[] = [
    {
      id: "2",
      name: "Элегантное платье в горошек",
      price: 8500,
      originalPrice: 11000,
      image:
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    },
    {
      id: "3",
      name: "Романтическая блузка",
      price: 4200,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    },
    {
      id: "4",
      name: "Летняя юбка макси",
      price: 5800,
      originalPrice: 7200,
      image:
        "https://images.unsplash.com/photo-1583496661160-fb5886a13c07?w=400&h=500&fit=crop",
    },
    {
      id: "5",
      name: "Кружевной топ",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1571513722275-4b8c8ac4b44c?w=400&h=500&fit=crop",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-light text-gray-800">Похожие товары</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => {
          const discount = product.originalPrice
            ? Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100,
              )
            : 0;

          return (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
            >
              <div className="space-y-3">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-pink-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {discount > 0 && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      -{discount}%
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Icon name="Heart" size={16} className="text-gray-600" />
                  </button>
                </div>

                <div className="space-y-1">
                  <h3 className="font-medium text-gray-800 text-sm line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-rose-600">
                      {product.price.toLocaleString()} ₽
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
