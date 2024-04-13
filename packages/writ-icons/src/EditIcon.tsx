import * as React from "react";
import type { Ref, SVGProps } from "react";
import { forwardRef, memo } from "react";
const SvgEditIcon = (
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
      d="m13.25 7.75-.75.75L11 10l-6 6v3h3l6-6 1.5-1.5.75-.75m-3-3L14 7l3-3 3 3-3 3-.75.75m-3-3 3 3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEditIcon);
const EditIcon = memo(ForwardRef);
export { EditIcon };
