import { languageData } from "src/data/footerData";

export const FooterSelectLanguage = () => {
  return (
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
  );
};
