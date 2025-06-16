import { useState } from "react";
import Icon from "@/components/ui/icon";

const SizeGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sizeChart = [
    { size: "XS", bust: "78-82", waist: "58-62", hips: "86-90" },
    { size: "S", bust: "82-86", waist: "62-66", hips: "90-94" },
    { size: "M", bust: "86-90", waist: "66-70", hips: "94-98" },
    { size: "L", bust: "90-94", waist: "70-74", hips: "98-102" },
    { size: "XL", bust: "94-98", waist: "74-78", hips: "102-106" },
  ];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="text-rose-600 hover:text-rose-700 underline text-sm font-medium flex items-center space-x-1"
      >
        <Icon name="Ruler" size={16} />
        <span>Таблица размеров</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-medium text-gray-800">
            Таблица размеров
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 font-medium">Размер</th>
                <th className="text-center py-3 font-medium">Грудь (см)</th>
                <th className="text-center py-3 font-medium">Талия (см)</th>
                <th className="text-center py-3 font-medium">Бёдра (см)</th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((row) => (
                <tr key={row.size} className="border-b border-gray-100">
                  <td className="py-3 font-medium text-rose-600">{row.size}</td>
                  <td className="py-3 text-center">{row.bust}</td>
                  <td className="py-3 text-center">{row.waist}</td>
                  <td className="py-3 text-center">{row.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-pink-50 rounded-xl">
          <div className="flex items-start space-x-2">
            <Icon name="Info" size={16} className="text-rose-500 mt-0.5" />
            <div className="text-sm text-gray-600">
              <p className="font-medium mb-1">Как измерить:</p>
              <p>• Грудь: по самой выступающей точке</p>
              <p>• Талия: по самому узкому месту</p>
              <p>• Бёдра: по самой широкой части</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
