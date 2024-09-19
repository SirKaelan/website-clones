import { Box } from "src/components/Box";
import { Container } from "src/components/Container";
import { Heading } from "src/components/Heading";
import { Paragraph } from "src/components/Paragraph";

export const Header = () => {
  return (
    <header>
      <Box>
        <Container width="4.5xl">
          <div className="flex flex-col justify-center items-center gap-4 md:gap-6">
            <Heading
              variant="h1"
              fontSize="3.5xl"
              breakpointStyles={{ md: { fontSize: "5.5xl" } }}
            >
              Mission-driven. People-powered.
            </Heading>
            <Paragraph
              fontSize="lg"
              textAlign="center"
              specialFont
              breakpointStyles={{ md: { fontSize: "3xl" } }}
            >
              <span className="block max-w-3xl">
                We’re not a normal tech company. The things we create prioritize
                people and their privacy over profits. We exist to make the
                internet a healthier, happier place for everyone.
              </span>
            </Paragraph>
          </div>
        </Container>
      </Box>
    </header>
  );
};
