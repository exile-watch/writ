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

function SvgFormatQuoteIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.5 5C9.88 5 11 6.045 11 7.333 11 11.611 7.667 12 6.556 12c.924-.582 1.521-1.487 1.68-2.346C6.98 9.53 6 8.539 6 7.334 6 6.043 7.12 5 8.5 5zm7 0C16.88 5 18 6.045 18 7.333 18 11.611 14.667 12 13.556 12c.924-.582 1.521-1.487 1.68-2.346C13.98 9.53 13 8.539 13 7.334 13 6.043 14.12 5 15.5 5z", fill: "#000" }),
        React__namespace.createElement("path", { d: "M6.556 12l-.267-.423a.5.5 0 00.267.923V12zm1.68-2.346l.492.09a.5.5 0 00-.443-.588l-.049.498zM13.556 12l-.267-.423a.5.5 0 00.267.923V12zm1.68-2.346l.492.09a.5.5 0 00-.443-.588l-.049.498zM11.5 7.334c0-1.597-1.376-2.834-3-2.834v1c1.138 0 2 .853 2 1.833h1zM6.556 12.5c.596 0 1.821-.101 2.91-.81 1.128-.732 2.034-2.064 2.034-4.357h-1c0 1.985-.76 2.987-1.578 3.519-.855.555-1.852.648-2.366.648v1zm1.188-2.937c-.131.71-.64 1.5-1.455 2.014l.533.846c1.033-.65 1.72-1.671 1.906-2.678l-.984-.182zM5.5 7.333c0 1.493 1.206 2.673 2.687 2.818l.098-.995C7.253 9.056 6.5 8.252 6.5 7.333h-1zm3-2.833c-1.624 0-3 1.237-3 2.833h1c0-.98.862-1.833 2-1.833v-1zm10 2.833c0-1.596-1.376-2.833-3-2.833v1c1.138 0 2 .853 2 1.833h1zM13.556 12.5c.596 0 1.821-.101 2.91-.81 1.128-.732 2.034-2.064 2.034-4.357h-1c0 1.985-.76 2.987-1.578 3.519-.855.555-1.852.648-2.366.648v1zm1.189-2.937c-.132.71-.64 1.5-1.456 2.014l.533.846c1.033-.65 1.72-1.671 1.906-2.678l-.983-.182zM12.5 7.333c0 1.493 1.206 2.673 2.687 2.818l.098-.995c-1.032-.1-1.785-.904-1.785-1.823h-1zm3-2.833c-1.624 0-3 1.237-3 2.833h1c0-.98.862-1.833 2-1.833v-1z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgFormatQuoteIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=FormatQuoteIcon.js.map
