import { Fragment } from "react";
import { Box } from "src/components/Box";
import { PromoCard } from "src/components/PromoCard";
import { MissionCard } from "src/components/sections/mission/MissionCard";

import { missions } from "src/data/missionData";

export const MissionSection = () => {
  return (
    <Box removePadding={["left", "right"]}>
      <div className="text-center flex flex-col gap-12 xl:gap-24">
        {missions.map((mission, index) => {
          if (index === 1) {
            return (
              // Multiple component render
              <Fragment key={mission.id}>
                <MissionCard data={mission} order="reverse" />
                <PromoCard />
              </Fragment>
            );
          }
          return <MissionCard key={mission.id} data={mission} />;
        })}
      </div>
    </Box>
  );
};
