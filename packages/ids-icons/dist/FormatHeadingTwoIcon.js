'use strict';

var tslib_es6 = require('./node_modules/tslib/tslib.es6.js');
var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function SvgFormatHeadingTwoIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 6a1 1 0 00-2 0v12a1 1 0 102 0v-5h6v.5a1 1 0 102 0V6a1 1 0 10-2 0v5H9V6zm5 10a1 1 0 100 2h1.234l-2.091 3.485A1 1 0 0014 23h3a1 1 0 100-2h-1.234l2.092-3.485A1 1 0 0017 16h-3z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgFormatHeadingTwoIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=FormatHeadingTwoIcon.js.map
