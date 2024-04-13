import * as React from "react";
import type { Ref, SVGProps } from "react";
import { forwardRef, memo } from "react";
const SvgRedirectIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11 13 8-8m0 0h-7m7 0v7M7 5H5v14h14v-2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRedirectIcon);
const RedirectIcon = memo(ForwardRef);
export { RedirectIcon };
