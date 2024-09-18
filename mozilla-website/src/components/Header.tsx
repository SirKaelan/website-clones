import { Box } from "src/components/Box";
import { Container } from "src/components/Container";

export const Header = () => {
  return (
    <header>
      <Box>
        <Container width="4.5xl">
          <div className="font-heading text-center flex flex-col justify-center items-center gap-4 md:gap-6">
            <h1 className="text-3xl font-bold md:text-5xl">
              Mission-driven. People-powered.
            </h1>
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
