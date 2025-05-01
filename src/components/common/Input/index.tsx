import {
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { classNames } from "../../../utils/helper";
import { Sizes } from "../../../@types/enums";
import { defSizes } from "../../../utils/constant";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode;
  required?: boolean;
  inputSize?: Sizes;
  error?: string | ReactNode;
  prefixIcon?: ReactNode;
  prefixPosition?: "start" | "end";
  onClickPrefix?: (arg: any) => any;
  disabled?: boolean;
}

export const Input = ({
  label,
  inputSize = Sizes.middle,
  error,
  required = false,
  prefixIcon,
  prefixPosition = "start",
  onClickPrefix,
  disabled,
  ...restProps
}: InputProps) => {
  // TODO make a global function that passes classnames with the condition, returns a string for the classname where corresponding true

  const classes = classNames({
    Input: true,
    Disabled: true,
    Error: false,
  });
  console.log(classes); // I did it but don't use, I have other solution form, you can check this method

  const input = useRef<HTMLInputElement | null>(null);
  const [inpFocused, setInpFocused] = useState<boolean>(false);

  // TODO replace classnames list with top logic

  const InputBlur = () => {
    if (!disabled) {
      const _input = input.current;
      if (_input && _input.matches(":-webkit-autofill")) {
        setInpFocused(true);
      } else if (_input && _input.value) {
        setInpFocused(true);
      } else if (_input && !_input.value) {
        setInpFocused(false);
      }
    }
  };

  const InputFocus = () => !disabled && setInpFocused(true);

  useEffect(() => {
    if (!disabled) {
      const delay = setTimeout(() => {
        InputBlur();
      }, 300);

      return () => clearTimeout(delay);
    }
  }, [input.current]);

  return (
    <>
      <label
        className={clsx(
          "w-full border block rounded-[6px] flex-jc-s relative transition focus-within:border-blue-600",
          defSizes[inputSize],
          {
            "ps-3": prefixPosition === "end",
            "ps-8": prefixPosition === "start",
            "!border-red-600": error,
            "opacity-50 cursor-default": disabled,
          },
        )}
        onClick={InputFocus}
        onFocus={InputFocus}
      >
        {label && (
          <span
            className={clsx(
              "absolute top-[50%] transform translate-y-[-50%] text-black/50 text-[15px] transition-all bg-white px-1 ",
              {
                "!top-0 scale-90": inpFocused,
                "!text-red-600": error,
              },
            )}
          >
            {label} {required && "*"}
          </span>
        )}
        {prefixIcon && (
          <span
            className={clsx(
              "absolute right-3 top-[50%] transform translate-y-[-50%] text-blue-600 transition w-[10px] h-[30px] flex-js-c",
              {
                "cursor-pointer": !!onClickPrefix,
                "right-3": prefixPosition === "end",
                "left-3": prefixPosition === "start",
                "!text-red-600": error,
              },
            )}
            onClick={onClickPrefix}
          >
            {prefixIcon}
          </span>
        )}
        <input
          ref={input}
          {...restProps}
          disabled={disabled}
          className="w-full h-full rounded-[6px] z-10 pl-1"
          required={required}
          onFocus={InputFocus}
          onBlur={InputBlur}
        />
      </label>
      {error && <div className="text-red-500 text-[12px] !mt-1">{error}</div>}
    </>
  );
};
