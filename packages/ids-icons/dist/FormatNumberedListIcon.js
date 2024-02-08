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

function SvgFormatNumberedListIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 1A1 1 0 005.354.237l-2 1.692a1 1 0 001.292 1.527l.354-.3v2.92a1 1 0 002 0V1zM4 8.462a1 1 0 000 2h1.248L3.139 14.03A1 1 0 004 15.539h3a1 1 0 000-2H5.752L7.861 9.97A1 1 0 007 8.462H4zm0 8.461a1 1 0 100 2h2v.539H5a1 1 0 000 2h1V22H4a1 1 0 100 2h3a1 1 0 001-1v-5.077a1 1 0 00-1-1H4zM11.5 1.5a1.5 1.5 0 000 3H20a1.5 1.5 0 000-3h-8.5zm0 9a1.5 1.5 0 000 3H20a1.5 1.5 0 000-3h-8.5zm0 8.5a1.5 1.5 0 000 3H20a1.5 1.5 0 000-3h-8.5z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgFormatNumberedListIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=FormatNumberedListIcon.js.map
