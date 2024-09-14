export const NewsletterForm = () => {
  return (
    <aside className="container-padding text-center">
      <div className="flex flex-col gap-12 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-3xl font-bold">
            Get (good) Mozilla news
          </h2>
          <p>
            Get news and tips from Mozilla to stay safe and informed on
            everything that makes the web a healthier place.
          </p>
        </div>
        <div className="text-left max-w-xs">
          <form>
            <fieldset className="mb-6">
              <label
                htmlFor="id_email"
                className="block text-sm font-bold pb-2"
              >
                Your email address:
              </label>
              <input
                id="id_email"
                type="email"
                name="email"
                placeholder="yourname@example.com"
                className="p-2 w-full border-2 rounded border-gray-400 hover:border-blue-800 mb-6 placeholder-gray-500"
              />
              {/* Additional inputs after click should go here */}
              <div className="inline-block">
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
            </fieldset>
          </form>
        </div>
      </div>
    </aside>
  );
};
