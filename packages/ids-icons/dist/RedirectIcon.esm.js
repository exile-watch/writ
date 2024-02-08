import { __assign } from './node_modules/tslib/tslib.es6.esm.js';
import * as React from 'react';

function SvgRedirectIcon(props, svgRef) {
    return (React.createElement("svg", __assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React.createElement("path", { d: "M11 13l8-8m0 0h-7m7 0v7M7 5H5v14h14v-2", stroke: "#000", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgRedirectIcon);
var MemoForwardRef = React.memo(ForwardRef);

export { MemoForwardRef as default };
//# sourceMappingURL=RedirectIcon.esm.js.map
