import { Box } from "src/components/Box";
import { Container } from "src/components/Container";
import { Heading } from "src/components/Heading";
import { Button } from "src/components/Button";
import { Paragraph } from "src/components/Paragraph";
import { Mission } from "src/data/missionData";

export const MissionCard = ({ data, order }: MissionCardProps) => {
  const textOrderClass = order === "reverse" ? "md:order-2" : "md:order-1";
  const imgOrderClass = order === "reverse" ? "md:order-1" : "md:order-2";

  return (
    <Box removePadding={["top", "bottom"]}>
      <Container width="6xl">
        <div className="flex flex-col items-center gap-12 md:grid md:grid-cols-2 md:gap-x-16 xl:gap-x-20">
          <img
            src={data.image}
            alt="Image of colorwave"
            className={imgOrderClass}
          />
          <div className={textOrderClass}>
            <Heading
              variant="h2"
              fontSize="3.5xl"
              textAlign="center"
              breakpointStyles={{
                md: { fontSize: "4.5xl", textAlign: "left" },
              }}
            >
              {data.missionTitle}
            </Heading>
            <div className="flex flex-col gap-6 items-center md:items-start">
              <Paragraph
                fontSize="lg"
                textAlign="center"
                breakpointStyles={{ md: { textAlign: "left" } }}
              >
                {data.missionDescription}
              </Paragraph>
              <Button href="#">{data.buttonText}</Button>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

type MissionCardProps = {
  data: Mission;
  order?: "reverse";
};
