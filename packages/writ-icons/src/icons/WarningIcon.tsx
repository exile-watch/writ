import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWarningIcon = (
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
      d="M12.894 5.025a1 1 0 0 0-1.788 0L4.342 18.553A1 1 0 0 0 5.236 20h13.528a1 1 0 0 0 .894-1.447zM9.317 4.13c1.105-2.21 4.26-2.21 5.366 0l6.764 13.528c.998 1.995-.453 4.342-2.683 4.342H5.236c-2.23 0-3.68-2.347-2.683-4.342zM11 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgWarningIcon);
const WarningIcon = memo(ForwardRef);
export { WarningIcon };
