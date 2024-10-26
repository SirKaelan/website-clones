import { Paragraph } from "src/components/Paragraph";
import { legalDataButtons, legalDataText } from "src/data/footerData";

export const FooterLegal = () => {
  return (
    <div className="flex flex-col gap-4 md:order-1 md:flex-grow">
      {/* Legal links */}
      <ul>
        {legalDataButtons.map((button) => (
          <li
            key={button.buttonContent}
            className="inline-block pb-4 pr-6 last:pb-4 last:pr-0 text-xs underline hover:no-underline"
          >
            <a href={button.href}>{button.buttonContent}</a>
          </li>
        ))}
      </ul>
      {/* Legal text */}
      <Paragraph fontSize="xs">
        {legalDataText.map((item, index) => {
          if (item.type === "text") {
            return <span key={index}>{item.content}</span>;
          } else if (item.type === "link") {
            return (
              <a
                key={index}
                href={item.href}
                className="underline hover:no-underline"
              >
                {item.content}
              </a>
            );
          } else if (item.type === "break") {
            return <br key={index} />;
          }
          return null;
        })}
      </Paragraph>
    </div>
  );
};
