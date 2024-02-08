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

function SvgOffhandIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M.5.474c-.504.532-.626 1.997-.37 4.438.168 1.59.46 1.806 1.28.945.36-.378.741-.652.847-.61.255.101 1.328 2.603 1.698 3.96.163.597.81 2.27 1.437 3.72 1.882 4.35 2.467 6.497 1.887 6.926-.144.106-.14.193.015.308.155.114.132.198-.08.295-.174.08-.251.048-.187-.078.245-.472-.272-.176-.623.358-.539.817-.483 1.37.168 1.664.357.16.546.397.548.686.005.816.253 1.027 1.015.862.893-.192 1.161-.448 1.161-1.103 0-.35.155-.605.47-.776.291-.159.68-.752 1.02-1.559.303-.716 1.428-2.58 2.5-4.143 1.071-1.562 2.21-3.275 2.533-3.807.876-1.449 3.546-4.33 4.013-4.33.218 0 .614.182.88.403.264.222.604.42.754.44.15.02.662.094 1.14.162 1.159.167 1.41-.107 1.393-1.521a75.307 75.307 0 01-.004-1.545c.06-3.191-.782-5.098-2.25-5.098-.377 0-1.342 1.044-1.675 1.813-.52 1.199-1.322 1.93-1.955 1.782-1.41-.33-3.642-.515-3.938-.325-.203.129-.359.123-.43-.015-.062-.12.035-.226.216-.235.2-.01.237-.06.095-.129-.128-.061-.431.044-.674.234-.593.464-1.136.478-.818.02.124-.178.359-.334.521-.344.163-.011-.276-.204-.975-.43-1.307-.42-3.306-.577-2.837-.222.138.104.506.16.818.123.736-.087 2.488.343 2.365.581-.137.265-.94.226-1.4-.068-.217-.138-.808-.232-1.313-.207-.506.024-1.12-.052-1.365-.169-.317-.15-.354-.216-.128-.226.175-.007.318-.1.318-.206 0-.25-1.57-.532-1.844-.33-.139.103-.16.06-.064-.126.111-.216.021-.253-.38-.16-.407.096-.641-.006-1.027-.442l-.5-.567v.583c0 .321-.072.583-.16.583-.26 0-.36-.808-.136-1.098.154-.2.153-.232-.001-.129-.114.077-.34-.102-.5-.395C3.73.553 3.52.439 3.022.462c-.4.018-.555.094-.41.201.129.095.439.121.69.058.415-.104.427-.087.14.194-.173.169-.28.35-.235.403.044.052-.087.11-.29.129-.205.018-.524.243-.71.5-.463.637-.767.364-.436-.392.226-.518.225-.623-.013-.834-.39-.346-.335-.494.137-.37.329.085.355.06.136-.126C1.594-.148.997-.051.5.474zm21.105 1.248c-.125.238-.391.431-.592.429-.336-.005-.329-.039.09-.43.585-.547.788-.547.502 0zM8.38 4.97c.182.116 1.3.36 2.486.54 2.405.368 6.758 1.312 6.916 1.501.118.141-1.613 2.712-2.56 3.803-.354.407-.592.846-.53.977.062.13.047.166-.033.08-.08-.086-.777.847-1.55 2.073-1.303 2.068-2.918 4.05-3.299 4.05-.089 0-.066.22.052.488l.215.489-.398-.422c-.336-.357-.379-.365-.28-.055.083.255.026.368-.184.368-.167 0-.249-.103-.183-.23.066-.128.002-.396-.143-.597-.144-.202-.403-.806-.576-1.343-.173-.537-.67-1.76-1.105-2.717-.435-.958-.972-2.325-1.193-3.038-.22-.713-.555-1.558-.743-1.878-.837-1.43-1.18-3.957-.56-4.15.616-.193 3.342-.147 3.668.061z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgOffhandIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=OffhandIcon.js.map
