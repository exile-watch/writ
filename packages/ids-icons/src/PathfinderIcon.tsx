import * as React from 'react';

function SvgPathfinderIcon(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.942.048a1.545 1.545 0 00-.376.287c-.123.124-.262.226-.31.226-.103 0-.8.623-.8.715 0 .036.053.106.117.157.102.08.096.104-.048.2-.148.099-.171.098-.234-.01-.105-.178-.186-.15-.517.185-.277.281-.297.329-.257.612.041.284.024.323-.232.537-.225.189-.276.281-.276.504a.771.771 0 01-.15.456c-.084.1-.186.268-.228.372-.041.105-.131.19-.2.19-.079 0-.108.04-.08.11.052.128-.016.326-.112.326-.037 0-.068-.127-.068-.282 0-.387-.195-.541-.268-.212-.03.132-.122.347-.206.479-.126.197-.141.297-.09.58.034.188.054.39.044.45-.152.927-.154.871.045.92.237.056.19.5-.097.895-.236.326-.419.821-.419 1.136a.87.87 0 01-.118.42c-.144.209-.166 1.056-.048 1.854.043.3.111.81.15 1.134.04.324.096.628.127.675.03.047.053.316.05.597-.003.336.037.589.118.736l.122.226.123-.158c.815-1.04.847-1.05.98-.338.115.61.066 1.045-.146 1.302-.24.29-.15 1.197.172 1.74.29.49.366.547.728.557.432.012.536.091.634.482.217.861.432 1.162.535.748.052-.212.383-.455.383-.282 0 .127.889.59.95.494.024-.036.011-.084-.028-.107-.108-.063-.361-.617-.455-.992a5.653 5.653 0 00-.313-.823c-.127-.269-.23-.557-.23-.64a.471.471 0 00-.12-.276c-.134-.141-.335-.8-.336-1.102 0-.11-.068-.318-.15-.463-.088-.157-.132-.34-.11-.454.022-.104-.014-.332-.08-.507-.152-.406-.15-.693.005-.92.125-.18.123-.256-.022-1.211-.048-.318.117-.374.389-.133.256.228.552.266.614.08a.352.352 0 01.614-.113c.272.325.559.283.832-.123.127-.189.27-.344.318-.345.049 0 .125-.102.17-.224.045-.123.112-.206.15-.184.074.044.027.4-.068.516-.087.106.128.544.267.544.065 0 .178-.065.25-.145.188-.21.236-.184.334.187.088.332.088.332.24.189.25-.24.225-.697-.04-.726-.201-.022-.21-.039-.21-.439 0-.488-.087-.61-.364-.51-.153.056-.225.04-.357-.078-.09-.08-.216-.147-.278-.147a.567.567 0 01-.262-.107.696.696 0 00-.338-.109c-.663-.01-1.315-.434-1.161-.755.061-.13.15-.19.276-.19.107 0 .276-.091.4-.216.117-.118.312-.236.433-.261.25-.052 1.36-1.068 1.641-1.503.198-.305.316-1.087.176-1.17-.046-.026-.33.203-.638.514-.306.309-.678.683-.828.832-.406.404-1.057.47-.779.078.153-.215.46-.838.558-1.135.09-.27.085-.29-.107-.423-.11-.076-.2-.185-.2-.24 0-.154.4-1.048.468-1.048.033 0 .042-.046.02-.102-.023-.057.007-.195.068-.309.281-.529.207-1.408-.081-.968-.053.08-.16.145-.241.145-.156 0-.637.219-.679.309-.051.11-.165.05-.165-.088 0-.079.065-.176.145-.217a.632.632 0 00.231-.274c.178-.41.322-.6.453-.6.075 0 .327-.142.562-.316.234-.173.532-.357.66-.408.68-.268-.26-.644-1.336-.534-.484.05-.59-.064-.242-.261.366-.207.453-.294.426-.43-.027-.137-.255-.179-.48-.088zM6.815 7.014c.025.038-.04.242-.143.454a17.05 17.05 0 00-.297.647c-.139.328-.433.437-.433.162 0-.187.344-1.079.477-1.24.088-.106.333-.12.396-.023zm.466 1.495c.028.141.031.35.007.463a.43.43 0 00.065.342.435.435 0 01-.004.567c-.17.214-.16 1.677.013 1.769.211.112.095.24-.124.136-.173-.082-.193-.138-.21-.596-.026-.67-.07-.833-.231-.833-.124 0-.127-.054-.045-.78.118-1.055.414-1.652.53-1.068zm2.376 1.541c.246.153.211.284-.09.338-.145.026-.44.163-.658.306-.218.143-.5.287-.625.322l-.23.063.045-.416c.066-.612.341-.834.95-.767.24.027.513.096.608.154zm6.43.162c-.365.082-1.078.765-1.078 1.032 0 .249.365.289.588.064.146-.147.996-.052 1.19.133.12.114.508.097.508-.022 0-.402.8-.674.99-.336.08.143.534.216.534.086 0-.2-.705-.41-1.625-.484-.559-.045-.63-.087-.46-.267.232-.243-.065-.337-.648-.206zM7.651 15.65c.15.158.114.353-.129.681a.532.532 0 00-.11.448c.03.176.005.274-.094.359-.215.185-.329-.007-.267-.45.043-.312.028-.38-.118-.508-.219-.195-.175-.41.09-.439a.528.528 0 00.294-.127c.12-.138.175-.132.334.035zm4.271 2.059c-.733.12-.723.117-.723.295 0 .494.369 1.061.69 1.061.292 0 .282-.084-.045-.396-.24-.228-.26-.275-.18-.42.157-.282.6-.387.73-.173.152.246.532.345.82.214.35-.159.34-.217-.053-.317-.179-.045-.376-.124-.439-.174-.17-.137-.376-.16-.8-.09zM.053 19.255c-.064.063-.074 3.584-.009 3.584.025 0 .133-.065.24-.145.106-.08.235-.145.286-.145.05 0 .181-.078.289-.174l.196-.173-.16-.308c-.144-.277-.151-.35-.074-.716.048-.224.067-.541.043-.705-.024-.166-.006-.365.041-.45.074-.131.058-.164-.124-.247-.159-.073-.21-.15-.213-.313-.002-.215-.356-.358-.514-.208zm10.247.623c-.11.106-.12.395-.015.457.042.025.076.283.076.574 0 .575.19 1.034.591 1.439.213.214.4.169.4-.098 0-.075.034-.137.076-.137.042 0 .076.048.076.107 0 .058.078.145.172.192.094.048.299.212.455.364.497.485 1.038.807 1.267.753.308-.072.848-.343.858-.43.02-.171-.028-.303-.162-.442a.724.724 0 01-.164-.356c-.02-.16-.082-.231-.257-.29-.301-.103-.78-.456-.833-.616-.049-.147-.774-.469-.929-.412-.086.031-.088.065-.01.184.08.121.074.166-.032.267-.268.256-1.017-.611-1.31-1.516-.047-.148-.13-.161-.258-.04zm10.542 1.088c-.194.551-.192.663.017 1.107.164.347.204.531.189.875-.01.24.02.574.067.744l.086.308H22l.093-.345c.051-.19.106-.385.122-.435.015-.05.08-.09.145-.09.073 0 .116-.068.116-.184 0-.226.179-.302.42-.18.29.149.482.04.289-.165-.19-.201-.274-.415-.163-.415.118 0 .623.3.696.413.094.145.282.113.282-.05 0-.18-.864-1.016-1.05-1.016-.047 0-.113-.048-.147-.106-.142-.241-.754-.464-1.266-.461-.273.001-.533-.02-.579-.047-.045-.027-.098-.006-.116.047zm-13.947 2.53c-.629.036-1.366.113-1.638.173-.273.06-.634.127-.802.15-.951.133-.328.179 2.42.18 1.625 0 2.953-.025 2.953-.057 0-.11-.183-.232-.346-.232a1.13 1.13 0 01-.388-.107c-.319-.151-.891-.179-2.2-.106z"
        fill="#000"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgPathfinderIcon);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;