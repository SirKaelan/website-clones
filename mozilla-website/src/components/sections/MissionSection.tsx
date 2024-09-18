import { Box } from "src/components/Box";
import { Container } from "src/components/Container";
import { PromoCard } from "src/components/PromoCard";

import img1 from "src/assets/img-1.jpg";
import img2 from "src/assets/img-2.jpg";
import img3 from "src/assets/img-3.png";

export const MissionSection = () => {
  return (
    <Box removePadding={["left", "right"]}>
      <div className="text-center flex flex-col gap-12 xl:gap-24">
        {/* Card component */}
        <Box removePadding={["top", "bottom"]}>
          <Container width="6xl">
            <div className="flex flex-col items-center gap-12 md:grid md:grid-cols-2 md:gap-x-16 xl:gap-x-20">
              <img src={img1} alt="Image of colorwave" className="md:order-2" />
              <div className="md:text-left md:order-1">
                <h2 className="text-3xl font-bold font-heading mb-4 md:text-4xl">
                  Join us in shaping trustworthy AI
                </h2>
                <p className="text-lg mb-6">
                  Mozilla’s work with AI isn’t just a new thing—we’ve spent
                  years funding, building and advocating for AI that’s open,
                  fair and developed responsibly. Our focus is on creating AI
                  that serves the people, prioritizes transparency and supports
                  the public good, not corporate agendas.
                </p>
                {/* Maybe make this button reusable */}
                <a
                  className="inline-block py-1.5 px-6 font-bold text-white bg-black border-2 border-black rounded hover:bg-opacity-15 hover:text-black transition text-center"
                  href="#"
                >
                  Read more
                </a>
              </div>
            </div>
          </Container>
        </Box>

        {/* Card component 2 - order is 1st image, 2nd text, the only outlier */}
        <Box removePadding={["top", "bottom"]}>
          <Container width="6xl">
            <div className="flex flex-col items-center gap-12 md:grid md:grid-cols-2 md:gap-x-16 xl:gap-x-20">
              <img src={img2} alt="Image of a group of people at a party" />
              <div className="md:text-left">
                <h2 className="text-3xl font-bold font-heading mb-4 md:text-4xl">
                  So, what is Mozilla?
                </h2>
                <p className="text-lg mb-6">
                  At its core, Mozilla is an activist organization led by the
                  Mozilla Foundation that makes change in the world through a
                  variety of ventures including Mozilla Corporation, MZLA,{" "}
                  <a
                    href="#"
                    className="text-blue-600 underline hover:no-underline"
                  >
                    Mozilla Ventures
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-600 underline hover:no-underline"
                  >
                    Mozilla AI
                  </a>
                  . How are we different? Because we’re mission-driven, it means
                  we have the freedom to make all of our decisions based on
                  what’s best for the internet and for everyone online, not
                  based on the demands of shareholders — we don’t actually have
                  any of those.
                </p>
                <a
                  className="inline-block py-1.5 px-6 font-bold text-white bg-black border-2 border-black rounded hover:bg-opacity-15 hover:text-black transition text-center"
                  href="#"
                >
                  Learn about the Mozilla Foundation
                </a>
              </div>
            </div>
          </Container>
        </Box>

        <PromoCard />

        {/* Card component 3 */}
        <Box removePadding={["top", "bottom"]}>
          <Container width="6xl">
            <div className="flex flex-col items-center gap-12 md:grid md:grid-cols-2 md:gap-x-16 xl:gap-x-20">
              <img
                src={img3}
                alt="Image of two people having a meeting"
                className="md:order-2"
              />
              <div className="md:text-left md:order-1">
                <h2 className="text-3xl font-bold font-heading mb-4 md:text-4xl">
                  Join the fight for a healthy internet
                </h2>
                <p className="text-lg mb-6">
                  Your voice. Your code. Your ideas. There are literally
                  thousands of ways you can contribute to Mozilla.
                </p>
                <a
                  className="inline-block py-1.5 px-6 font-bold text-white bg-black border-2 border-black rounded hover:bg-opacity-15 hover:text-black transition text-center"
                  href="#"
                >
                  Volunteer with Mozilla
                </a>
              </div>
            </div>
          </Container>
        </Box>
      </div>
    </Box>
  );
};
