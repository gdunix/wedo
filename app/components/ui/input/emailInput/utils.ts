export const validateEmail = (value: string) =>
  value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

export const isInvalid = (value: string) => {
  if (value === "") return false;

  return validateEmail(value) ? false : true;
};
