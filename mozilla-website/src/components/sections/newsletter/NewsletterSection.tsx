import { Box } from "src/components/Box";
import { Container } from "src/components/Container";
import { NewsletterForm } from "src/components/sections/newsletter/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <aside>
      <Box>
        <Container width="4.5xl">
          <div className="text-center flex flex-col gap-12 items-center md:flex-row md:items-start md:gap-0 md:justify-between">
            <div className="flex flex-col gap-4 md:text-left md:w-1/2">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Get (good) Mozilla news
              </h2>
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
