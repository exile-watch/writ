import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrashIcon = (
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
      d="M8 9h-.709a2 2 0 0 0-1.981 2.27l.954 7A2 2 0 0 0 8.246 20h7.508a2 2 0 0 0 1.982-1.73l.954-7A2 2 0 0 0 16.71 9H16M8 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3M8 9h8m-6 3v5m4-5v5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTrashIcon);
const TrashIcon = memo(ForwardRef);
export { TrashIcon };
