'use client';

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react"; 

interface Props {
    className?: string;
}

const cats = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' }, 
  { id: 3, name: 'Закуски' }, 
  { id: 4, name: 'Завтрак' }, 
  { id: 5, name: 'Коктейли' }, 
  { id: 6, name: 'Кофе' }, 
  { id: 7, name: 'Напитки' }, 
  { id: 8, name: 'Десерты' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn(
        'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl items-center h-[52px]', // Установил h-[52px]
        className
      )}
    >
      {cats.map(({ name, id }, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-[44px] rounded-2xl px-5', // Высота кнопок немного меньше
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          href={`/#${name}`}
          key={index}
        >
          <button className="text-sm">{name}</button> {/* Добавил text-sm для аккуратности */}
        </a>
      ))}
    </div>
  );
};
