import { Box } from "src/components/Box";

export const Header = () => {
  return (
    <header>
      <Box>
        <div className="max-w-4xl mx-auto font-heading text-center flex flex-col justify-center items-center gap-4 md:gap-6">
          <h1 className="text-3xl font-bold md:text-5xl">
            Mission-driven. People-powered.
          </h1>
          <p className="text-lg md:text-3xl">
            We’re not a normal tech company. The things we create prioritize
            people and their privacy over profits. We exist to make the internet
            a healthier, happier place for everyone.
          </p>
        </div>
      </Box>
    </header>
  );
};
