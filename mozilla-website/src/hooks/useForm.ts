import { useState } from "react";

export const useForm = <T extends FormValues>({
  initialFormValues,
  initialErrorValues,
  validators,
}: UseFormProps<T>): UseFormReturn<T> => {
  const [formValues, setFormValues] = useState<T>(initialFormValues);
  const [formErrors, setFormErrors] =
    useState<FormErrorValues<T>>(initialErrorValues);

  const handleChange: ChangeEventHandler<T> = (fieldName, value) => {
    setFormValues((prevState) => ({ ...prevState, [fieldName]: value }));

    // Check for any value errors in the form fields
    if (validators[fieldName]) {
      const errorMessage = validators[fieldName](value);
      setFormErrors((prevState) => ({
        ...prevState,
        [fieldName]: errorMessage || "",
      }));
    }
  };

  const handleSubmit: SubmitEventHandler<T> = (e, onSubmit) => {
    e.preventDefault();

    // TODO: Validate fields before checking the errors state (in the case where you immediately submit before interacting with the form)

    if (
      Object.values(formErrors).filter((error) => error !== "").length === 0
    ) {
      onSubmit(formValues);
      return;
    }
  };

  return {
    formValues,
    formErrors,
    handleChange,
    handleSubmit,
  };
};

// Base types

// Might need to change to use a normal object for defining the type
// To see if typescript will start inferring "false" as boolean instead of the literal "false"
type FormValues = Record<string, string | boolean>;
type FormErrorValues<T> = Partial<Record<keyof T, string>>;
type ValidatorFn<T> = (value: T) => string;
type Validators<T extends FormValues> = {
  [K in keyof T]?: ValidatorFn<T[K]>;
};

// Handler types
type ChangeEventHandler<T extends FormValues> = <K extends keyof T>(
  fieldName: K,
  value: T[K]
) => void;
type SubmitEventHandler<T extends FormValues> = (
  e: React.FormEvent<HTMLFormElement>,
  onSubmit: (values: T) => void
) => void;

// Hook props type
type UseFormProps<T extends FormValues> = {
  initialFormValues: T;
  initialErrorValues: FormErrorValues<T>;
  validators: Validators<T>;
};

// Hook return type
type UseFormReturn<T extends FormValues> = {
  formValues: T;
  formErrors: FormErrorValues<T>;
  handleChange: ChangeEventHandler<T>;
  handleSubmit: SubmitEventHandler<T>;
};
