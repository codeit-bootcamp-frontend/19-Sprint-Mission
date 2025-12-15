import React from "react";
import Heart from "../../assets/ic_heart.svg?react"

const ProductCard = ({ product }) => {
  if (!product) return null;

  const {
    images = [],
    name,
    price,
    description,
    tags = [],
    favoriteCount,
  } = product;

  const thumnail = images[0]

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden">
      <div>
        {thumnail ? (
            <img src={thumnail} alt={name} className="w-full h-full object-cover" />
        ):(
            <div className="w-full h-full flex items-center justify-center text-gray-400">
                이미지 없음
            </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg truncate" >{name}</h3>

        <p className="text-gray-800 font-bold mt-1">{price.toLocaleString()}원</p>
      
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1 mt-3 text-gray-600 text-sm">
            <Heart size={16} className="text-red fill= #ef4444"/>
            <span>{favoriteCount}</span>
        </div>

      </div>
    </article>
  );
};

export default ProductCard;
