import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLinkIcon = (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10.438 18.563-.813.812-.21.21a2 2 0 0 1-2.83 0l-2.144-2.144a2 2 0 0 1 .027-2.855L9.75 9.5l.061-.061a1.95 1.95 0 0 1 2.814.061v0l.688.75m.656-4.812.844-.813.197-.19a2 2 0 0 1 2.874.103L19.73 6.59a2 2 0 0 1-.073 2.752L14.5 14.5l-.086.086a2 2 0 0 1-2.828 0L11.5 14.5l-.75-.75"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLinkIcon);
const LinkIcon = memo(ForwardRef);
export { LinkIcon };
