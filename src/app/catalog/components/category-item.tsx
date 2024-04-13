import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg">
        <Image
          src={category.imageUrl}
          alt={category.name}
          height={90} // Altura máxima da imagem
          width={90} // Largura máxima da imagem
          className="h-[70%] w-[80%] object-contain" // Estilo da imagem
        />
      </div>

      <div className="rounded-bl-lg rounded-br-lg bg-accent py-3">
        <p className="text-center text-sm font-semibold">{category.name}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
