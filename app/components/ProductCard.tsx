// the card component layout
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="relative bg-white p-4 rounded-lg shadow-lg transition-transform hover:scale-105 my-20 max-w-xs min-h-[280px] "> {/* Adjusted height and width */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={image}
          alt={title}
          width={180}  
          height={180}  
          className="rounded-none"
        />
      </div>
      <div className="mt-[120px] text-center"> 
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="font-semibold text-[#864cf8]">${price}</p>
      </div>
    </div>
  );
}
