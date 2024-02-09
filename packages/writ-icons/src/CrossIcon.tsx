import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCrossIcon = (
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
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="m7.05 7.05 9.9 9.9m-9.9 0 9.9-9.9"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCrossIcon);
const CrossIcon = memo(ForwardRef);
export { CrossIcon };
