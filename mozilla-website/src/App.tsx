import { Navigation } from "src/components/Navigation";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Quote } from "src/components/Quote";
import { NewsletterForm } from "src/components/sections/NewsletterForm";
import { AboutSection } from "src/components/sections/AboutSection";
import { MissionSection } from "src/components/sections/MissionSection";
import { ProductSection } from "src/components/sections/ProductSection";

import { quotes } from "src/data/quoteData";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <Quote content={quotes[0].content} author={quotes[0].author} />
        <ProductSection />
        <Quote content={quotes[1].content} author={quotes[1].author} />
        <MissionSection />
        <AboutSection />
        <NewsletterForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
