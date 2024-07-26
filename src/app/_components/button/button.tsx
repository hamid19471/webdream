import classNames from "classnames";
import { ButtonProps } from "./button.types";
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "btn-md",
  large: "btn-lg",
  wide: "btn-wide",
  full: "btn-full",
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  isDisabled = false,
  size = "normal",
  isLink = false,
  isOutline = false,
  type = "button",
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    "btn",
    className,
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { "btn-outline": isOutline },
    { "btn-link": isLink }
  );
  return (
    <button type={type} disabled={isDisabled} className={classes} {...rest}>
      {children}
    </button>
  );
};
