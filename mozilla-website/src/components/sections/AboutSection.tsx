import { Box } from "src/components/Box";
import { Container } from "src/components/Container";
import { Heading } from "src/components/Heading";
import { Button } from "src/components/Button";
import { Paragraph } from "src/components/Paragraph";
import dinoHead from "src/assets/dinosaur-head.svg";

export const AboutSection = () => {
  return (
    <Box bgColor="gray" removePadding={"bottom"}>
      <Container width="4.5xl">
        <Heading
          variant="h2"
          fontSize="3.5xl"
          textAlign="left"
          breakpointStyles={{ md: { fontSize: "4.5xl", textAlign: "center" } }}
        >
          That one time we gave away our source-code…
        </Heading>
        <div className="flex flex-col items-start gap-5 my-6">
          <Paragraph fontSize="lg">
            The Mozilla project was founded in San Francisco in 1998, when the
            Netscape browser made the radical decision to give away its program
            code to the public to build on and improve. At that time, one
            company had a virtual monopoly on how people experienced the
            internet.
          </Paragraph>
          <Paragraph fontSize="lg">
            Eventually, the open-source Mozilla project morphed into the wildly
            popular first version of Firefox.
          </Paragraph>
          <Paragraph fontSize="lg">
            Today, Mozilla continues its movement toward a better internet with
            millions of active community members spanning the globe, advocating
            for ethical tech, trustworthy AI and producing privacy-first
            products that give more power to the people.
          </Paragraph>
        </div>
        <div className="flex justify-center">
          <Button href="#">Learn more about Mozilla</Button>
        </div>
        {/* Dino head */}
        <div className="relative h-24 flex justify-center overflow-clip">
          <img
            src={dinoHead}
            alt="Drawn dinosaur head"
            width={100}
            height={95}
            className="absolute top-4"
          />
        </div>
      </Container>
    </Box>
  );
};
