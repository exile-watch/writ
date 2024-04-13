import * as React from "react";
import type { Ref, SVGProps } from "react";
import { forwardRef, memo } from "react";
const SvgFormatCodeIcon = (
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
      d="M14.949 6.316a1 1 0 0 0-1.898-.632l-4 12a1 1 0 0 0 1.898.632zM8.207 7.793a1 1 0 0 1 0 1.414L5.414 12l2.793 2.793a1 1 0 1 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0m7.586 0a1 1 0 0 0 0 1.414L18.586 12l-2.793 2.793a1 1 0 0 0 1.414 1.414l3.5-3.5a1 1 0 0 0 0-1.414l-3.5-3.5a1 1 0 0 0-1.414 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatCodeIcon);
const FormatCodeIcon = memo(ForwardRef);
export { FormatCodeIcon };
