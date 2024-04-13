import * as React from "react";
import type { Ref, SVGProps } from "react";
import { forwardRef, memo } from "react";
const SvgFormatBulletedListIcon = (
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
      d="M6 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m5-3.5a1.5 1.5 0 0 0 0 3h8.5a1.5 1.5 0 0 0 0-3zm0 9a1.5 1.5 0 0 0 0 3h8.5a1.5 1.5 0 0 0 0-3zm0 9a1.5 1.5 0 0 0 0 3h8.5a1.5 1.5 0 0 0 0-3zM8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatBulletedListIcon);
const FormatBulletedListIcon = memo(ForwardRef);
export { FormatBulletedListIcon };
