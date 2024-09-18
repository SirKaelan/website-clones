import { useState } from "react";

export const NewsletterForm = () => {
  const [emailInteracted, setEmailInteracted] = useState<boolean>(false);
  // TODO: state for form values

  const handleEmailClick = () => {
    if (emailInteracted) return;
    setEmailInteracted(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: clear form state values
  };

  return (
    <div className="text-left max-w-sm md:max-w-full md:ml-16">
      <form className="mb-6" onSubmit={handleSubmit}>
        <fieldset className="mb-6 flex flex-col gap-5">
          <div>
            <label htmlFor="id_email" className="block text-sm font-bold pb-2">
              Your email address:
            </label>
            <input
              id="id_email"
              type="email"
              name="email"
              placeholder="yourname@example.com"
              className="p-2 w-full border-2 rounded border-gray-400 hover:border-blue-800 placeholder-gray-500"
              onClick={handleEmailClick}
            />
          </div>

          {/* Hidden inputs */}
          {emailInteracted && (
            <>
              <div>
                <label
                  htmlFor="id_country"
                  className="block text-sm font-bold pb-2"
                >
                  Select country or region:
                </label>
                <select
                  id="id_country"
                  name="country"
                  defaultValue="bg"
                  className="p-2 w-full bg-white border-2 rounded border-gray-400 hover:border-blue-800"
                >
                  <option value="bg">Bulgaria</option>
                  <option value="uk">United Kingdom</option>
                  <option value="us">United States</option>
                  <option value="jp">Japan</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="id_lang"
                  className="block text-sm font-bold pb-2"
                >
                  Select language:
                </label>
                <select
                  id="id_lang"
                  name="lang"
                  defaultValue="bg"
                  className="p-2 w-full bg-white border-2 rounded border-gray-400 hover:border-blue-800"
                >
                  <option value="bg">Bulgarian</option>
                  <option value="uk">English</option>
                  <option value="us">Spanish</option>
                  <option value="jp">Japanese</option>
                </select>
              </div>

              <div>
                <label htmlFor="privacy" className="text-sm font-bold">
                  <input id="privacy" type="checkbox" className="mr-2" />
                  <span className="mr-1">
                    I’m okay with Mozilla handling my info as explained in
                  </span>
                  <a
                    href="#"
                    className="text-blue-600 underline hover:no-underline"
                  >
                    this Privacy Notice
                  </a>
                </label>
              </div>
            </>
          )}
        </fieldset>

        {/* Submit button */}
        <div className="inline-block text-center md:w-full">
          <button
            type="submit"
            className="py-1.5 px-6 w-full font-bold text-white bg-black border-2 border-black rounded hover:bg-opacity-15 hover:text-black transition"
          >
            Sign Up Now
          </button>
          <span className="text-xs inline-block">
            We will only send you Mozilla-related information.
          </span>
        </div>
      </form>
    </div>
  );
};
