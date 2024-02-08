import { __assign } from './node_modules/tslib/tslib.es6.esm.js';
import * as React from 'react';

function SvgVerticalMenuIcon(props, svgRef) {
    return (React.createElement("svg", __assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 5a2 2 0 11-4 0 2 2 0 014 0zm0 7a2 2 0 11-4 0 2 2 0 014 0zm-2 9a2 2 0 100-4 2 2 0 000 4z", fill: "#000" })));
}
var ForwardRef = React.forwardRef(SvgVerticalMenuIcon);
var MemoForwardRef = React.memo(ForwardRef);

export { MemoForwardRef as default };
//# sourceMappingURL=VerticalMenuIcon.esm.js.map
