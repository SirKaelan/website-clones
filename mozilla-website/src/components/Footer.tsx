import { DropdownButton } from "src/components/DropdownButton";
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
    <footer className="container-padding flex flex-col gap-12 bg-black text-white">
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

        <div>
          {/* Footer buttons */}
          {footerButtonData.map((footerButtonData) => (
            <section key={footerButtonData.title} className="mb-2">
              <DropdownButton buttonData={footerButtonData} />
            </section>
          ))}
          {/* Social media data */}
          <section className="flex flex-col gap-6">
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
      <nav className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
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
        <div className="flex flex-col gap-4">
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
          <p className="text-xs">
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
          </p>
        </div>
      </nav>
    </footer>
  );
};
