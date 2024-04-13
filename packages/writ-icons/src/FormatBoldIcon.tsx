import * as React from "react";
import type { Ref, SVGProps } from "react";
import { forwardRef, memo } from "react";
const SvgFormatBoldIcon = (
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
      d="M8 6V5a1 1 0 0 0-1 1zm0 12H7a1 1 0 0 0 1 1zm6.27-6.135.448.894zM7 6v6h2V6zm0 6v6h2v-6zm1 1h6v-2H8zm0-6h5.698V5H8zm5.823 3.97-.27.136.894 1.788.27-.135zM8 19h5.698v-2H8zm5.553-6.106.27.136.895-1.79-.27-.134zM13.698 7q.065 0 .125.03l.895-1.79a2.3 2.3 0 0 0-1.02-.24zm.125.03c1.624.811 1.624 3.129 0 3.94l.895 1.79c3.098-1.55 3.098-5.97 0-7.52zm0 6c1.624.812 1.624 3.129 0 3.94l.895 1.79c3.098-1.55 3.098-5.97 0-7.52zM13.698 19c.354 0 .703-.082 1.02-.24l-.895-1.79a.3.3 0 0 1-.125.03z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatBoldIcon);
const FormatBoldIcon = memo(ForwardRef);
export { FormatBoldIcon };
