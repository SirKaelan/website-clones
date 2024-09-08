import { Navigation } from "src/components/Navigation";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <p className="text-2xl font-bold underline">Main website content</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
