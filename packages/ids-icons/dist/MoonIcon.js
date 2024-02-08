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

function SvgMoonIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("mask", { id: "MoonIcon_svg__a", fill: "#fff" },
            React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 2.385a1 1 0 01-.245 1.455c-.94.63-1.716 1.505-2.121 2.483a5.552 5.552 0 007.254 7.254c.978-.405 1.853-1.181 2.483-2.12a.985.985 0 01.367-.338 1.003 1.003 0 011.354.407c.08.15.122.32.119.49a10 10 0 11-9.927-10.013c.29.02.547.166.716.382zm6.667 12.514c-.321.202-.66.38-1.014.526a7.552 7.552 0 01-9.867-9.867c.147-.354.324-.693.526-1.014a8 8 0 1010.355 10.355z" })),
        React__namespace.createElement("path", { d: "M12.789 2.385l-1.577 1.231 1.577-1.231zm.17.328l-1.917.574 1.916-.574zm.038.36l-1.994-.148v.004l1.994.144zm-.382.715l1.232 1.576-1.232-1.576zm-.071.052l-1.089-1.678-.013.008-.013.009 1.115 1.66zm-2.121 2.483l-1.848-.765 1.848.765zm-.316 3.208l1.961-.39-1.961.39zm1.52 2.843l1.413-1.414-1.414 1.414zm2.842 1.52l.39-1.962-.39 1.961zm3.208-.317l.765 1.848-.765-1.848zm2.483-2.12l1.66 1.114.01-.013.008-.013-1.678-1.088zm.052-.072l1.576 1.231.002-.003-1.578-1.228zm.315-.266l-.944-1.764.944 1.764zm.76-.077l-.575 1.915h.002l.573-1.915zm.328.17l-1.231 1.575.003.003 1.228-1.579zm.266.314l1.761-.947-1.761.947zm.119.49l-2-.03v.027l2 .003zm-1.685 5.54l1.663 1.11-1.663-1.11zm-10.266 4.252l.39-1.962-.39 1.962zM4.93 19.07l-1.414 1.414 1.414-1.414zm-2.737-5.12l-1.961.39 1.961-.39zm.57-5.778L.912 7.408l1.848.765zm3.682-4.488l-1.11-1.663 1.11 1.663zM11.984 2l.003 2h.028l-.031-2zm.09.003l-.149 1.994h.004l.144-1.994zm7.382 12.895l1.865.725 2.194-5.645-5.125 3.228 1.066 1.693zm-1.014.527l.766 1.848-.766-1.848zm-4.363.43l-.39 1.962.39-1.962zm-3.867-2.067l1.414-1.414-1.414 1.414zM8.145 9.921l1.962-.39-1.962.39zm.43-4.363l1.848.765-1.848-.765zM9.1 4.544l1.693 1.066L14.022.485 8.377 2.679 9.1 4.544zm-1.546.804l1.112 1.663-1.112-1.663zM4.61 8.938l1.848.766-1.848-.765zm1.734 8.719L4.93 19.07l1.414-1.414zm4.096 2.19l.39-1.962-.39 1.961zm4.623-.456l-.766-1.848.766 1.848zm3.59-2.946l1.663 1.11-1.663-1.11zm-7.44-12.829a1.002 1.002 0 01-.17-.33l3.832-1.147a2.999 2.999 0 00-.51-.985l-3.152 2.462zm-.17-.328a1.004 1.004 0 01-.04-.363l3.99.297a2.994 2.994 0 00-.119-1.085l-3.83 1.15zm-.04-.36c.022-.294.17-.55.382-.716l2.463 3.152a2.998 2.998 0 001.145-2.146l-3.99-.29zm.382-.716a.999.999 0 01.071-.05l2.177 3.355a3.01 3.01 0 00.215-.153l-2.463-3.152zm.045-.033c-1.204.808-2.272 1.973-2.854 3.379l3.695 1.53c.229-.55.715-1.136 1.388-1.588l-2.23-3.321zM8.575 5.558a7.552 7.552 0 00-.43 4.363l3.923-.78a3.551 3.551 0 01.202-2.052L8.575 5.558zm-.43 4.363a7.551 7.551 0 002.067 3.867l2.828-2.828a3.552 3.552 0 01-.972-1.82l-3.923.781zm2.067 3.867a7.552 7.552 0 003.867 2.067l.78-3.923a3.552 3.552 0 01-1.819-.972l-2.828 2.828zm3.867 2.067a7.552 7.552 0 004.363-.43l-1.53-3.695c-.65.268-1.364.339-2.053.202l-.78 3.923zm4.363-.43c1.406-.582 2.57-1.65 3.379-2.854l-3.321-2.23c-.452.675-1.038 1.16-1.589 1.389l1.531 3.695zm3.396-2.88a1 1 0 01-.05.071l-3.152-2.462c-.054.069-.105.14-.153.214l3.355 2.177zm-.048.068a1.004 1.004 0 01-.319.269l-1.888-3.527c-.36.193-.686.463-.95.801l3.157 2.457zm-.319.269a.997.997 0 01-.759.075l1.15-3.83a3.003 3.003 0 00-2.279.228l1.888 3.527zm-.758.076a1.001 1.001 0 01-.33-.17l2.463-3.152a2.997 2.997 0 00-.985-.51l-1.148 3.832zm-.326-.168a1.006 1.006 0 01-.268-.317l3.523-1.894a2.994 2.994 0 00-.798-.946l-2.457 3.157zm-.268-.318a.995.995 0 01-.119-.486l4 .061a3.005 3.005 0 00-.358-1.468l-3.523 1.893zM20 12.013a8 8 0 01-1.348 4.432l3.326 2.222A12 12 0 0024 12.02l-4-.007zm-1.348 4.432a8 8 0 01-3.59 2.946l1.53 3.696a12 12 0 005.386-4.42l-3.326-2.222zm-3.59 2.946a8 8 0 01-4.623.455l-.78 3.923a12 12 0 006.933-.682l-1.53-3.696zm-4.623.455a8 8 0 01-4.096-2.19l-2.828 2.83a12 12 0 006.144 3.283l.78-3.923zm-4.096-2.19a8 8 0 01-2.19-4.095l-3.922.78a12 12 0 003.284 6.144l2.828-2.828zm-2.19-4.095a8 8 0 01.456-4.622L.913 7.408a12 12 0 00-.682 6.933l3.923-.78zm.456-4.622a8 8 0 012.946-3.59L5.333 2.021a12 12 0 00-4.42 5.386l3.696 1.53zm2.946-3.59A8 8 0 0111.987 4l-.007-4a12 12 0 00-6.647 2.022l2.222 3.326zm4.46-1.35c-.03.001-.06 0-.09-.002l.297-3.989a3.001 3.001 0 00-.27-.008l.063 4zm-.086-.002a1.002 1.002 0 01-.717-.38l3.152-2.463A2.998 2.998 0 0012.218.008l-.29 3.99zm6.461 9.21a4.75 4.75 0 01-.713.37l1.53 3.696a8.75 8.75 0 001.316-.682l-2.133-3.385zm-.713.37c-1.015.42-2.131.53-3.208.316l-.78 3.924a9.553 9.553 0 005.519-.544l-1.531-3.696zm-3.208.316a5.552 5.552 0 01-2.843-1.52l-2.828 2.83a9.552 9.552 0 004.89 2.614l.781-3.924zm-2.843-1.52a5.552 5.552 0 01-1.52-2.842l-3.922.78a9.552 9.552 0 002.614 4.891l2.828-2.828zm-1.52-2.842a5.552 5.552 0 01.317-3.208l-3.696-1.53a9.552 9.552 0 00-.543 5.518l3.923-.78zm.317-3.208c.1-.244.225-.482.37-.713L7.41 3.477c-.26.412-.49.851-.682 1.315l3.696 1.531zM8.377 2.68a10 10 0 00-1.933 1.006l2.223 3.326a5.999 5.999 0 011.16-.603l-1.45-3.729zM6.444 3.685a10 10 0 00-3.683 4.488l3.696 1.53a6 6 0 012.21-2.692L6.444 3.685zM2.761 8.173a10 10 0 00-.569 5.778l3.923-.78a6 6 0 01.342-3.467L2.76 8.174zm-.569 5.778a10 10 0 002.737 5.12l2.828-2.828a6 6 0 01-1.642-3.072l-3.923.78zm2.737 5.12a10 10 0 005.12 2.737l.78-3.923a6 6 0 01-3.072-1.642L4.93 19.07zm5.12 2.737a10 10 0 005.778-.57l-1.53-3.695a6 6 0 01-3.468.342l-.78 3.923zm5.778-.57a10 10 0 004.488-3.682l-3.326-2.223a6 6 0 01-2.693 2.21l1.53 3.696zm4.488-3.682c.406-.609.743-1.257 1.006-1.933l-3.729-1.45c-.157.406-.36.795-.603 1.16l3.326 2.223z", fill: "#000", mask: "url(#MoonIcon_svg__a)" })));
}
var ForwardRef = React__namespace.forwardRef(SvgMoonIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=MoonIcon.js.map
