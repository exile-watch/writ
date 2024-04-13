import * as React from "react";
import type { Ref, SVGProps } from "react";
import { forwardRef, memo } from "react";
const SvgFormatHeadingTwoIcon = (
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
      d="M9 6a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0v-5h6v.5a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0v5H9zm5 10a1 1 0 1 0 0 2h1.234l-2.091 3.485A1 1 0 0 0 14 23h3a1 1 0 1 0 0-2h-1.234l2.092-3.485A1 1 0 0 0 17 16z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatHeadingTwoIcon);
const FormatHeadingTwoIcon = memo(ForwardRef);
export { FormatHeadingTwoIcon };
