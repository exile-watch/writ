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

function SvgWarningIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.894 5.025a1 1 0 00-1.788 0L4.342 18.553A1 1 0 005.236 20h13.528a1 1 0 00.894-1.447L12.894 5.025zM9.317 4.13c1.105-2.21 4.26-2.21 5.366 0l6.764 13.528c.998 1.995-.453 4.342-2.683 4.342H5.236c-2.23 0-3.68-2.347-2.683-4.342L9.317 4.13zM11 17a1 1 0 112 0 1 1 0 01-2 0zm1-8a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgWarningIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=WarningIcon.js.map
