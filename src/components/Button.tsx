import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { ButtonType } from "../Types/ButtonType";

const Button = ({
  children,
  color = "primary",
  variant = "contained",
  rounded = false,
  ...rest
}: ButtonType) => {
  const isPri = color === "primary";
  const isSec = color === "secondary";
  const isSuc = color === "success";
  const isWarn = color === "warning";
  const isErr = color === "danger";

  let classes = classnames(
    rest?.className,
    "px-3 py-1.5 border flex items-center gap-x-1",
    {
      "bg-blue-500 border-blue-600 text-white": isPri,
      "border-gray-900 bg-gray-900 text-white": isSec,
      "border-green-500 bg-green-500 text-white": isSuc,
      "border-yellow-400 bg-yellow-400 text-white": isWarn,
      "border-red-500 bg-red-500 text-white": isErr,
      "rounded-full": rounded,
      "bg-white": variant === "outlined" || variant === "text",
      "text-blue-500": isPri && (variant === "outlined" || variant === "text"),
      "text-gray-500": isSec && (variant === "outlined" || variant === "text"),
      "text-green-500": isSuc && (variant === "outlined" || variant === "text"),
      "yellow-blue-500":
        isWarn && (variant === "outlined" || variant === "text"),
      "red-blue-500": isErr && (variant === "outlined" || variant === "text"),
      "border-0": variant === "text",
    }
  );

  classes = twMerge(classes);
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
