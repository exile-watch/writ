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

function SvgGuardianIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.508.154l-.245.148.328.038c.22.025.346.076.386.157.032.066.096.12.14.12.046 0 .097.062.114.139.018.077.063.14.1.14.097 0 .081-.179-.026-.28a.305.305 0 01-.091-.186c0-.054-.083-.153-.184-.218-.1-.065-.184-.142-.184-.171 0-.074-.059-.055-.338.113zM4.229.236c-.158.053-.243.121-.238.191.005.06-.023.096-.061.08s-.272.132-.52.33l-.452.358.028.378c.04.546-.187.744-.866.756-.55.01-.7.085-.84.419-.056.135-.177.29-.267.343a.971.971 0 00-.246.208c-.044.06-.202.145-.35.187-.283.082-.493.317-.389.435.038.044.1.027.172-.048.17-.174.258-.021.258.446 0 .376.012.406.23.592.388.33.53.537.53.769 0 .163.043.243.172.328l.172.112V5.6c0-.415-.019-.52-.092-.52-.05 0-.092-.031-.092-.07 0-.038.038-.07.085-.07.21 0 .245-1.338.038-1.464-.153-.093-.181-.628-.033-.628.05 0 .12-.062.155-.14.118-.25.33-.174.484.175.076.173.164.314.196.314s.09.079.128.174c.085.211.179.221.326.035.089-.11.19-.14.496-.14h.385l.142.324c.209.477.345.556.758.443.347-.094.416-.17.221-.24-.105-.038-.254-.307-.254-.46 0-.102.22-.079.301.032.04.053.134.115.21.137.078.022.243.166.369.32.125.155.269.282.318.282.05 0 .136.061.193.136.056.075.13.116.165.091.035-.024.393-.046.796-.048.475-.003.74-.032.756-.082.03-.103-.452-.306-.727-.306-.456 0-.472-.38-.02-.458.472-.08.671-.45.243-.45-.15 0-.229-.04-.278-.146-.05-.105-.11-.137-.218-.114-.225.05-.279-.13-.123-.408.13-.23.322-.305.44-.17.19.214 1.733.286 2.008.093.101-.071-.15-.23-.364-.23-.25 0-.298-.08-.14-.234.129-.126.109-.255-.04-.255-.144 0-.1-.197.05-.222.193-.03.172-.21-.038-.325C8.282.908 8.191.9 8.1.948a.347.347 0 01-.258.015c-.3-.127-1.294.037-1.618.266a1.39 1.39 0 01-.691.263c-.212.026-.412.083-.446.127a.899.899 0 01-.214.17c-.286.165-.433.272-.539.39-.475.53-1.159.868-1.105.547.012-.073.087-.13.188-.144.092-.012.168-.049.168-.082 0-.072.066-.148.48-.556.289-.284.317-.338.317-.608 0-.334.104-.44.43-.44.142 0 .203-.038.226-.137.021-.093.114-.158.286-.202l.254-.065-.302-.008C5.109.48 4.93.436 4.876.386 4.674.195 4.481.15 4.228.236zM15.64 1.639c-.022.026-.04.151-.04.28 0 .257-.013.268-.177.151-.089-.063-.143-.057-.25.03-.136.107-.136.11-.013.184.333.203.445.69.194.843-.2.122-.152.28.085.28.298 0 .52-.423.346-.66a.315.315 0 01-.044-.227c.026-.109.035-.105.074.032.05.177.183.209.234.056.052-.153-.025-.584-.12-.674a.33.33 0 01-.084-.21c0-.128-.123-.178-.205-.085zM1.427 4.022c.016.181-.008.233-.132.287a.468.468 0 00-.192.14c-.022.04-.098.073-.168.073-.12 0-.123-.008-.027-.127a.48.48 0 00.101-.181c0-.114.262-.464.328-.44.039.015.08.126.09.248zm4.732.711c0 .038.028.068.063.068.034 0 .089.079.12.175.033.096.085.174.117.174.148 0 .436.37.436.558 0 .22.297.558.49.558.353 0 .39.159.061.27-.294.101-.292.05-.03.558.118.229.214.439.214.467 0 .027.09.147.2.265.3.325.496.737.436.915-.04.117-.145.144-.145.038 0-.038-.102-.171-.226-.297a17.256 17.256 0 01-.333-.346c-.29-.317-.401-.355-.54-.186-.178.217-.3.087-.194-.206.147-.403-.327-1.13-.737-1.13-.071 0-.181-.075-.245-.168a1.308 1.308 0 00-.377-.311 1.394 1.394 0 01-.363-.28c-.14-.186-.664-.045-.664.179 0 .115.135.12.233.009.058-.065.09-.065.147 0 .058.065.058.102 0 .167-.102.117-.091.265.019.265.107 0 .13.383.028.455-.035.025-.047.106-.026.18.044.158-.127.263-.233.142-.094-.107-.298-.1-.445.016a1.12 1.12 0 01-.265.146c-.132.047-.207.11-.515.436-.091.097-.139.1-.34.025-.451-.17-.743.052-.439.333.118.108.126.146.062.283-.062.131-.057.18.028.288.082.103.095.201.06.482-.028.239-.02.353.025.353.117 0 .073.148-.117.394-.108.14-.183.317-.183.43 0 .104-.072.309-.158.454-.148.248-.157.31-.143.985.013.576-.003.743-.08.83a.362.362 0 00-.066.276l.028.17.143-.164a.98.98 0 00.183-.304c.022-.078.076-.142.12-.142s.114-.046.156-.103c.042-.058.1-.087.13-.066.063.044.074.473.013.542-.023.026-.046.29-.052.587-.01.566.039.871.118.726.152-.281.51.005.587.47.034.2.105.414.16.475.078.09.095.243.085.746-.007.349-.01.689-.006.756.012.193.134.142.21-.087.097-.29.166-.261.166.07 0 .153-.028.279-.062.279s-.061.078-.061.174c0 .096.027.174.061.174s.062-.048.062-.106c0-.058.065-.135.144-.17.173-.074.223-.2.223-.566 0-.298.087-.367.146-.117.067.285.04.661-.054.75-.127.12-.121.602.009.685.076.049.09.112.054.265-.026.11-.044.342-.04.515a1.65 1.65 0 01-.076.523c-.055.14-.07.336-.044.593.037.366.04.373.083.148a3.22 3.22 0 00.045-.498c0-.203.027-.27.123-.298.108-.033.122-.095.122-.541 0-.378.024-.525.096-.585.053-.044.112-.213.131-.376.022-.19.077-.322.15-.366.076-.047.114-.147.114-.3 0-.143.047-.28.122-.358a.47.47 0 00.123-.279c0-.084.052-.206.115-.272a.725.725 0 00.152-.324c.021-.12.075-.206.13-.206.052 0 .093-.06.093-.137 0-.075.056-.17.123-.212.072-.044.123-.146.123-.248 0-.096.042-.193.094-.216.052-.022.136-.139.187-.259.196-.458.242-.535.346-.572.06-.022.108-.086.108-.144 0-.058.118-.243.26-.411.564-.663.765-.914.903-1.128.08-.123.222-.255.318-.293.221-.088.234-.286.019-.286-.086 0-.19-.032-.23-.072a3.103 3.103 0 00-.196-.168c-.12-.095-.12-.097-.002-.246.101-.128.106-.16.03-.214-.144-.104-.213-.08-.418.142-.218.238-.27.252-.376.106a.234.234 0 01.122-.365c.156-.046.157-.133 0-.18-.067-.02-.17-.132-.23-.25-.134-.267-.248-.322-.382-.184-.13.133-.252.134-.404.003a.513.513 0 00-.282-.104c-.182-.003-.79-.334-.867-.471-.07-.127-.326-.11-.471.03-.157.154-.157.23.002.23.167 0 .556.482.535.662-.022.184-.454.155-.617-.042-.137-.165-.28-.17-.39-.01-.079.116-.086.116-.147 0-.035-.067-.113-.122-.172-.122-.12 0-.438-.344-.438-.473 0-.14.247-.24.471-.192.48.102.7-.105.647-.608-.027-.253-.022-.262.163-.262.112 0 .244-.06.32-.146.099-.113.172-.136.321-.102.106.025.331.068.5.097.168.028.34.075.382.104.041.03.131.02.2-.022.14-.085.552.207.552.391 0 .053.028.097.061.097.034 0 .062-.032.062-.07 0-.179.331-.057.543.2.327.396.376.477.376.625 0 .147.366.64.476.64.037 0 .085.063.107.14.021.076.078.139.126.139.053 0 .088.07.088.176 0 .333.294.291.658-.093A.786.786 0 0110 10.68c.112-.02.236-.08.274-.133.039-.053.164-.096.279-.096.123 0 .223-.04.242-.098.018-.054.125-.117.237-.141.113-.024.22-.09.24-.147.036-.107.283-.145.283-.043 0 .054-.424.485-.684.694-.146.118-.145.393.002.552a.799.799 0 01.157.299c.05.207.094.329.3.837.205.506.352.962.392 1.22a.85.85 0 00.111.314c.079.105.11.237.097.401-.013.153-.126.094-.166-.087-.02-.096-.064-.174-.095-.174-.03 0-.072-.055-.092-.122-.02-.067-.14-.373-.267-.68-.376-.907-.475-1.174-.519-1.395-.144-.727-.652-1.096-.983-.715-.075.086-.212.22-.303.296-.092.077-.23.21-.307.297-.077.086-.185.157-.24.157-.058 0-.1.056-.1.131a.184.184 0 01-.123.168c-.068.02-.123.086-.123.148 0 .064-.051.11-.122.11-.072 0-.123.047-.123.112 0 .06-.055.127-.123.147-.086.026-.122.096-.122.238 0 .128-.032.201-.088.201-.048 0-.177.157-.286.349-.11.192-.235.349-.28.349-.045 0-.082.059-.082.132 0 .072-.044.151-.098.175-.07.03-.088.093-.06.214.029.134.003.197-.119.288-.1.075-.143.157-.122.235.018.066-.037.236-.124.383-.167.28-.12.632.126.944.045.058.113.183.15.28.099.251.214.469.322.609.104.135.355.677.353.765-.006.397-.286.128-.847-.816-.194-.326-.395-.602-.447-.614-.148-.032-.447.832-.548 1.586-.033.247-.097.498-.141.558-.124.164-.156.308-.225 1.002-.035.35-.103.707-.152.791a1.573 1.573 0 00-.13.452c-.033.237-.052.27-.09.162-.086-.251-.06-.645.052-.772.118-.134.156-1.049.055-1.318l-.053-.14-.05.14c-.028.077-.052.326-.055.553-.003.29-.036.453-.111.548-.23.29-.138 1.454.161 2.066.194.394.237.537.185.609-.038.052-.05.174-.029.276.023.101.01.223-.028.276-.115.157-.008.362.289.55.277.177.297.18 1.621.18h1.341v-.175c0-.226.11-.226.159 0l.039.174h1.618c.895 0 1.618-.027 1.618-.061 0-.115.27-.149.323-.041.041.084.24.102 1.087.102h1.036l-.096-.261a4.02 4.02 0 00-.264-.547 1.94 1.94 0 01-.213-.552 2.853 2.853 0 00-.19-.587c-.218-.479-.518-1.347-.52-1.505 0-.077-.059-.281-.129-.454a3.755 3.755 0 01-.18-.83 5.538 5.538 0 00-.206-.976c-.195-.589-.198-1.494-.005-1.654.156-.13.181-.124.272.069.12.255.492.369.743.226a.975.975 0 01.256-.113c.172 0 .425-.426.405-.682-.027-.345.526-.961.928-1.034.168-.031.256-.088.282-.184.055-.197.413-.12.806.173.34.254.513.689.384.963-.057.12-.044.136.114.136.141 0 .195-.044.255-.209.042-.115.094-.209.115-.208.114.003.185.134.203.376.027.38.27.496.375.18.083-.248.227-.277.227-.045 0 .09.055.22.122.29a.53.53 0 01.123.36c0 .278-.076.301-.175.053-.078-.195-.211-.196-.244-.001-.04.23.172.403.431.353l.233-.045v.351c0 .262-.027.37-.107.42-.165.107-.01.257.158.154.142-.086.163-.063.224.26.024.128.082.249.13.27.05.021.086.133.086.264 0 .125.055.307.122.405.068.097.123.26.123.36 0 .1.055.36.123.58.067.217.122.517.122.665 0 .284.088.538.186.538.128 0 .07-1.108-.063-1.202-.095-.068-.123-.163-.123-.426 0-.186-.037-.438-.083-.559a27.2 27.2 0 01-.152-.411c-.038-.106-.11-.192-.162-.192-.07 0-.093-.081-.093-.332 0-.2-.05-.437-.123-.593a1.293 1.293 0 01-.123-.426.393.393 0 00-.088-.25c-.05-.047-.107-.23-.13-.41-.022-.179-.071-.357-.11-.395-.038-.039-.153-.25-.254-.47-.101-.221-.201-.402-.222-.402-.022 0-.073-.102-.114-.227a11.79 11.79 0 00-.156-.436 6.889 6.889 0 01-.185-.628c-.057-.23-.144-.455-.193-.5-.18-.163-.075-.47.177-.516.488-.09.575-.483.107-.483-.073 0-.13.065-.155.172-.05.225-.211.276-.477.15-.237-.112-.333-.41-.262-.812.032-.18.02-.203-.099-.189-.114.014-.14-.027-.17-.274-.02-.16-.064-.332-.099-.384-.09-.134-.328-.92-.328-1.084 0-.077-.086-.34-.19-.586-.218-.51-.316-.762-.429-1.108-.114-.351-.464-.5-.59-.252-.028.057-.274.141-.587.201-.297.058-.589.155-.649.217-.06.062-.151.113-.203.113-.089 0-.418.3-.418.38 0 .086.397.03.494-.07.299-.307.75-.135.829.316.016.097.057.272.09.39.06.221.083 1.652.027 1.717-.077.087-.666-.116-.81-.28l-.153-.174.145-.124c.104-.09.126-.146.078-.201-.075-.085-.237-.023-.546.208-.424.317-.55.24-.329-.197.153-.303.12-.443-.072-.306-.165.117-.182.109-.182-.088 0-.1-.05-.202-.123-.246-.067-.041-.122-.116-.122-.167 0-.05-.09-.123-.2-.162l-.199-.07.156-.072a.722.722 0 00.237-.184c.045-.062.132-.112.192-.112.217 0 .304-.084.304-.289 0-.232-.146-.336-.3-.21a1.4 1.4 0 01-.252.15 3.133 3.133 0 00-.316.175c-.22.14-.341.13-.42-.036-.11-.235-.836-.048-.999.257-.053.1-.445.128-.495.035-.037-.067.124-.442.217-.507.034-.025-.01-.06-.1-.08-.268-.058-.525.359-.443.716.045.195-.114.271-.473.225l-.3-.038.208-.077c.293-.108.325-.365.057-.47l-.192-.077.142-.108.157-.12c.008-.006-.026-.166-.076-.354a2.839 2.839 0 01-.093-.576.851.851 0 00-.123-.41c-.173-.25-.154-.381.092-.629.144-.144.215-.277.215-.4 0-.102.03-.249.066-.326.08-.17.003-.251-.487-.523-.265-.146-.339-.164-.38-.088-.058.106-.066.086-.158-.384-.07-.364-.463-.563-.743-.378-.155.102-.194.1-.505-.021-.395-.155-.92-.228-.92-.129zm9.442 1.1c-.364.066-.404.304-.077.453l.23.105.04-.254c.046-.295.017-.342-.194-.304zM5.665 7.086c.191.413.65.924.83.924.154 0 .223.131.078.148-.245.029-.713-.037-.855-.12-.195-.115-.417-.128-.417-.026 0 .04-.08.024-.184-.037-.188-.11-.245-.242-.108-.247.11-.004.355-.467.313-.591-.121-.36.179-.405.343-.051zm10.901.693c-.059.017-.107.077-.107.131 0 .073-.082.1-.303.1-.327 0-.424.073-.279.21.05.047.091.144.091.214 0 .071.052.16.115.198.069.043.13.182.154.352.022.155.067.281.1.281.077 0 .075-.228-.005-.623-.052-.257-.047-.32.032-.37a.218.218 0 00.095-.161c0-.082.12-.101.633-.101.721 0 1.465-.133 1.206-.216-.168-.054-1.56-.066-1.732-.015zM1.66 8.326c-.144.164-.124.373.04.41.458.106.647.106.724 0 .084-.115 0-.235-.169-.237-.04 0-.168-.065-.285-.143-.194-.13-.22-.133-.31-.03zm19.654.023c-.085.062.022.243.178.302.05.019.05.137 0 .437a5.717 5.717 0 00-.067.73c0 .176-.051.546-.113.824l-.11.504.136.146c.088.094.15.12.177.07.112-.205.615-.013.552.213-.02.076-.011.176.022.222.055.076.096.336.08.496-.005.034-.058.011-.12-.052-.104-.108-.122-.102-.285.092-.232.275-.086.529.265.464.214-.04.562.27.562.5 0 .069.05.082.183.048.14-.034.184-.02.184.057 0 .136.16.202.234.096.187-.267.08-.798-.142-.7-.382.166-.485-.106-.582-1.545-.038-.575-.096-1.162-.128-1.302a5.655 5.655 0 01-.073-.813c-.019-.714-.109-.85-.56-.848-.171 0-.348.027-.393.06zM6.404 10.277c0 .062.057.104.142.104.206 0 .377.163.327.313-.05.15-.527.094-.609-.072-.027-.056-.128-.101-.223-.101-.186 0-.347-.157-.282-.276.065-.121.645-.093.645.032zm-1.567.492c.135.028.253.015.305-.034.085-.08.799.003.887.103.107.122-.222.251-.547.214-.236-.026-.393-.007-.513.064a.795.795 0 01-.334.102.797.797 0 00-.363.14.927.927 0 01-.52.142c-.177.001-.39.047-.474.102-.208.134-.307.129-.305-.018.004-.242.267-.468.734-.63.253-.089.528-.187.613-.22a.457.457 0 01.225-.036c.04.013.171.045.292.07zm.637 1.208c.045.032.158.316.25.63.239.809.561 1.006.678.414l.046-.234.068.19c.037.104.12.227.185.273.173.123-.071.758-.292.758-.038 0-.096.082-.13.181-.033.1-.115.198-.182.218-.082.024-.122.095-.123.22 0 .219-.122.51-.229.55-.05.018-.076-.045-.076-.182 0-.533-.196-.72-.342-.324-.214.583-.35.22-.362-.977-.006-.527-.039-.898-.088-1.001-.127-.268.03-.378.188-.132.068.105.159.192.202.192.053 0 .093.161.121.488.062.713.14.656.251-.186.033-.25.022-.296-.085-.335-.09-.032-.135-.129-.165-.354-.023-.171-.065-.31-.095-.31s-.055-.032-.055-.07c0-.085.124-.09.235-.01zm8.96.737c.058.08.054.143-.02.297-.05.107-.107.25-.125.317-.048.174-.233.147-.36-.05-.165-.26.326-.808.504-.564zm1.35 3.572c0 .094-.081.116-.368.1-.1-.006-.247.089-.424.271-.149.154-.32.28-.38.28s-.32.125-.58.278c-.485.286-.577.297-.577.071 0-.215-.116-.23-.166-.02-.064.27-.053.8.02.949.057.115.075.11.229-.066.166-.19.296-.29.594-.46.17-.097.3-.212.516-.455a.46.46 0 01.352-.157.544.544 0 00.355-.14c.078-.076.178-.139.222-.139.044 0 .13-.06.19-.132.064-.077.241-.151.431-.18.283-.044.454-.169.245-.18a4.896 4.896 0 01-.367-.059c-.227-.042-.292-.034-.292.039zm-4.064 4.092c.027.05.093.11.147.134.058.023.115.159.139.325.022.157.067.285.1.285.114 0 .061.13-.072.179-.165.06-.296-.12-.296-.402a.506.506 0 00-.153-.348c-.085-.083-.154-.177-.154-.208 0-.094.236-.065.289.035zm-7.739 1.53c.064.331.11 1.16.07 1.275-.083.247-.215.02-.18-.311.056-.538-.266-1.087-.562-.958-.067.03-.06.088.035.3.064.145.117.309.117.365 0 .056.049.162.108.237.074.093.11.262.115.551.009.488.031.523.375.586l.26.047.01-.48c.027-1.26.019-1.518-.053-1.59-.317-.318-.352-.321-.295-.023zm16.156-.095c-.253.023-.542.092-.643.154a1.709 1.709 0 01-.368.162 2.716 2.716 0 00-.43.176c-.134.07-.396.198-.582.286-.185.088-.382.216-.436.284a.597.597 0 01-.276.168c-.163.04-.257.082-.698.306a4.598 4.598 0 00-.399.247 7.048 7.048 0 01-.429.271c-.172.098-.137.104.583.108l.766.004-.153-.136-.153-.137.222-.001c.172-.002.23.03.255.138.044.19.155.175.238-.033.052-.129.051-.197-.002-.27-.058-.08-.037-.106.113-.14.106-.024.185-.086.185-.145 0-.064.087-.122.23-.152a.973.973 0 00.378-.18c.116-.101.235-.127.534-.114.297.012.412-.012.506-.109.066-.069.24-.142.386-.163.146-.021.334-.078.419-.126.263-.15 1.498-.338 1.643-.25.255.155 1.974.1 1.974-.062 0-.135-.041-.14-1.18-.14-.65 0-1.332-.03-1.518-.066-.6-.116-.698-.122-1.165-.08zm-17.4 1.35c.011.089.118.228.25.325.157.116.23.22.23.332 0 .146.026.161.26.154.143-.004.205-.023.138-.042-.202-.057-.276-.164-.276-.4 0-.275-.216-.526-.453-.526-.14 0-.165.026-.15.156zm19.056-.077c-.186.033-.651.074-1.035.091-.488.022-.727.062-.797.132-.055.056-.251.149-.437.207-.476.15-.962.35-1.022.423-.082.098 3.079-.016 3.536-.128l.72-.178c.176-.044.528-.07.781-.057l.461.023v-.227c0-.188-.024-.227-.138-.23-1.08-.022-1.564-.045-1.64-.077-.05-.021-.244-.012-.43.02z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgGuardianIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=GuardianIcon.js.map
