import React, { useState } from "react";
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
type Validator = (value: string) => string;
type CheckboxValidator = (value: boolean) => string;
type ValidatorRecord = Record<keyof FormErrors, Validator | CheckboxValidator>;
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type InputOrSelectChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement
>;

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

  const handleFormElChange = (e: InputOrSelectChangeEvent) => {
    if (e.target.name in validators) {
      if (e.target.type === "checkbox") {
        setFormErrors((prevState) => ({
          ...prevState,
          [e.target.name]: (
            validators[e.target.name as keyof FormErrors] as CheckboxValidator
          )((e as InputChangeEvent).target.checked),
        }));
      } else {
        setFormErrors((prevState) => ({
          ...prevState,
          [e.target.name]: (
            validators[e.target.name as keyof FormErrors] as Validator
          )(e.target.value),
        }));
      }
    }

    setFormValues((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.type === "checkbox"
          ? (e as InputChangeEvent).target.checked
          : e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      Object.values(formErrors).filter((error) => error !== "").length === 0
    ) {
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
              onChange={handleFormElChange}
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
                  onChange={handleFormElChange}
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
                  onChange={handleFormElChange}
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
                <label htmlFor="id_privacy" className="text-sm font-bold">
                  <input
                    id="id_privacy"
                    name="privacy"
                    type="checkbox"
                    className="mr-2"
                    onChange={handleFormElChange}
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
const validateEmail: Validator = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required";
  if (!emailRegex.test(email)) return "Invalid email";
  return "";
};

const validatePrivacy: CheckboxValidator = (privacy) => {
  if (!privacy) return "You must agree to the privacy policy";
  return "";
};

// Record of validators
const validators: ValidatorRecord = {
  email: validateEmail,
  privacy: validatePrivacy,
};
