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

function SvgMainhandIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 36, viewBox: "0 0 24 36", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.505.447c-.073.246-.468 1.157-.88 2.025-.411.869-.687 1.641-.613 1.718.081.082.054.106-.066.06-.12-.048-.254.07-.33.29-.459 1.323-3.891 5.674-5.565 7.053-1.025.844-1.126.985-.67.935.086-.01.1.04.03.11-.088.092-.195.091-.369 0-.506-.266-1.647.322-1.472.758.38.942-.22 2.479-1.736 4.45-.417.544-.687.988-.6.988.088 0 .104.058.036.128-.069.07-.236.1-.373.067-.137-.034-.552.12-.921.341-.37.221-.82.432-1.002.469-.18.037-.498.23-.705.43-.245.236-.49.344-.705.31-.195-.032-.33.014-.33.112 0 .09-.236.447-.526.793-.29.346-.497.736-.46.867.054.192.03.204-.121.063-.34-.318-.456.173-.134.57.16.195.327.603.372.908.045.304.173.623.286.709.112.085.198.392.192.681-.006.29.001.609.017.71.023.156-.633 1.147-1.568 2.367-.12.157-.444.42-.72.585-.274.165-.458.367-.408.45.24.396-1.331 2.594-2.29 3.202-.36.229-.656.528-.656.664s-.217.385-.483.553c-.283.18-.436.381-.371.488.06.1-.014.303-.165.449-.426.413-.17.745.783 1.012.466.131.919.238 1.005.238.322 0 1.487-.747 1.487-.953 0-.118.117-.242.259-.276.142-.035.302-.215.355-.4.146-.51.87-2.047 1.074-2.279.277-.316 1.824-2.462 2.682-3.721 1.123-1.646 2.424-2.662 3.976-3.104 1.056-.3 1.69-.642 1.566-.842-.079-.126-.108-.118-.12.03-.018.248-1.48.58-2.539.576-1.56-.006-3.86-1.059-3.286-1.505.23-.18.226-.198-.027-.138-.22.052-.298-.022-.321-.305-.029-.338-.01-.352.196-.143.125.127.41.352.631.5.423.28.378.495-.057.266-.138-.073-.252-.082-.252-.021 0 .153 1.006.752 1.264.752.115 0 .242.064.283.142.098.186 2.35.273 2.966.114.33-.086.372-.124.14-.13-.375-.008-.457-.245-.084-.245.785 0 2.067-1.351 1.522-1.604-.373-.173-.026-.84.385-.74.514.125-.08-.607-.851-1.049-.683-.39-1.523-.635-.962-.279.124.079.223.2.22.269-.003.068-.092.03-.197-.084-.106-.115-.42-.214-.7-.22l-.507-.012.47-.09c.402-.076.334-.101-.47-.174-1.166-.105-1.843-.274-1.697-.423.06-.062.248-.08.417-.039.205.05.262.029.171-.065-.194-.199.082-.172.46.045.289.166.331.165.435-.006.07-.115.038-.16-.079-.114-.197.076-.742-.142-.742-.297 0-.047.124-.085.274-.085.15 0 .23.045.177.1-.053.054.025.099.174.099.148 0 .376.08.505.18.171.13.303.145.477.054.16-.084.28-.086.357-.007.204.21.644.004.854-.4.2-.383.037-.927-.314-1.047-.084-.029-.064-.04.045-.025.323.044.749-.669.465-.78-.316-.123.057-.263.448-.168.33.08.41.285.111.285a.184.184 0 00-.188.18.184.184 0 01-.188.178c-.103 0-.187.148-.185.328.002.256.043.289.187.149.125-.122.144.011.059.416-.069.327-.243.67-.389.762-.217.138-.22.186-.015.27.202.082.196.123-.033.219-.186.077-.203.118-.049.12.129 0 .488.17.8.376.31.207.575.327.587.268.011-.059.05-.348.086-.643.036-.295.155-.912.266-1.371.11-.459.254-1.156.319-1.55.072-.43.238-.778.418-.873.165-.087.194-.124.065-.082-.177.057-.23-.124-.211-.736.013-.447-.023-.892-.079-.99a3.723 3.723 0 01-.215-.505c-.062-.18-.374-.515-.693-.745-.66-.476-.5-.572.212-.127.611.381.976.661.863.661-.05 0 .025.141.166.314.176.214.204.403.088.596-.093.155-.103.282-.022.282.227 0 .19 1.836-.04 1.93-.11.046-.138.123-.062.17.075.049.39-.066.7-.253.309-.188.562-.299.562-.245 0 .053.127.03.282-.052.155-.082.276-.236.268-.343-.01-.15-.05-.14-.18.045-.2.288-.067-.552.223-1.395.105-.309.131-.623.057-.699-.074-.076-.041-.175.073-.22a.522.522 0 00.268-.332c.033-.138.183-.345.334-.46.15-.115.254-.227.23-.25-.074-.07.194-.45.642-.906.242-.246.39-.447.33-.447s.024-.085.187-.188c.164-.104.24-.247.171-.319-.082-.084-.01-.101.207-.048.24.058.306.034.232-.087-.06-.101.044-.193.261-.229.491-.082.467-.004-.307.99-.369.472-.643.877-.61.898.034.02.913-1.03 1.954-2.334 1.04-1.305 1.796-2.322 1.679-2.26-.118.062-.414.383-.658.712-.469.635-.674.748-.674.37 0-.126.088-.22.195-.208.107.011.188-.097.18-.241-.007-.144.053-.237.134-.205.08.032.115-.1.077-.291-.061-.304 0-.358.478-.418.36-.046.547-.142.545-.281-.003-.18-.03-.186-.188-.033-.165.159-.208.159-.391 0-.174-.151-.19-.147-.1.03.058.114.02.208-.085.208-.117 0-.142-.171-.063-.447.154-.541.4-.864.66-.864.105 0 .148.045.095.1-.053.054.028.099.18.099.214 0 .192-.058-.096-.252-.351-.237-.357-.286-.099-.83.448-.943.873-2.692.872-3.587C23.999.313 23.967 0 23.803 0c-.092 0-.226.201-.299.447zM9.322 20.482c-.27.09-.573.174-.677.186-.103.011-.286.06-.405.107-.146.058-.187.01-.123-.144.052-.127.195-.206.317-.176s.389-.026.593-.124c.343-.165.345-.178.03-.181-.187-.003-.288-.058-.224-.124.072-.073.283-.04.547.087l.43.205-.489.164zm2.05.51c0 .073-.122.103-.27.067-.149-.036-.487.043-.752.175-.266.132-.483.186-.483.12 0-.17.768-.493 1.17-.493.184 0 .335.06.335.132zm.254.523c.06.097.22.15.356.116.278-.068 1.082.355 1.082.569 0 .075-.134.033-.297-.095-.247-.191-.28-.196-.197-.026.056.113.02.236-.078.275-.1.039-.18-.01-.18-.107 0-.255-.909-.67-1.465-.67-.787 0-1.732.54-1.732.992 0 1.045 1.982 1.49 3.132.704.242-.165.44-.25.44-.188s-.292.293-.65.513c-.358.22-.607.445-.553.5.054.056.008.1-.101.1-.11 0-.2-.08-.2-.178 0-.21-.082-.216-.884-.07-.614.112-1.16-.082-.922-.326.058-.06-.055-.2-.251-.313-.257-.147-.342-.335-.304-.668.028-.255-.021-.436-.11-.4-.088.034-.16-.027-.16-.136 0-.123.101-.174.267-.133a.683.683 0 00.505-.115c.556-.425 2.113-.658 2.302-.345zm.216.776c0 .373-.576.471-.748.128-.155-.31.034-.51.436-.46.19.023.312.153.312.332zm-2.454 1.756c.107.177-.6.205-1.013.04-.22-.089-.226-.142-.03-.291.26-.199.858-.055 1.043.251zm-.245 1.724c.187.136.267.328.201.487-.102.249-.121.244-.348-.093-.132-.197-.244-.31-.248-.253-.005.057-.122.044-.261-.029s-.313-.095-.386-.048c-.074.047-.084.002-.022-.1.153-.253.689-.235 1.064.036zm-4.674 4.651c-.323.26-.412.798-.12.727.14-.034.253-.116.253-.183 0-.068.128-.054.291.032.233.122.242.173.047.251-.134.054-.159.1-.056.102.104.002.062.057-.094.123-.244.104-.234.143.076.293.327.158.33.18.042.25-.181.045-.279.16-.227.272.05.107-.028.355-.172.552-.26.355-.261.353-.152-.179.06-.295.137-.556.17-.581.033-.025-.077-.213-.244-.417-.43-.525-.506-1.104-.156-1.19.175-.042.237-.148.163-.28-.095-.171-.07-.185.126-.07.172.1.188.19.053.298zm-.503 1.592c-.057.094-.244.171-.415.171-.234 0-.26.039-.108.156.112.085.157.286.101.447-.08.23-.06.254.1.113.223-.2.267-.12.093.168-.063.103-.19.158-.283.122-.22-.086-.213.03.019.304.227.27.041 1.233-.293 1.52-.21.18-.23.14-.14-.29.058-.276.04-.598-.041-.716-.08-.118-.13-.305-.108-.415.021-.111-.133-.26-.343-.331-.21-.071-.476-.242-.593-.38-.16-.189-.157-.229.01-.163.128.05.435-.068.74-.284.286-.203.67-.37.853-.37.266 0 .31-.066.216-.328-.098-.273-.083-.292.09-.111.113.118.16.293.102.387zm-1.714 1.681c.33.168.334.182.032.116a3.969 3.969 0 00-.706-.076c-.198 0-.36-.053-.36-.12 0-.181.612-.134 1.034.08zm.035 1.639c.316-.064.315-.055-.014.115-.385.2-.787.125-1.259-.236-.25-.191-.23-.192.333-.007.33.108.752.165.94.128z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgMainhandIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=MainhandIcon.js.map