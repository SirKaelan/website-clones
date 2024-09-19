import { Box } from "src/components/Box";
import { Container } from "src/components/Container";
import { Paragraph } from "src/components/Paragraph";
import { FooterDropdownButton } from "src/components/FooterDropdownButton";
import {
  footerButtonData,
  socialMediaData,
  languageData,
  legalDataButtons,
  legalDataText,
} from "src/data/footerData";

import mozillaLogoWhite from "src/assets/mozilla-logo-white.svg";

export const Footer = () => {
  return (
    <footer>
      <Box bgColor="black">
        <Container width="7.5xl">
          <div className="flex flex-col gap-12 text-white md:divide-y md:divide-gray-700">
            {/* Upper section */}
            <nav className="grid grid-cols-1 gap-y-8">
              {/* Logo */}
              <div>
                <a href="#" className="inline-block">
                  <img
                    src={mozillaLogoWhite}
                    alt="Mozilla Logo"
                    width={100}
                    height={32}
                  />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-y-2 xs:grid-cols-2 xs:gap-y-9 xs:gap-x-6 lg:flex lg:justify-between">
                {/* Footer menu content */}
                {footerButtonData.map((footerButtonData) => (
                  <section key={footerButtonData.title}>
                    <FooterDropdownButton buttonData={footerButtonData} />
                  </section>
                ))}
                {/* Social media data */}
                <section className="flex flex-col gap-6 md:gap-12">
                  {socialMediaData.map((socialMediaData) => (
                    <div key={socialMediaData.username}>
                      <h5 className="py-4 text-sm">
                        Follow @{socialMediaData.username}
                      </h5>
                      <ul>
                        {socialMediaData.links.map((socialMediaLink) => (
                          <li
                            className="inline-block mr-5"
                            key={socialMediaLink.socialMediaName}
                          >
                            <a href={socialMediaLink.href}>
                              <img
                                src={socialMediaLink.icon}
                                alt={`${socialMediaLink.socialMediaName} logo`}
                                className="h-4 w-4 hover:outline-dotted outline-1 outline-offset-4"
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>
              </div>
            </nav>

            {/* Lower section */}
            <nav className="flex flex-col gap-6 md:pt-12 md:flex-row">
              <div className="flex flex-col gap-2 md:order-2">
                <a className="self-start underline text-sm" href="#">
                  Language
                </a>
                <select className="self-start py-2 pl-2 pr-8 text-black text-xs border-2 border-neutral-400 hover:border-blue-500 rounded">
                  {languageData.map((languageData) => (
                    <option
                      key={languageData.languageCode}
                      lang={languageData.languageCode}
                      value={languageData.languageCode}
                    >
                      {languageData.languageName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-4 md:order-1 md:flex-grow">
                {/* Some legal links */}
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
            </nav>
          </div>
        </Container>
      </Box>
    </footer>
  );
};
