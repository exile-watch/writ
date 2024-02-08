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

function SvgFormatItalicIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { d: "M16 7a1 1 0 100-2v2zM8 17a1 1 0 100 2v-2zm3-12a1 1 0 100 2V5zm2 14a1 1 0 100-2v2zm-5 0h2v-2H8v2zm6-12h2V5h-2v2zm-4 12h1v-2h-1v2zm2-12h1V5h-1v2zm1 0h1V5h-1v2zm-2 0h1V5h-1v2zm2 10h-2v2h2v-2zm-2.051 1.316l4-12-1.898-.632-4 12 1.898.632z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgFormatItalicIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=FormatItalicIcon.js.map
