import { __assign } from './node_modules/tslib/tslib.es6.esm.js';
import * as React from 'react';

function SvgEditIcon(props, svgRef) {
    return (React.createElement("svg", __assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React.createElement("path", { d: "M13.25 7.75l-.75.75L11 10l-6 6v3h3l6-6 1.5-1.5.75-.75m-3-3L14 7l3-3 3 3-3 3-.75.75m-3-3l3 3", stroke: "#000", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgEditIcon);
var MemoForwardRef = React.memo(ForwardRef);

export { MemoForwardRef as default };
//# sourceMappingURL=EditIcon.esm.js.map
