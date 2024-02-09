import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgErrorIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M12.707 4.621a1 1 0 0 0-1.414 0L4.62 11.293a1 1 0 0 0 0 1.414l6.672 6.672a1 1 0 0 0 1.414 0l6.672-6.672a1 1 0 0 0 0-1.414zM9.88 3.207a3 3 0 0 1 4.242 0l6.672 6.672a3 3 0 0 1 0 4.242l-6.672 6.672a3 3 0 0 1-4.242 0L3.207 14.12a3 3 0 0 1 0-4.242zM11 15a1 1 0 1 0 2 0 1 1 0 0 0-2 0m2-7v4a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgErrorIcon);
const ErrorIcon = memo(ForwardRef);
export { ErrorIcon };
