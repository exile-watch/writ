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

function SvgTrashIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { d: "M8 9h-.709a2 2 0 00-1.981 2.27l.954 7A2 2 0 008.246 20h7.508a2 2 0 001.982-1.73l.954-7A2 2 0 0016.71 9H16M8 9V6a2 2 0 012-2h4a2 2 0 012 2v3M8 9h8m-6 3v5m4-5v5", stroke: "#000", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React__namespace.forwardRef(SvgTrashIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=TrashIcon.js.map
