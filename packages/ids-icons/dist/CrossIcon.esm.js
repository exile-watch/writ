import { __assign } from './node_modules/tslib/tslib.es6.esm.js';
import * as React from 'react';

function SvgCrossIcon(props, svgRef) {
    return (React.createElement("svg", __assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React.createElement("path", { d: "M7.05 7.05l9.9 9.9m-9.9 0l9.9-9.9", stroke: "#000", strokeWidth: 2, strokeLinecap: "round" })));
}
var ForwardRef = React.forwardRef(SvgCrossIcon);
var MemoForwardRef = React.memo(ForwardRef);

export { MemoForwardRef as default };
//# sourceMappingURL=CrossIcon.esm.js.map
