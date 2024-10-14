import { Box } from "src/components/Box";
import { Heading } from "src/components/Heading";
import { Button } from "src/components/Button";
import { promoData } from "src/data/promoData";

export const PromoCard = () => {
  const data = promoData[0];

  return (
    <aside>
      <Box removePadding={["top", "bottom"]}>
        <div className="py-6 px-12 max-w-screen-2xl mx-auto flex flex-col items-center gap-6 bg-violet-200 rounded-lg md:flex-row md:gap-0">
          <img src={data.img} alt={data.imgAlt} width={160} />
          <div className="flex flex-col items-center gap-4 md:flex-grow md:items-start md:p-8 md:text-left">
            <small className="block text-violet-600 uppercase font-bold text-base md:text-lg">
              {data.heading}
            </small>
            <Heading
              variant="h2"
              fontSize="2xl"
              breakpointStyles={{
                md: { fontSize: "2.5xl", textAlign: "left" },
              }}
            >
              {data.content}{" "}
              {data.highlightedText && (
                <span className="font-bold font-heading text-violet-600 text-[length:inherit]">
                  {data.highlightedText}
                </span>
              )}
            </Heading>
          </div>
          <Button href="#">{data.btnContent}</Button>
        </div>
      </Box>
    </aside>
  );
};
