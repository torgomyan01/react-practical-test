import { Colors, Variants } from "../@types/enums";

const defaultColors = {
  primary: "blue",
  gray: "gray",
  red: "red",
};

export const PrintVariants = (_variant: Variants, _colors: Colors) => {
  if (_variant === Variants.text) {
    return `p-0 text-${defaultColors[_colors]}-500 bg-transparent`;
  }
  if (_variant === Variants.outlined) {
    return `bg-transparent text-${defaultColors[_colors]}-500 border border-${defaultColors[_colors]}-500`;
  }
  if (_variant === Variants.contained) {
    return `text-white bg-${defaultColors[_colors]}-500 hover:bg-${defaultColors[_colors]}-600`;
  }
  if (_variant === Variants.link) {
    return `p-0 text-${defaultColors[_colors]}-500 underline`;
  }
};

export const classNames = (
  _classes: Record<string, boolean | undefined | null>,
) => {
  const keys = Object.keys(_classes);

  const trueClasses = keys.filter((key) => _classes[key]);

  return trueClasses.join(" ");
};

export const defState = (value: string, error: string) => {
  return {
    value,
    error,
  };
};
