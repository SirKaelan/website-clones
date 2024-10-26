import { useState } from "react";
import { Button } from "src/components/Button";

type FormState = {
  email: string;
  country: string;
  lang: string;
  privacy: boolean;
};

type FormErrors = {
  email: string;
  privacy: string;
};

export const NewsletterForm = () => {
  const [emailInteracted, setEmailInteracted] = useState<boolean>(false);
  // TODO: Do something about hardcoded country and lang codes
  const [formValues, setFormValues] = useState<FormState>({
    email: "",
    country: "bg",
    lang: "bg",
    privacy: false,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: "",
    privacy: "",
  });

  const handleEmailClick = () => {
    if (emailInteracted) return;
    setEmailInteracted(true);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      country: e.target.value,
    }));
  };

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      lang: e.target.value,
    }));
  };

  const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      privacy: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: FormErrors = {
      email: validateEmail(formValues.email),
      privacy: validatePrivacy(formValues.privacy),
    };

    setFormErrors(errors);

    if (Object.values(errors).filter((error) => error !== "").length === 0) {
      console.log("Form submitted:", formValues);
      return;
    }
  };

  return (
    <div className="text-left max-w-sm md:max-w-full md:ml-16">
      <form className="mb-6" onSubmit={handleSubmit}>
        <fieldset className="mb-6 flex flex-col gap-5">
          <div>
            {formErrors.email && (
              <div className="text-red-500">{formErrors.email}</div>
            )}
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
              onChange={handleEmailChange}
              value={formValues.email}
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
                  className="p-2 w-full bg-white border-2 rounded border-gray-400 hover:border-blue-800"
                  onChange={handleCountryChange}
                  value={formValues.country}
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
                  className="p-2 w-full bg-white border-2 rounded border-gray-400 hover:border-blue-800"
                  onChange={handleLangChange}
                  value={formValues.lang}
                >
                  <option value="bg">Bulgarian</option>
                  <option value="uk">English</option>
                  <option value="us">Spanish</option>
                  <option value="jp">Japanese</option>
                </select>
              </div>

              <div>
                {formErrors.privacy && (
                  <div className="text-red-500">{formErrors.privacy}</div>
                )}
                <label htmlFor="privacy" className="text-sm font-bold">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="mr-2"
                    onChange={handlePrivacyChange}
                    checked={formValues.privacy}
                  />
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

        {/* Submit button section */}
        <div className="inline-block text-center md:w-full">
          <Button variant="button">Sign Up Now</Button>
          <span className="text-xs inline-block">
            We will only send you Mozilla-related information.
          </span>
        </div>
      </form>
    </div>
  );
};

// Form field validators
const validateEmail = (email: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required";
  if (!emailRegex.test(email)) return "Invalid email";
  return "";
};

const validatePrivacy = (privacy: boolean): string => {
  if (!privacy) return "You must agree to the privacy policy";
  return "";
};
