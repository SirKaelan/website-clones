import mozillaVPNProductFeature from "src/assets/mozilla-vpn-product-feature.svg";

export const PromoCard = () => {
  return (
    <aside>
      <div className="py-6 px-12 flex flex-col items-center gap-6 bg-violet-200 rounded-lg">
        <img
          src={mozillaVPNProductFeature}
          alt="Mozilla VPN product feature image"
          height={150}
          width={160}
        />
        <div className="flex flex-col items-center gap-6">
          <small className="block text-violet-600 uppercase font-bold text-base">
            Featured Product
          </small>
          <h2 className="font-heading font-bold text-3xl">
            Blur your location & activity using{" "}
            <span className="text-lg font-bold font-heading text-violet-600 text-[length:inherit]">
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
