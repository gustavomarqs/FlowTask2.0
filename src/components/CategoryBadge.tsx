import React from "react";

interface CategoryBadgeProps {
  category: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "concluído":
        return "bg-green-500 text-white";
      case "em progresso":
        return "bg-yellow-500 text-white";
      case "pendente":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
      {category}
    </span>
  );
};