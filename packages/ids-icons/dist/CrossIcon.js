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

function SvgCrossIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { d: "M7.05 7.05l9.9 9.9m-9.9 0l9.9-9.9", stroke: "#000", strokeWidth: 2, strokeLinecap: "round" })));
}
var ForwardRef = React__namespace.forwardRef(SvgCrossIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=CrossIcon.js.map
