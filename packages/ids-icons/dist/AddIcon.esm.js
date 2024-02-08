import { __assign } from './node_modules/tslib/tslib.es6.esm.js';
import * as React from 'react';

function SvgAddIcon(props, svgRef) {
    return (React.createElement("svg", __assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React.createElement("path", { d: "M12 5v14m-7-7h14", stroke: "#000", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgAddIcon);
var MemoForwardRef = React.memo(ForwardRef);

export { MemoForwardRef as default };
//# sourceMappingURL=AddIcon.esm.js.map
