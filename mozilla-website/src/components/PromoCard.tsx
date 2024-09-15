import mozillaVPNProductFeature from "src/assets/mozilla-vpn-product-feature.svg";

export const PromoCard = () => {
  return (
    <aside>
      <div className="py-6 px-12 flex flex-col items-center gap-6 bg-violet-200 rounded-lg md:flex-row md:gap-0">
        <img
          src={mozillaVPNProductFeature}
          alt="Mozilla VPN product feature image"
          width={160}
        />
        <div className="flex flex-col items-center gap-4 md:flex-grow md:items-start md:p-8 md:text-left">
          <small className="block text-violet-600 uppercase font-bold text-base md:text-lg">
            Featured Product
          </small>
          <h2 className="font-heading font-bold text-2xl md:text-3xl">
            Blur your location & activity using{" "}
            <span className="font-bold font-heading text-violet-600 text-[length:inherit]">
              Mozilla VPN
            </span>
          </h2>
        </div>
        <a
          href="#"
          className="text-lg font-bold text-white py-2 px-6 bg-black rounded border-2 border-black hover:text-black hover:bg-neutral-200 transition"
        >
          Get Mozilla VPN
        </a>
      </div>
    </aside>
  );
};
