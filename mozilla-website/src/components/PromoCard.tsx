import { Box } from "src/components/Box";
import { Heading } from "src/components/Heading";
import { Button } from "src/components/Button";
import mozillaVPNProductFeature from "src/assets/mozilla-vpn-product-feature.svg";

export const PromoCard = () => {
  return (
    <aside>
      <Box removePadding={["top", "bottom"]}>
        <div className="py-6 px-12 max-w-screen-2xl mx-auto flex flex-col items-center gap-6 bg-violet-200 rounded-lg md:flex-row md:gap-0">
          <img
            src={mozillaVPNProductFeature}
            alt="Mozilla VPN product feature image"
            width={160}
          />
          <div className="flex flex-col items-center gap-4 md:flex-grow md:items-start md:p-8 md:text-left">
            <small className="block text-violet-600 uppercase font-bold text-base md:text-lg">
              Featured Product
            </small>
            <Heading
              variant="h2"
              fontSize="2xl"
              breakpointStyles={{
                md: { fontSize: "2.5xl", textAlign: "left" },
              }}
            >
              Blur your location & activity using{" "}
              <span className="font-bold font-heading text-violet-600 text-[length:inherit]">
                Mozilla VPN
              </span>
            </Heading>
          </div>
          <Button href="#">Get Mozilla VPN</Button>
        </div>
      </Box>
    </aside>
  );
};
