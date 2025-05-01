import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { PrintVariants } from "../../../utils/helper";
import { Colors, Sizes, Variants } from "../../../@types/enums";
import Loading from "../loading/loading";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Sizes;
  color?: Colors;
  variant?: Variants;
  isLoading?: boolean;
  disabled?: boolean;
}

export const Button = ({
  size = Sizes.middle,
  color = Colors.primary,
  variant = Variants.contained,
  className,
  children,
  disabled,
  isLoading = false,
  ...rest
}: IButtonProps) => {
  const _size = {
    [Sizes.small]: "px-2 h-8 text-[13px]",
    [Sizes.middle]: "px-4 h-10 text-[16px]",
    [Sizes.large]: "px-6 h-12 text-[18px]",
  };

  const getClasses = PrintVariants(variant, color) as string;

  return (
    <button
      className={clsx(
        _size[size],
        getClasses,
        "rounded-[6px] flex-jc-c gap-2 transition transform active:scale-[0.98]",
        className,
        {
          "opacity-50 cursor-default": disabled,
        },
      )}
      {...rest}
    >
      {isLoading ? <Loading color="white" /> : children}
    </button>
  );
};
