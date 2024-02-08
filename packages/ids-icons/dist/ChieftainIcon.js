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

function SvgChieftainIcon(props, svgRef) {
    return (React__namespace.createElement("svg", tslib_es6.__assign({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: svgRef }, props),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.99.08c-.076.072-.079.108-.027.39.069.377.036.642-.137 1.115-.073.198-.142.44-.154.537a124.9 124.9 0 00-.095.863c-.04.378-.102.926-.138 1.22-.036.293-.065.888-.065 1.322 0 .97-.072 1.319-.433 2.103-.14.303-.285.672-.323.819-.038.147-.098.267-.133.267s-.064.027-.064.06.04.06.09.06c.163 0 .101.211-.158.543-.246.313-.25.324-.25.662 0 .282-.016.354-.09.407-.05.035-.091.101-.091.148 0 .115-.057.15-.174.11-.063-.021-.099-.08-.099-.165 0-.175-.238-.322-.464-.287-.22.036-.305-.174-.184-.452.082-.188.055-.37-.055-.37-.04 0-.084.048-.1.105a1.66 1.66 0 01-.11.26.703.703 0 00-.075.298c.024.528-.028.66-.244.613-.126-.027-.176-.076-.225-.222-.073-.218-.3-.292-.401-.13-.084.13-.123.115-.179-.072a1.65 1.65 0 00-.102-.261.289.289 0 01-.026-.19c.033-.116.272.012.347.186.04.09.051.088.117-.034.041-.076.12-.134.184-.134.126 0 .15-.18.058-.443-.045-.13-.038-.165.053-.262.15-.16.098-.4-.096-.452-.35-.092-.766.04-.767.243 0 .04-.035.098-.078.13-.043.031-.12.211-.17.4-.115.425-.221.53-.342.337-.117-.187-.33-.28-.45-.194-.166.116-.112.898.061.898.067 0 .127.145.083.203-.015.02-.073.035-.13.035-.086 0-.105.037-.117.224-.011.178-.033.224-.105.224s-.094-.046-.105-.224c-.014-.223-.015-.224-.218-.224-.162 0-.226-.032-.315-.158-.16-.228-.17-.649-.018-.79.074-.068.089-.152.089-.522 0-.472-.006-.457.325-.835.433-.494.5-.955.197-1.376l-.204-.284-.17.216-.171.216-.295-.089a3.46 3.46 0 00-.498-.11c-.111-.012-.224-.057-.25-.1-.172-.279-.282-.356-.361-.253-.058.076-.09.084-.129.034-.159-.21-.415-.05-.463.29-.034.243-.18.285-.585.168-.247-.071-.3-.026-.3.26-.001.147-.017.16-.24.182-.3.03-.374-.006-.374-.19 0-.104-.03-.155-.107-.18-.058-.017-.174-.122-.256-.231-.176-.235-.27-.204-.426.142-.118.264-.122.474-.012.577a.488.488 0 01.116.21c.018.071.128.208.245.303.258.21.735.782.735.882 0 .09.259.353.409.413a.577.577 0 01.168.104c.036.037.112.033.217-.013.126-.055.178-.054.23.002.121.133.068.183-.181.17-.22-.012-.262.006-.376.161-.071.096-.164.201-.207.234-.11.085-.056.286.103.379.194.113.423.03.653-.236.23-.266.306-.284.434-.102l.092.13.18-.19.18-.19.158.141.159.142-.095.25c-.07.187-.08.268-.042.319.092.12.057.133-.38.135-.491.002-.517.022-.721.535-.246.62-.025 1.28.29.866.07-.091.151-.12.346-.12.314 0 .428.089.857.662.446.598.782.797.934.556.049-.076.111-.088.301-.06.166.026.29.01.4-.05.195-.107.338-.05.426.168.035.085.141.225.236.312.096.087.186.208.2.27.016.062.06.113.101.113.061 0 .057.02-.02.116-.086.105-.09.138-.04.327.072.278.074.28.256.213.238-.088.348-.477.134-.477-.26 0-.274-.085-.07-.424.088-.145.16-.292.16-.328 0-.036.04-.114.09-.173.05-.06.091-.183.091-.275 0-.315.137-.265.165.061l.055.632c.06.686.14.914.312.88.124-.023.14-.004.216.264.045.159.108.329.14.378.119.18.166.46.18 1.056.007.334.037.706.068.826.062.247.007.394-.09.24-.104-.164-.32-.016-.32.22 0 .094-.09.165-.209.165-.079 0-.333.326-.552.708a7.674 7.674 0 01-.262.427c-.566.818-.611.898-.585 1.039.043.221-.335.974-.409.816-.038-.082-.16-.084-.16-.003 0 .034.046.085.105.114.123.062.125.547.003 1.124-.048.228-.053.346-.019.43.037.09.027.17-.044.343-.108.265-.118.469-.025.516.061.03.206.4.206.524 0 .03-1.679.046-3.933.037l-3.933-.015-.05-.234c-.04-.188-.091-.264-.254-.38-.963-.686-1.043-.669-.963.211l.04.433H0v-8.668l.196-.308c.108-.169.243-.408.3-.531.11-.245.239-.29.392-.137.048.049.12.089.161.09.04 0 .122.05.182.11.119.12.717.288.827.232.074-.037.06-.377-.022-.59a.434.434 0 01.074-.467c.063-.077.114-.171.114-.21 0-.038.04-.118.09-.178.05-.06.091-.144.091-.188 0-.044.02-.08.046-.08.025 0 .045.045.045.1 0 .055.025.19.055.298.048.177.044.21-.046.32-.116.142-.128.237-.031.237.037 0 .068-.027.068-.06 0-.193.356-.486.693-.569.107-.026.191-.09.223-.17.129-.318.276-.458.386-.364a.364.364 0 00.19.088c.141 0 .245.174.211.353-.12.643-.118.676.072.919.147.188.217.232.415.257.364.047.432.075.527.208.056.08.098.1.117.058.017-.035-.001-.08-.04-.1-.077-.039-.1-.202-.028-.202.024 0 .062.044.085.098.04.094.105.093.282-.003.115-.063.276.177.229.341-.03.1-.003.274.095.641.198.74.264 1.1.266 1.448.002.36.113.673.273.778.077.05.116.132.125.266.04.547.125.524.258-.07.123-.548.125-.575.072-1.18-.105-1.196-.153-1.45-.274-1.452-.155-.002-.169-.138-.016-.161.142-.022.143-.034.08-.81-.032-.383-.007-.453.097-.27.094.168.194.033.308-.417.057-.22.117-.42.134-.443.051-.067.25.221.282.408.016.096.132.328.258.515s.263.413.305.502c.092.196.297.417.337.364.083-.109-.009-.723-.137-.918-.121-.186-.075-.237.182-.198.299.046.378-.05.198-.24-.102-.107-.12-.178-.132-.51L8.6 12.75l.136-.032a.257.257 0 00.18-.166c.08-.237.1-.15.15.657.092 1.438.201 1.851.484 1.824.183-.018.185-.021.283-.396.054-.208.132-.427.174-.487.088-.128.261-.823.225-.9-.05-.104.037-.485.15-.66.089-.14.107-.22.087-.384-.014-.113-.011-.206.006-.206.044 0 .136-.289.172-.538.017-.114.052-.244.078-.287.033-.056.033-.092-.002-.12-.104-.084.015-.53.26-.972.272-.492.499-1.03.499-1.183 0-.144.885-1.312 1.072-1.415.31-.17.516-.53.516-.9 0-.18.03-.4.065-.486.089-.219.194-.69.173-.775-.031-.121-.181.033-.236.243-.1.386-.268.564-.558.594-.143.016-.26.018-.26.006 0-.046.191-.515.242-.593.174-.27.489-.669.623-.789.085-.077.207-.232.27-.345a.949.949 0 01.249-.292 3.53 3.53 0 00.386-.323c.403-.384 1.282-.9 1.533-.9.213 0 2.273-1.051 2.683-1.37.38-.294 1.744-.839 2.102-.839.35 0 .748-.45.559-.632C20.827.01 21.037 0 22.444 0c1.37 0 1.615.013 1.545.08zM13.524.084c-.127.06-.17.123-.22.324-.057.235-.07.249-.235.249a.397.397 0 00-.302.14c-.172.189-.592.269-.635.121-.04-.135.08-.404.191-.432.106-.026.339-.235.339-.303 0-.026-.128-.074-.284-.107-.248-.052-.184-.06.51-.063.689-.003.774.006.636.07zM11.052.068a9.9 9.9 0 01-.636.043c-.05-.003-.4-.01-.779-.014C9.26.093 8.934.07 8.915.045 8.896.02 9.492.005 10.239.01c1.15.01 1.274.018.813.058zm2.67 2.242c.091.408.072.457-.357.907-.224.236-.492.535-.596.665-.104.13-.207.237-.23.237-.021 0-.098.121-.169.27-.07.147-.146.268-.166.268-.02 0-.068.074-.105.164-.065.156-.068.158-.07.028 0-.075.03-.152.067-.17.037-.02.068-.077.068-.13 0-.194.188-.585.364-.755.203-.197.884-1.19.968-1.411.067-.177.195-.218.227-.073zm5.348.481c-.172.58-.167.91.016.91.23 0 .422-.601.312-.98-.049-.166-.272-.118-.328.07zm-1.913.062c-.439.331-.484.487-.479 1.645.005 1.025.045 1.168.322 1.172.193.003.483-.58.634-1.275.043-.194.113-.459.158-.59.127-.373.038-1.018-.155-1.12-.12-.062-.224-.026-.48.168zm2.623.869c-.054.23-.022.394.086.441.123.054.315-.702.212-.837-.057-.076-.245.174-.297.396zm.497.523c-.213.383-.03.635.204.28.091-.139.106-.502.022-.542-.064-.031-.063-.032-.226.262zm-4.041.015a1.31 1.31 0 00-.302.272l-.155.192.098.265c.15.408.404.295.379-.17-.007-.127.017-.178.105-.222.114-.057.139-.146.087-.323-.034-.115-.03-.115-.212-.014zm4.565.23c-.131.218-.116.645.023.643.141-.001.203-.104.237-.396.05-.419-.082-.544-.26-.248zm-5.417.168a.344.344 0 00-.114.45c.135.27.36.133.353-.214-.006-.294-.068-.356-.239-.236zm6.05.073a1.085 1.085 0 00-.069.314 2.45 2.45 0 01-.056.343c-.043.14.152.248.243.135.075-.093.154-.607.117-.758-.03-.124-.169-.144-.235-.034zm.533.105c-.17.223-.052.62.175.585.135-.02.17-.165.122-.503-.034-.237-.154-.27-.297-.082zm-10.064.446a.487.487 0 01-.085.216c-.034.038-.063.094-.063.125 0 .071-.157.553-.273.837-.05.121-.09.296-.09.39 0 .092-.029.223-.064.29a1.45 1.45 0 00-.105.325.419.419 0 01-.22.318c-.1.063-.232.204-.293.313-.062.11-.136.2-.165.2-.03.002-.114.07-.189.152-.074.082-.157.149-.185.149-.027 0-.05.039-.05.087 0 .047-.032.11-.071.139-.075.055-.15.205-.271.544-.04.111-.102.24-.138.288a.341.341 0 00-.064.173c0 .048-.039.187-.086.309a3.3 3.3 0 00-.136.538 2.877 2.877 0 01-.129.507 1.594 1.594 0 00-.08.518c0 .414-.124.505-.19.14-.045-.251-.177-.375-.401-.376-.275-.002-.54-.52-.358-.704.06-.062.07-.095.029-.115-.142-.07-.427-.483-.367-.532.084-.068.273-.03.361.073.075.089.272.037.33-.086.015-.03.12-.075.232-.097.234-.046.251-.095.091-.261-.062-.065-.113-.166-.113-.225 0-.14.222-.562.296-.562.066 0 .112-.132.112-.32 0-.076.077-.231.177-.36.203-.26.29-.255.54.032.082.094.167.17.19.17.04 0 .136-.365.137-.515 0-.037.068-.135.15-.218.083-.083.217-.314.297-.513.081-.2.173-.383.204-.409.031-.025.105-.137.164-.247l.107-.202-.1-.1c-.118-.116-.083-.196.056-.128.113.056.302-.02.302-.12 0-.068.18-.381.362-.628a.469.469 0 00.092-.194c0-.038.018-.069.039-.069s.03.067.018.148zm9.665.841c-.036.015-.058.122-.057.279 0 .14-.003.335-.009.434-.005.098.005.266.023.372.029.18.025.189-.055.123-.157-.13-.365.338-.365.822 0 .222-.095.348-.265.352-.138.003-.192.28-.1.506.049.12.05.12.139.003.069-.09.151-.118.353-.118.361 0 .488-.202.282-.447-.105-.125-.084-.346.05-.542a.484.484 0 00.086-.21c0-.071.008-.07.045.004.024.05.044.214.044.366.002.563.28.503.451-.097.13-.453.141-1.78.017-1.872-.07-.051-.492-.035-.639.025zm-2.74 1.97c-.135.114-.17.187-.195.397-.016.14-.04.333-.054.426-.022.151-.014.166.07.135l.186-.07c.051-.019.091-.085.091-.15 0-.063.028-.115.062-.115.072 0 .276-.685.232-.778-.037-.08-.182-.023-.392.154zm-16.047.122c.062.082-.43.683-.557.68-.145-.005-.128-.126.052-.375.185-.254.43-.403.505-.305zm.305 1.32c0 .055-.051.198-.114.318-.16.304-.213.57-.131.659.041.045.064.19.064.416 0 .467.025.542.16.474.12-.06.173-.002.13.145-.021.074-.1.096-.352.1-.178.002-.299.018-.267.034.03.017.056.068.056.114 0 .106-.237.192-.262.095-.02-.077-.146-.096-.146-.021 0 .026.024.079.053.117.056.074-.03.359-.203.667a.564.564 0 00-.068.276.654.654 0 01-.202.5c-.182.15-.43-.5-.276-.723.08-.116.02-.288-.1-.288-.116 0-.339-.413-.339-.629 0-.14.021-.207.065-.207.093 0 .253-.289.253-.456 0-.117-.023-.14-.139-.14-.08 0-.127-.026-.11-.06.015-.034.068-.06.118-.06.054 0 .12-.075.167-.187a2.95 2.95 0 01.178-.35.487.487 0 00.075-.365c-.033-.272.195-.527.376-.418.154.092.43.08.535-.026.129-.128.48-.118.48.014zm9.054 1.053a.686.686 0 01-.211.12c-.126.04-.222.175-.45.635-.073.148-.212.409-.308.58-.206.368-.21.41-.301 2.555-.035.836-.098 1.215-.233 1.412-.057.082-.07.23-.066.686.008.658.003.642.189.67.028.005.036.06.018.131-.033.137.1.933.165.985.022.018.04.09.04.158 0 .074.11.261.273.465.15.188.272.38.272.43 0 .102.194.468.375.707.068.09.124.208.124.26 0 .119.107.125.18.01.113-.18.41-.09.41.125 0 .088.239.319.33.319.036 0 .102.054.147.12.065.094.136.117.336.112.351-.009.6.06.715.198.139.167.752.073 1.014-.154l.176-.153.095.2c.122.26.41.2.41-.084 0-.058.03-.139.068-.18.037-.04.092-.184.121-.32.03-.136.069-.273.087-.306.102-.183.095-.61-.011-.723a.92.92 0 01-.164-.283c-.041-.122-.074-.154-.114-.113-.112.117-.305.142-.334.043a.466.466 0 00-.17-.189.643.643 0 01-.17-.155c-.049-.098.052-.393.147-.433.048-.02.076-.061.061-.092-.045-.097-.178-.06-.239.068-.07.148-.29.114-.441-.069a.801.801 0 00-.239-.178c-.201-.093-.186-.238.059-.54.232-.286.262-.477.097-.62-.142-.122-.29-.547-.221-.636.036-.048.083-.03.172.061.068.07.146.128.174.128.028 0 .105.038.173.084.342.235.778.327.895.189.16-.191.318-.183.372.018.027.102.065.186.085.186.053 0 .092-.165.064-.264-.058-.197.26-.276.378-.094.077.117.194.162.194.074 0-.104-.269-.367-.446-.436-.105-.042-.213-.112-.241-.155-.028-.044-.075-.08-.106-.08-.03 0-.092-.053-.137-.118a.501.501 0 00-.177-.158.757.757 0 01-.2-.147c-.058-.059-.221-.124-.364-.146a3.199 3.199 0 01-.425-.095c-.123-.04-.219-.031-.363.035-.398.182-.576.07-.216-.137.16-.092.32-.13.553-.133a3.39 3.39 0 00.547-.051c.183-.04.237-.028.331.07.126.13.162.132.666.05.22-.035.41-.035.5-.001.22.084.317-.162.23-.587-.047-.233-.269-.184-.34.074-.07.253-.074.253-.233.001a.786.786 0 01-.13-.429c-.01-.736-.548-1.645-.934-1.58-.066.01-.156-.057-.262-.196-.27-.354-.361-.411-.588-.366-.2.039-.726.348-.776.455-.028.06-.202.078-.202.021 0-.097.49-.618.61-.648.092-.023.173-.106.242-.246.057-.115.154-.235.216-.266a.203.203 0 00.112-.17c0-.134-.13-.22-.198-.13-.078.102-.297.07-.434-.063-.071-.07-.247-.147-.395-.175-.29-.054-.524-.127-.948-.297-.334-.133-.519-.145-.636-.039zm-5.885 1.053c.142.156.204.448.115.545-.048.053-.059.136-.037.302.023.182.014.236-.048.267-.086.043-.156-.065-.158-.248a.666.666 0 00-.087-.264c-.068-.117-.074-.168-.033-.258.043-.093.034-.132-.054-.227l-.107-.115.12-.06c.158-.079.165-.077.289.058zm1.138.202c.04.062.035.1-.017.156-.119.13-.077.223.117.257.101.018.197.048.211.067.048.064-.143.456-.207.424a.326.326 0 00-.122-.03c-.034 0-.076-.061-.093-.135a1.592 1.592 0 00-.144-.334c-.183-.321.062-.711.255-.405zm14.229 2.312c.065.067.118.16.118.205 0 .046.04.112.089.146.133.094.197.457.106.597-.063.096-.081.1-.137.027-.087-.115-.135-.107-.227.034-.127.195-.299.161-.263-.052.019-.113.006-.201-.036-.257-.056-.073-.056-.102-.003-.198a.77.77 0 00.063-.308c0-.273.13-.36.29-.194zm-19.217.617c-.261.186-.267.387-.02.672.214.246.192.468-.04.404a.46.46 0 01-.202-.112c-.178-.222-.372.031-.2.26.047.063.058.174.04.4-.027.353.028.466.203.412.268-.084.297.34.03.432-.08.027-.152.078-.161.114-.027.105.224.134.416.047.214-.097.252-.074.252.151 0 .186.065.283.116.174.058-.122.335-.241.42-.18.067.05.061.065-.048.12-.069.034-.125.088-.125.12s-.05.131-.113.22c-.14.198-.153.442-.024.442.049 0 .11-.05.134-.113.062-.15.197-.188.751-.21.488-.02.569-.046.569-.188 0-.124.06-.106.173.051.07.099.084.157.05.203-.028.035-.04.127-.029.205l.02.141.035-.134c.066-.266.389-.05.457.306.034.178.202.307.256.195.017-.036.002-.108-.034-.161a.37.37 0 01-.066-.162c0-.037-.038-.102-.085-.145a.582.582 0 01-.118-.277c-.02-.126-.139-.346-.32-.597-.464-.646-.747-1.107-.748-1.219 0-.08-.038-.104-.16-.104-.182 0-.27-.156-.141-.25.092-.068.054-.177-.044-.128-.107.054-.332-.326-.334-.564-.001-.12-.029-.21-.072-.232-.038-.019-.098-.125-.133-.236-.084-.263-.382-.287-.705-.057zm4.693.248c-.02.11-.002.2.066.314.206.344.439 1.106.482 1.576.043.473.113.492.125.034.017-.64-.007-.894-.101-1.094a.995.995 0 01-.09-.341.689.689 0 00-.083-.292 1.32 1.32 0 01-.112-.247c-.048-.17-.252-.135-.287.05zm-2.996.601c-.19.191-.19.37 0 .49.123.077.136.072.237-.09.29-.46.116-.754-.237-.4zm10.093 1.319c.105.024.178.242.133.397-.027.092-.362.189-.438.127-.138-.112.125-.566.305-.524zm5.757.23a5.374 5.374 0 01-.102.361c-.125.385-.057.488.146.22.123-.161.193-.521.139-.708-.042-.141-.136-.076-.183.126zm-1.797.311c0 .215-.207.609-.32.609-.046 0-.18.517-.145.562.19.25.6-.492.6-1.082 0-.241-.015-.316-.067-.316-.049 0-.068.065-.068.227zm-16.776.607c-.152.31-.126.38.11.304.103-.033.303-.492.247-.566-.084-.11-.227-.005-.357.262zm14.982.241c-.063.135-.03 1.34.044 1.57.067.205.18.336.231.268.028-.037.082-.673.086-1.008.005-.46-.254-1.056-.36-.83zm.775.921c-.123.557-.063 1.13.074.709.03-.093.083-.213.118-.268.057-.09.094-.234.178-.7.019-.1 0-.17-.06-.227-.114-.11-.212.044-.31.486z", fill: "#000" })));
}
var ForwardRef = React__namespace.forwardRef(SvgChieftainIcon);
var MemoForwardRef = React__namespace.memo(ForwardRef);

module.exports = MemoForwardRef;
//# sourceMappingURL=ChieftainIcon.js.map
