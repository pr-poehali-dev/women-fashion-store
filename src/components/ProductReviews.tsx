import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

const ProductReviews = () => {
  const [reviews] = useState<Review[]>([
    {
      id: 1,
      author: "Анна К.",
      rating: 5,
      date: "2024-05-15",
      comment:
        "Замечательный сарафан! Материал очень приятный, сидит идеально. Покупала размер M, подошёл отлично.",
      verified: true,
    },
    {
      id: 2,
      author: "Мария В.",
      rating: 4,
      date: "2024-05-10",
      comment:
        "Качество хорошее, но цвет немного отличается от фото. В целом довольна покупкой.",
      verified: true,
    },
    {
      id: 3,
      author: "София Л.",
      rating: 5,
      date: "2024-05-08",
      comment:
        "Очень красивый и удобный! Получила много комплиментов. Рекомендую!",
      verified: false,
    },
  ]);

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light text-gray-800">
          Отзывы покупателей
        </h2>
        <div className="flex items-center space-x-2">
          <div className="flex">{renderStars(Math.round(averageRating))}</div>
          <span className="text-sm text-gray-600">
            {averageRating.toFixed(1)} ({reviews.length} отзывов)
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-50 p-6 rounded-xl">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-600 font-medium">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-800">
                      {review.author}
                    </span>
                    {review.verified && (
                      <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                        Проверено
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      <button className="w-full border border-rose-200 text-rose-600 py-3 rounded-xl font-medium hover:bg-rose-50 transition-colors">
        Оставить отзыв
      </button>
    </div>
  );
};

export default ProductReviews;
