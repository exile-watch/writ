import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSunIcon = (
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
      d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10m1 2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm4.707-2.707 1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.414m1.5-10.086a1 1 0 0 0-1.414-1.414l-1.5 1.5a1 1 0 0 0 1.414 1.414zM4.793 4.793a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414M19 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM2 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m5.707 5.707a1 1 0 1 0-1.414-1.414l-1.5 1.5a1 1 0 1 0 1.414 1.414z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSunIcon);
const SunIcon = memo(ForwardRef);
export { SunIcon };
