import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatItalicIcon = (
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
      d="M16 7a1 1 0 1 0 0-2zM8 17a1 1 0 1 0 0 2zm3-12a1 1 0 1 0 0 2zm2 14a1 1 0 1 0 0-2zm-5 0h2v-2H8zm6-12h2V5h-2zm-4 12h1v-2h-1zm2-12h1V5h-1zm1 0h1V5h-1zm-2 0h1V5h-1zm2 10h-2v2h2zm-2.051 1.316 4-12-1.898-.632-4 12z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatItalicIcon);
const FormatItalicIcon = memo(ForwardRef);
export { FormatItalicIcon };
