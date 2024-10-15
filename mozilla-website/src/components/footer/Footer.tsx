import { Box } from "src/components/Box";
import { Container } from "src/components/Container";
import { FooterNav } from "src/components/footer/FooterNav";
import { FooterLogo } from "src/components/footer/FooterLogo";
import { FooterSocials } from "src/components/footer/FooterSocials";
import { FooterSelectLanguage } from "src/components/footer/FooterSelectLanguage";
import { FooterLegal } from "src/components/footer/FooterLegal";

export const Footer = () => {
  return (
    <footer>
      <Box bgColor="black">
        <Container width="7.5xl">
          <div className="flex flex-col gap-12 text-white md:divide-y md:divide-gray-700">
            {/* Upper section */}
            <nav className="grid grid-cols-1 gap-y-8">
              <FooterLogo />

              <div className="grid grid-cols-1 gap-y-2 xs:grid-cols-2 xs:gap-y-9 xs:gap-x-6 lg:flex lg:justify-between">
                <FooterNav />
                <FooterSocials />
              </div>
            </nav>

            {/* Lower section */}
            <nav className="flex flex-col gap-6 md:pt-12 md:flex-row">
              <FooterSelectLanguage />
              <FooterLegal />
            </nav>
          </div>
        </Container>
      </Box>
    </footer>
  );
};
