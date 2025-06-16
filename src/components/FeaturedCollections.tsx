import { Link } from "react-router-dom";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Романтическая классика",
      description: "Нежные платья и блузки",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      link: "/catalog?category=romantic",
    },
    {
      id: 2,
      title: "Деловой шик",
      description: "Стильные костюмы и жакеты",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      link: "/catalog?category=business",
    },
    {
      id: 3,
      title: "Вечерняя элегантность",
      description: "Изысканные наряды для особых случаев",
      image:
        "https://images.unsplash.com/photo-1566479179817-c7fe5ce29f34?w=400&h=600&fit=crop",
      link: "/catalog?category=evening",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-4">
            Избранные коллекции
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждая коллекция создана с любовью к деталям и пониманием женской
            красоты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={collection.link}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-medium mb-2">{collection.title}</h3>
                <p className="text-sm opacity-90">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
