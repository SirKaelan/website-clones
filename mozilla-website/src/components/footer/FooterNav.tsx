import { FooterMobileNav } from "src/components/footer/FooterMobileNav";
import { footerButtonData } from "src/data/footerData";

export const FooterNav = () => {
  return (
    <>
      {footerButtonData.map((footerButtonData) => (
        <section key={footerButtonData.title}>
          <FooterMobileNav buttonData={footerButtonData} />

          {/* Wider screen nav */}
          <div className="hidden xs:block">
            <h5 className="py-4 font-bold font-heading">
              {footerButtonData.title}
            </h5>
            <ul>
              {footerButtonData.links.map((link) => (
                <li className="py-1" key={link.title}>
                  <a className="hover:underline" href={link.href}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
};
