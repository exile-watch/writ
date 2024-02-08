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

function SvgFormatBulletedListIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 5a2 2 0 100-4 2 2 0 000 4zm5-3.5a1.5 1.5 0 000 3h8.5a1.5 1.5 0 000-3H11zm0 9a1.5 1.5 0 000 3h8.5a1.5 1.5 0 000-3H11zm0 9a1.5 1.5 0 000 3h8.5a1.5 1.5 0 000-3H11zM8 12a2 2 0 11-4 0 2 2 0 014 0zM6 23a2 2 0 100-4 2 2 0 000 4z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgFormatBulletedListIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=FormatBulletedListIcon.js.map
