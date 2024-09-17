import { Box } from "src/components/Box";
import { ProductCard } from "src/components/ProductCard";

import { products } from "src/data/productData";

export const ProductSection = () => {
  return (
    <Box>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-heading md:text-4xl">
          Mozilla makes privacy-respecting products
        </h2>
        <ul className="mt-16 flex flex-col items-center justify-center gap-16 md:flex-row md:flex-wrap md:gap-x-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.productName}
              productDescription={product.productDescription}
              productIconPath={product.icon}
            />
          ))}
        </ul>
      </div>
    </Box>
  );
};
