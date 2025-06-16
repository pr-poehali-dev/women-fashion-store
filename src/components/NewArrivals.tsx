import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NewArrivals = () => {
  const newItems = [
    {
      id: 1,
      name: "Летний сарафан",
      price: 9800,
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop",
      isNew: true,
    },
    {
      id: 2,
      name: "Льняная рубашка",
      price: 6500,
      image:
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&h=400&fit=crop",
      isNew: true,
    },
    {
      id: 3,
      name: "Вязаный топ",
      price: 4200,
      image:
        "https://images.unsplash.com/photo-1571513722275-4b8c8ac4b44c?w=300&h=400&fit=crop",
      isNew: true,
    },
    {
      id: 4,
      name: "Макси юбка",
      price: 7800,
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=400&fit=crop",
      isNew: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Только что поступило
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">
            Новые поступления
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Свежие тренды и актуальные модели уже ждут вас в нашем каталоге
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-pink-100 rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.isNew && (
                  <div className="absolute top-3 right-3 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    NEW
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-gray-900">
                    {item.price.toLocaleString()} ₽
                  </span>
                  <button className="text-pink-500 hover:text-pink-600 transition-colors">
                    <Icon name="Heart" size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/new-arrivals"
            className="inline-flex items-center border-2 border-pink-300 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors font-medium"
          >
            Все новинки
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
