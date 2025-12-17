import { useState } from "react";
import { toggleFavorite } from "../services/favorite";

export const useFavorite = (initialCount, productId) => {
  const [count, setCount] = useState(initialCount);
  const [isFavorite, setIsFavorite] = useState(false);

  const onToggle = async () => {
    setIsFavorite((prev) => !prev);
    setCount((prev) => prev + (isFavorite ? -1 : 1));

    try {
      await toggleFavorite(productId);
    } catch (e) {
      console.log(e)
      setIsFavorite((prev) => !prev);
      setCount((prev) => prev + (isFavorite ? 1 : -1));
    }
  };

  return { count, isFavorite, onToggle };
};
