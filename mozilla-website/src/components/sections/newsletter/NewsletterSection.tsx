import { Box } from "src/components/Box";
import { Container } from "src/components/Container";
import { Heading } from "src/components/Heading";
import { NewsletterForm } from "src/components/sections/newsletter/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <aside>
      <Box>
        <Container width="4.5xl">
          <div className="text-center flex flex-col gap-12 items-center md:flex-row md:items-start md:gap-0 md:justify-between">
            <div className="flex flex-col gap-4 md:text-left md:w-1/2">
              <Heading
                variant="h2"
                fontSize="3.5xl"
                textAlign="center"
                breakpointStyles={{
                  md: { fontSize: "4.5xl", textAlign: "left" },
                }}
              >
                Get (good) Mozilla news
              </Heading>
              <p>
                Get news and tips from Mozilla to stay safe and informed on
                everything that makes the web a healthier place.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Container>
      </Box>
    </aside>
  );
};
