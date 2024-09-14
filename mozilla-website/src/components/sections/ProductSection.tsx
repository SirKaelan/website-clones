import { ProductCard } from "src/components/ProductCard";

import { products } from "src/data/productData";

export const ProductSection = () => {
  return (
    <section className="container-padding text-center">
      <h2 className="text-3xl font-bold font-heading">
        Mozilla makes privacy-respecting products
      </h2>
      <ul className="mt-16 flex flex-col items-center gap-16">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.productName}
            productDescription={product.productDescription}
            productIconPath={product.icon}
          />
        ))}
      </ul>
    </section>
  );
};
