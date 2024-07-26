import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase & {
    isOutline?: boolean;
    isLink?: boolean;
  };
