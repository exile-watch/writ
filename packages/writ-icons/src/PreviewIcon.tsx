import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPreviewIcon = (
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
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        d="M7.972 8.038C6.867 8.772 5.71 9.89 4.536 11.52a.78.78 0 0 0-.003.926c1.577 2.074 3.907 4.097 6.478 4.612 1.258.252 2.596.149 3.989-.51 1.405-.666 2.92-1.924 4.464-4.067.21-.292.201-.666.003-.927-.86-1.131-1.945-2.248-3.17-3.112a5 5 0 1 1-8.325-.404m13.087 2.306c-1.706-2.244-4.414-4.71-7.677-5.363-1.659-.332-3.436-.189-5.237.664-1.789.847-3.546 2.367-5.232 4.705a2.78 2.78 0 0 0 .028 3.306c1.706 2.244 4.415 4.71 7.677 5.363 1.659.332 3.436.189 5.237-.664 1.789-.847 3.546-2.367 5.232-4.705a2.78 2.78 0 0 0-.028-3.306M11.5 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="#000"
      fillRule="evenodd"
      d="M7.972 8.038C6.867 8.772 5.71 9.89 4.536 11.52a.78.78 0 0 0-.003.926c1.577 2.074 3.907 4.097 6.478 4.612 1.258.252 2.596.149 3.989-.51 1.405-.666 2.92-1.924 4.464-4.067.21-.292.201-.666.003-.927-.86-1.131-1.945-2.248-3.17-3.112a5 5 0 1 1-8.325-.404m13.087 2.306c-1.706-2.244-4.414-4.71-7.677-5.363-1.659-.332-3.436-.189-5.237.664-1.789.847-3.546 2.367-5.232 4.705a2.78 2.78 0 0 0 .028 3.306c1.706 2.244 4.415 4.71 7.677 5.363 1.659.332 3.436.189 5.237-.664 1.789-.847 3.546-2.367 5.232-4.705a2.78 2.78 0 0 0-.028-3.306M11.5 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      d="m7.972 8.038 1.61 1.186-2.718-2.852zM4.536 11.52l1.622 1.169zm-.003.926-1.592 1.21zm6.478 4.612.393-1.961zm3.989-.51.855 1.807zm4.464-4.067 1.623 1.169zm.003-.927-1.592 1.21zm-3.17-3.112 1.153-1.634-2.87 2.659zm-2.915-3.46.393-1.962zm7.677 5.362-1.592 1.21zm-12.914-4.7L9 7.453zM2.913 10.35l1.623 1.17zm.028 3.306 1.592-1.21zm7.677 5.363.393-1.961zm5.237-.664L15 16.547zm5.232-4.705 1.622 1.17zM6.864 6.372c-1.346.896-2.668 2.2-3.95 3.978l3.244 2.339c1.067-1.48 2.058-2.412 2.921-2.986zm-3.95 3.978a2.78 2.78 0 0 0 .027 3.306l3.184-2.42c.35.459.322 1.052.033 1.453zm.027 3.306c1.706 2.244 4.415 4.71 7.677 5.363l.786-3.922c-1.88-.377-3.831-1.957-5.28-3.862zm7.677 5.363c1.659.332 3.437.189 5.237-.664l-1.711-3.615c-.985.466-1.883.528-2.74.357zm5.237-.664c1.789-.847 3.546-2.367 5.232-4.705l-3.245-2.339c-1.405 1.949-2.676 2.945-3.698 3.429zm5.232-4.705a2.78 2.78 0 0 0-.028-3.306l-3.184 2.42a1.22 1.22 0 0 1-.033-1.453zm-.028-3.306c-.959-1.262-2.186-2.532-3.61-3.536l-2.305 3.268c1.027.725 1.97 1.687 2.731 2.689zM19 11c0-1.306-.36-2.533-.986-3.583l-3.435 2.05c.267.447.421.969.421 1.533zm-7 7a7 7 0 0 0 7-7h-4a3 3 0 0 1-3 3zm-7-7a7 7 0 0 0 7 7v-4a3 3 0 0 1-3-3zm1.361-4.149A6.98 6.98 0 0 0 5 11h4c0-.668.216-1.28.582-1.776zm6.628.091c2.57.515 4.9 2.538 6.478 4.612l3.184-2.42C20.817 6.72 17.73 3.811 13.775 3.02zM9 7.452c1.393-.659 2.73-.762 3.99-.51l.784-3.922c-2.058-.412-4.276-.229-6.485.817zM4.536 11.52C6.08 9.376 7.596 8.118 9 7.453L7.29 3.836Q4.029 5.381 1.29 9.18zm-.003.926a.78.78 0 0 1 .003-.926L1.29 9.18c-1.2 1.665-1.246 3.972.058 5.687zm6.478 4.612c-2.57-.515-4.9-2.537-6.478-4.612l-3.184 2.42c1.834 2.413 4.922 5.322 8.877 6.114zm3.989-.51c-1.393.659-2.73.762-3.99.51l-.784 3.922c2.058.412 4.276.229 6.485-.817zm4.464-4.067c-1.545 2.143-3.06 3.401-4.464 4.066l1.711 3.616q3.26-1.544 5.998-5.343zm.003-.927a.78.78 0 0 1-.003.926l3.245 2.34c1.2-1.665 1.246-3.972-.058-5.687zM10 13a3.5 3.5 0 0 0 3.5-3.5h-4A.5.5 0 0 1 10 9zM6.5 9.5A3.5 3.5 0 0 0 10 13V9a.5.5 0 0 1 .5.5zM10 6a3.5 3.5 0 0 0-3.5 3.5h4a.5.5 0 0 1-.5.5zm3.5 3.5A3.5 3.5 0 0 0 10 6v4a.5.5 0 0 1-.5-.5z"
      mask="url(#a)"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPreviewIcon);
const PreviewIcon = memo(ForwardRef);
export { PreviewIcon };
