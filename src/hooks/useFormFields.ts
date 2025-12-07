import { useState } from "react";

export function useFormFields<T extends Record<string, string>>(
  initialValues: T
) {
  const [form, setForm] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, string>>(
    Object.keys(initialValues).reduce((acc, key) => {
      acc[key as keyof T] = "";
      return acc;
    }, {} as Record<keyof T, string>)
  );

  const updateField = (name: keyof T, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return { form, errors, setErrors, updateField };
}
