import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatHeadingOneIcon = (
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
      d="M9 6a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0v-5h6v.5a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0v5H9zm8 11a1 1 0 0 0-1.707-.707l-2 2a1 1 0 0 0 1.414 1.414l.293-.293V22a1 1 0 1 0 2 0z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatHeadingOneIcon);
const FormatHeadingOneIcon = memo(ForwardRef);
export { FormatHeadingOneIcon };
