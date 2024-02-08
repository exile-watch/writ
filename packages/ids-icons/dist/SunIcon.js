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

function SvgSunIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 13a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 100-10 5 5 0 000 10zm1 2a1 1 0 10-2 0v2a1 1 0 102 0v-2zm4.707-2.707l1.414 1.414a1 1 0 01-1.414 1.414l-1.414-1.414a1 1 0 011.414-1.414zm1.5-10.086a1 1 0 00-1.414-1.414l-1.5 1.5a1 1 0 001.414 1.414l1.5-1.5zM4.793 4.793a1 1 0 011.414 0l1.5 1.5a1 1 0 01-1.414 1.414l-1.5-1.5a1 1 0 010-1.414zM19 11a1 1 0 100 2h2a1 1 0 100-2h-2zM2 12a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zm5.707 5.707a1 1 0 10-1.414-1.414l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgSunIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=SunIcon.js.map
