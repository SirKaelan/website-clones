import { socialMediaData } from "src/data/footerData";

export const FooterSocials = () => {
  return (
    <section className="flex flex-col gap-6 md:gap-12">
      {socialMediaData.map((socialMediaData) => (
        <div key={socialMediaData.username}>
          <h5 className="py-4 text-sm">Follow @{socialMediaData.username}</h5>
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
  );
};
