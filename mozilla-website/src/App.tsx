import { Navigation } from "src/components/Navigation";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Quote } from "src/components/Quote";
import { ProductCard } from "src/components/ProductCard";
import { products } from "src/data/productData";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <Quote
          quote="The health of the internet and online life is why we exist."
          author="Mitchell Baker, Executive Chair of the Board, Mozilla Foundation"
        />
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
        <Quote
          quote="Mozilla is taking bets to show the world there’s a business to be made with trustworthy AI. That includes putting things like human rights, data protection and transparency at the core of how these complex systems work."
          author="Politico"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
