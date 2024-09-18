import { Box } from "src/components/Box";
import { Container } from "src/components/Container";
import { Heading } from "src/components/Heading";

export const Header = () => {
  return (
    <header>
      <Box>
        <Container width="4.5xl">
          <div className="font-heading text-center flex flex-col justify-center items-center gap-4 md:gap-6">
            <Heading
              variant="h1"
              fontSize="3.5xl"
              breakpointStyles={{ md: { fontSize: "5.5xl" } }}
            >
              Mission-driven. People-powered.
            </Heading>
            <p className="text-lg md:text-3xl">
              We’re not a normal tech company. The things we create prioritize
              people and their privacy over profits. We exist to make the
              internet a healthier, happier place for everyone.
            </p>
          </div>
        </Container>
      </Box>
    </header>
  );
};
