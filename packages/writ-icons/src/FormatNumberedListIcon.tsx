import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatNumberedListIcon = (
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
      d="M7 1A1 1 0 0 0 5.354.237l-2 1.692a1 1 0 0 0 1.292 1.527l.354-.3v2.92a1 1 0 0 0 2 0zM4 8.462a1 1 0 0 0 0 2h1.248L3.139 14.03A1 1 0 0 0 4 15.539h3a1 1 0 0 0 0-2H5.752L7.861 9.97A1 1 0 0 0 7 8.462zm0 8.461a1 1 0 1 0 0 2h2v.539H5a1 1 0 0 0 0 2h1V22H4a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1v-5.077a1 1 0 0 0-1-1zM11.5 1.5a1.5 1.5 0 0 0 0 3H20a1.5 1.5 0 0 0 0-3zm0 9a1.5 1.5 0 0 0 0 3H20a1.5 1.5 0 0 0 0-3zm0 8.5a1.5 1.5 0 0 0 0 3H20a1.5 1.5 0 0 0 0-3z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatNumberedListIcon);
const FormatNumberedListIcon = memo(ForwardRef);
export { FormatNumberedListIcon };
