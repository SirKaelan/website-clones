import { FloatingHeader } from "./components/FloatingHeader";
import { StatsCard } from "./components/StatsCard";

function App() {
  return (
    <>
      <div className="p-6">
        <FloatingHeader />
        <StatsCard />
        <span className="text-4xl">Dashyboard</span>
      </div>
    </>
  );
}

export default App;
