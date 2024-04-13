import * as React from "react";
import type { Ref, SVGProps } from "react";
import { forwardRef, memo } from "react";
const SvgVerticalMenuIcon = (
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
      fill="#000"
      fillRule="evenodd"
      d="M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVerticalMenuIcon);
const VerticalMenuIcon = memo(ForwardRef);
export { VerticalMenuIcon };
