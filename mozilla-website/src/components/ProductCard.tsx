import { Button } from "src/components/Button";

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
      <Button theme="light" href="#">
        Get {productName}
      </Button>
    </li>
  );
};
