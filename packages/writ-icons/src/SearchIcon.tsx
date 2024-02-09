import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSearchIcon = (
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
    <circle cx={11} cy={11} r={6} stroke="#000" strokeWidth={2} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20 20-4-4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSearchIcon);
const SearchIcon = memo(ForwardRef);
export { SearchIcon };
