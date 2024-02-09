import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatUnderlineIcon = (
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
      d="M9 6a1 1 0 0 0-2 0zm8 0a1 1 0 1 0-2 0zM8 17a1 1 0 1 0 0 2zm8 2a1 1 0 1 0 0-2zM7 6v3.585h2V6zm8 0v3.004h2V6zm-6.643 7.875c1.818 1.8 4.533 1.877 6.594.382l-1.174-1.619c-1.343.974-2.955.863-4.013-.184zM8 19h8v-2H8zm7-9.996c0 1.644-.309 2.97-1.223 3.634l1.174 1.619C16.73 12.967 17 10.687 17 9.004zm-8 .58c0 1.29.12 3.067 1.357 4.291l1.407-1.421C9.167 11.864 9 10.877 9 9.584z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatUnderlineIcon);
const FormatUnderlineIcon = memo(ForwardRef);
export { FormatUnderlineIcon };
