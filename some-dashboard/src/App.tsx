import { FloatingHeader } from "./components/FloatingHeader";
import { StatsCard } from "./components/StatsCard";

function App() {
  return (
    <>
      <div className="flex flex-col gap-9 p-6">
        <FloatingHeader />
        <StatsCard>
          <StatsCard.Header>
            <StatsCard.Header.Icon className="red-gradient-bg red-shadow">
              <svg></svg>
            </StatsCard.Header.Icon>

            <StatsCard.Header.Stats label="Bookings" value="281" />
          </StatsCard.Header>

          <StatsCard.Content>
            <StatsCard.Content.Trend value="+55%" timeframe="than last week" />
          </StatsCard.Content>
        </StatsCard>

        <span className="text-4xl">Dashyboard</span>
      </div>
    </>
  );
}

export default App;
