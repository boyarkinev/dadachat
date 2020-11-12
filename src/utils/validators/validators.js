export const required = value => {
  if (value) return undefined;
  return "Это обязательное поле";
}

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Максимальная длинна ${maxLength} символов`;
  return undefined;
}