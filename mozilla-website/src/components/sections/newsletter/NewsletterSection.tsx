import { NewsletterForm } from "src/components/sections/newsletter/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <aside className="container-padding text-center">
      <div className="flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-3xl font-bold">
            Get (good) Mozilla news
          </h2>
          <p>
            Get news and tips from Mozilla to stay safe and informed on
            everything that makes the web a healthier place.
          </p>
        </div>
        <NewsletterForm />
      </div>
    </aside>
  );
};
