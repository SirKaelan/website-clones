import { Box } from "src/components/Box";
import { Container } from "src/components/Container";
import { Heading } from "src/components/Heading";
import { ProductCard } from "src/components/ProductCard";

import { products } from "src/data/productData";

export const ProductSection = () => {
  return (
    <Box>
      <Container width="6xl">
        <div className="text-center">
          <Heading
            variant="h2"
            fontSize="3.5xl"
            breakpointStyles={{ md: { fontSize: "4.5xl" } }}
          >
            Mozilla makes privacy-respecting products
          </Heading>
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
      </Container>
    </Box>
  );
};
