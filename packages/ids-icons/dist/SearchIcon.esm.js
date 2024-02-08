import { __assign } from './node_modules/tslib/tslib.es6.esm.js';
import * as React from 'react';

function SvgSearchIcon(props, svgRef) {
    return (React.createElement("svg", __assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React.createElement("circle", { cx: 11, cy: 11, r: 6, stroke: "#000", strokeWidth: 2 }),
        React.createElement("path", { d: "M20 20l-4-4", stroke: "#000", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgSearchIcon);
var MemoForwardRef = React.memo(ForwardRef);

export { MemoForwardRef as default };
//# sourceMappingURL=SearchIcon.esm.js.map
