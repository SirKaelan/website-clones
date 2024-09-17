import { Box } from "src/components/Box";
import { NewsletterForm } from "src/components/sections/newsletter/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <aside>
      <Box>
        <div className="max-w-5xl mx-auto text-center flex flex-col gap-12 items-center md:flex-row md:items-start md:gap-16">
          <div className="flex flex-col gap-4 md:text-left md:w-2/5">
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
      </Box>
    </aside>
  );
};
