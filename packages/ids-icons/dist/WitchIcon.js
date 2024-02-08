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

function SvgWitchIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 4V24h24V0H0v4zm15.665 4.693c.047-.312-.576-.726-2.237-1.829l-.262-.173c-1.217-.81-1.912-.525-2.138.876-.065.407-.342 1.065-.614 1.464-.66.967-.647 1.013.439 1.542 1.162.566 1.42 1.158 1.253 2.876-.066.68-.05 1.047.042.909.176-.266.548.603.548 1.28 0 .215.098.427.217.47.121.046-.001.167-.275.275-.898.355-.452.628.946.58l1.286-.045-.522.346c-.287.19-.628.346-.758.346-.137.001-.194.109-.136.26.065.167-.08.349-.417.522-.672.345-.298 1.119.54 1.119.785 0 2.41-2.733 3.38-5.684.367-1.114.285-4.1-.119-4.353-.36-.227-1.086-.175-1.457.103-.363.273-.226.336.586.27.364-.03.38 0 .176.325-.143.227-.336.323-.53.262-.439-.139-.722.071-.483.357.132.158.135.263.009.34-.282.173-.216.487.078.375.338-.129.337.13-.001.41-.165.135-.528.18-.978.12-.924-.123-1.138-.333-.89-.873.14-.307.137-.473-.014-.635-.16-.172-.137-.196.11-.11.172.061.275.05.229-.025-.148-.237.125-.49 1.143-1.057l.114-.063c.435-.242.706-.392.735-.58z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgWitchIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=WitchIcon.js.map
