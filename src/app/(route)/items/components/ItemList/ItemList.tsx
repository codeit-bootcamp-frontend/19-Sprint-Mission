'use client';

import { useState, useEffect } from 'react';
import ItemCard from "../ItemCard/ItemCard";
import { Product } from "@/types/product";

interface ItemListProps {
  items: Product[];
  isBest?: boolean;
};

const ItemList = ({items, isBest=false }: ItemListProps) => {
  const [itemsToShow, setItemsToShow] = useState(0);
  const [cols, setCols] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if(isBest) {
        if(width < 640) { setItemsToShow(1); }
        else if(width < 1024) { setItemsToShow(2); }
        else { setItemsToShow(4); }
      } else {
        if(width < 640) { setCols(2); setItemsToShow(4); }
        else if(width < 1024) { setCols(2); setItemsToShow(6); }
        else { setCols(2); setItemsToShow(10); }
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isBest]);

  
  return (
    <ul className="flex flex-wrap gap-6 w-[1205px] justify-center">
      {items.slice(0, itemsToShow).map((item) => (
        <li key={item.id}>
          <ItemCard
            imageUrl = {item.imageUrl}
            name = {item.name}
            price = {item.price}
            favoriteCount = {item.favoriteCount}
            isBest={isBest}/>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;

