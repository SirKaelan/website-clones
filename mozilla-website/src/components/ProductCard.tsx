type ProductCardProps = {
  productName: string;
  productDescription: string;
  productIconPath: string;
};

export const ProductCard = ({
  productName,
  productDescription,
  productIconPath,
}: ProductCardProps) => {
  return (
    <li className="w-72 flex flex-col justify-between items-center h-[200px]">
      <img
        src={productIconPath}
        alt={`${productName} Logo`}
        height={50}
        width={50}
      />
      <h3 className="font-bold">{productDescription}</h3>
      <a
        className="py-1.5 px-6 font-bold border-2 border-black rounded hover:backdrop-brightness-90 transition"
        href="#"
      >
        Get {productName}
      </a>
    </li>
  );
};
