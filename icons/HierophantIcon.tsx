import * as React from 'react';

function SvgHierophantIcon(
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
        d="M14.904.197a.58.58 0 00.13.288c.073.068.09.133.07.263a.67.67 0 00.079.395c.132.28.101.409-.177.728-.143.165-.248.24-.335.24-.172 0-.414.247-.336.343.031.038.11.07.176.07.065 0 .14.042.168.094.027.051.139.12.249.154.11.034.227.096.262.138.035.042.09.077.122.077.033 0 .16.106.285.235.217.226.222.238.128.31a.372.372 0 01-.143.073c-.024 0-.03.023-.012.052.017.028.07.052.117.052.116.001.516.391.74.723.102.15.224.301.271.336.17.127.12.709-.075.89-.154.143-.16.164-.132.438.028.274.022.294-.13.429-.108.097-.159.188-.159.29 0 .299-.171.449-.497.434-.28-.013-.287-.01-.27.116.009.07.023.33.031.577.012.328.038.47.098.531.12.123.101.176-.096.26-.124.053-.177.108-.177.185 0 .11.284.51.473.668.06.05.113.175.13.31.024.18.05.224.131.224.136 0 .144-.466.01-.566-.2-.148-.045-.51.31-.724.088-.053.161-.116.161-.139 0-.058.34-.4.398-.4.078 0 .125-.159.166-.566.022-.212.054-.479.071-.592.027-.177.014-.223-.099-.33-.156-.15-.201-1.174-.06-1.37.078-.11.054-.231-.046-.231-.09 0-.12-.486-.037-.602a.452.452 0 00.063-.224c0-.261.1-.462.232-.462.24 0 .434.669.25.857-.065.066-.066.097-.008.215.13.261.14.518.024.58-.134.074-.095.422.091.795.195.392.345 1.166.24 1.245-.057.043-.085.174-.099.463-.01.222-.057.64-.102.93-.083.525-.067 1.06.034 1.123.026.017.047.096.047.178 0 .108.054.194.202.323.233.203.26.367.11.657-.052.099-.108.239-.126.312-.045.186-.36.5-.555.552-.152.04-.165.06-.19.306-.014.146-.04.279-.056.296-.062.062-.292-.095-.35-.24-.066-.16-.24-.313-.31-.269-.07.045-.047.217.06.42.123.234.125.313.008.467-.081.108-.098.112-.157.039-.036-.045-.136-.082-.221-.082h-.156l.14.15c.078.081.19.151.25.155l.372.018c.192.009.295.044.385.13.139.133.323.109.258-.034a.991.991 0 01-.04-.29c-.004-.198.002-.206.173-.222.179-.017.456-.228.456-.347 0-.07.17-.495.281-.7a.664.664 0 00.074-.259c0-.067.045-.208.1-.314a.869.869 0 00.102-.297c0-.058.042-.191.094-.296a1.77 1.77 0 00.13-.391c.08-.448.365-.713.557-.518.088.09.108.41.03.46-.029.018-.052.102-.052.187a.647.647 0 01-.048.247c-.042.08-.121.354-.315 1.085-.217.823-.206 1.048.055 1.099.476.092.672-.138.974-1.147.03-.097.083-.224.119-.283.036-.058.08-.19.097-.294.018-.104.066-.216.107-.251.041-.035.075-.136.076-.224.001-.282.27-.65.474-.65.214 0 .232.044.228.564-.001.278-.024.426-.071.466a.48.48 0 00-.103.222c-.02.09-.07.233-.114.318a1.543 1.543 0 00-.115.36 2.88 2.88 0 01-.09.361c-.247.718-.351 1.108-.294 1.108.115 0 .294-.151.442-.371.095-.144.219-.324.275-.402.055-.078.195-.277.31-.444.28-.405.385-.494.558-.474.2.023.206.15.022.456-.086.142-.156.306-.156.365 0 .152-.435.792-.587.862-.095.044-.116.08-.082.14.03.055.012.15-.053.282-.078.161-.087.233-.046.37.093.31.11 1.738.022 1.96-.105.266.106 1.35.301 1.549a.605.605 0 01.12.266c.073.398-.135.447-.253.06-.05-.162-.131-.04-.131.196 0 .164-.026.245-.097.295a.356.356 0 00-.114.222c-.014.123-.044.156-.156.169-.182.021-.178.127.012.334.084.09.152.202.152.248 0 .045.049.145.107.221.103.133.104.142.017.24-.088.099-.085.108.095.296.103.107.187.244.187.306 0 .064.104.222.244.369l.245.257.35-.057c.284-.046.377-.086.494-.212.15-.161.233-.133.235.079.001.12.105.168.636.296.25.06.494.122.542.136.082.025.089.13.089 1.26V24h-7.089c-5.383 0-7.088-.015-7.088-.06 0-.034.038-.103.084-.155.046-.052.109-.14.14-.194a9.67 9.67 0 01.595-.968l.197-.272-.128-.05c-.16-.061-.16-.094-.002-.33a.714.714 0 00.126-.399c0-.115.033-.282.072-.371.073-.163.106-.337.163-.858.03-.264.142-.463.262-.463.025 0 .061.189.08.42.044.536.091.633.202.415a.749.749 0 00.082-.255c0-.051.035-.144.077-.206.086-.124.1-.754.035-1.585l-.036-.463-.22-.016c-.212-.016-.22-.021-.185-.155.02-.076.037-.323.038-.55.004-.845.001-.86-.19-1.072-.201-.222-.216-.338-.094-.733.149-.48-.036-.56-.34-.148-.091.125-.184.228-.205.228-.021 0-.045.087-.054.193-.015.183-.025.193-.193.193-.15 0-.174-.016-.158-.103.011-.057.018-.203.015-.324-.003-.15.02-.231.07-.25.124-.05.08-.121-.074-.121-.114 0-.17-.04-.252-.182l-.106-.182.17-.189c.17-.188.17-.188.208-.066.028.089.014.14-.053.19-.143.105-.055.132.194.058.424-.126.757-.715.518-.917-.042-.035-.076-.132-.076-.215 0-.088-.021-.138-.05-.12-.029.018-.051.09-.051.16 0 .27-.217.54-.286.355-.016-.042-.057-.077-.09-.077-.153 0-.333-.286-.333-.528 0-.13-.023-.253-.051-.27-.03-.019-.05.034-.05.127 0 .094-.032.171-.077.189-.094.037-.1.122-.008.122.133 0 .182.328.073.48-.054.076-.123.138-.153.138s-.097.038-.147.084c-.1.091-.087.104-.168-.162a.116.116 0 00-.104-.077c-.088 0-.324-.248-.326-.343-.002-.075.277-.25.473-.297.138-.033.144-.045.12-.265-.021-.186-.008-.24.065-.28.05-.027.13-.155.179-.285.11-.294.338-.324.368-.05.045.402.271.391.258-.012a2.323 2.323 0 01.027-.457c.045-.198.024-.213-.476-.34-.518-.133-.892-.191-1.015-.158-.056.015-.102.014-.102-.002 0-.087.224-.395.306-.421.146-.048.304-.28.275-.405-.03-.129.068-.305.11-.199.1.247.345.279.696.09.278-.15.338-.157.537-.052.133.07.164.069.327-.013.208-.104.208-.165-.001-.545-.158-.288-.164-.289-.363-.06-.175.2-.332.23-.483.09a.862.862 0 00-.307-.144c-.159-.04-.215-.082-.227-.167-.035-.245-.457-.113-.83.26-.097.095-.27.12-.315.044-.015-.025.006-.075.047-.11.109-.091.094-.147-.056-.217-.142-.066-.146-.142-.041-.879.03-.213.02-.263-.079-.37-.062-.067-.098-.147-.08-.177.018-.03-.025-.114-.096-.186-.07-.073-.13-.165-.13-.205 0-.088-.154-.18-.302-.18a.543.543 0 01-.252-.11c-.08-.06-.18-.096-.223-.08-.041.016-.103-.004-.136-.045-.088-.108-.493-.28-.658-.28-.145 0-.31-.117-.686-.489-.412-.408-.442-.821-.062-.883.243-.04.473-.223.52-.415.163-.658 1.596-1.528 2.29-1.39.528.105.607.143.76.364.117.169.223.248.451.34.54.216.7.527.485.948-.059.117-.165.351-.236.521-.07.17-.151.344-.179.386-.167.259-.255.773-.154.898.087.107.03.248-.194.476-.141.145-.202.258-.228.426-.02.126-.058.258-.087.293-.132.162-.03.398.201.466a1.2 1.2 0 01.279.111c.134.108.41.112.564.008.183-.123.444-.133.536-.02.089.11.496.07.564-.054a2.21 2.21 0 01.2-.262c.192-.223.273-.684.163-.926-.072-.157-.44-.436-.75-.567-.223-.095-.308-.637-.186-1.183a1.12 1.12 0 00-.03-.413 2.226 2.226 0 01-.067-.412c0-.084-.058-.255-.127-.378-.164-.292-.159-.455.023-.733.294-.45.495-.65.689-.682.24-.04.327-.118.327-.299 0-.183-.174-.205-.355-.045-.212.188-.44.084-.377-.17.024-.1.007-.144-.077-.19-.145-.079-.255.013-.255.212 0 .081-.017.149-.038.15-.02 0-.09.087-.154.193-.18.296-.557.514-.643.372-.017-.029-.081-.052-.142-.053-.061 0-.212-.093-.335-.205a3.164 3.164 0 00-.593-.39c-.59-.298-.623-.434-.104-.433.24 0 .364.03.533.128a.96.96 0 00.383.129c.094 0 .235.054.334.128.287.216.455.12.455-.259 0-.171-.455-.515-.779-.59-.295-.066-.439-.139-.527-.266-.037-.052-.1-.095-.14-.095-.04 0-.073-.02-.073-.045 0-.025-.092-.147-.204-.27-.346-.38-.382-.427-.443-.573-.033-.078-.084-.142-.114-.142s-.173-.11-.317-.246C7.347.575 6.928.417 6.655.503c-.19.059-.452.006-.554-.111-.353-.409-1.144-.416-1.536-.014-.552.567-.961.638-.64.111.069-.113.153-.27.187-.347L4.174 0h10.7l.03.197zM2.038.053c-.063.026-.114.082-.114.126 0 .043-.023.079-.05.079-.028 0-.051.038-.051.085 0 .048-.013.073-.029.057C1.69.293.893.721.816.927c-.034.09-.05.101-.053.039C.753.744.45.872.337 1.146c-.043.106-.103.193-.132.193-.03 0-.053.036-.053.081a.272.272 0 01-.076.158C.008 1.647 0 1.563 0 .828V0l1.076.003c.695.002 1.036.02.962.05zM.53 2.314c.018.03.086.055.15.055.156 0 .315.233.23.336-.032.04-.044.094-.027.122a.061.061 0 01-.021.082c-.029.018-.052.073-.052.123 0 .096-.313.127-.44.044a.068.068 0 00-.096.021c-.025.041-.014.047.035.019.042-.025.054-.023.029.005a.157.157 0 01-.102.046c-.032 0-.066.05-.074.113-.03.217-.162.258-.162.05 0-.13.029-.2.1-.239.085-.046.096-.097.079-.367-.011-.173-.008-.346.007-.386.038-.1.118-.09.118.013 0 .078.008.078.096-.003.063-.058.108-.07.13-.034zm2.812.647c.072.09-.011.36-.125.405-.036.014-.08.108-.099.21-.019.1-.06.184-.091.184s-.099.038-.15.085c-.16.148-.116-.182.065-.471.086-.138.176-.305.2-.37.052-.139.111-.151.2-.043zm4.135.026c.11.045.205.238.146.297-.017.018-.193.05-.392.071-.198.022-.471.08-.606.13-.177.064-.26.073-.3.033-.081-.082.078-.307.247-.35a.545.545 0 00.227-.134c.098-.106.47-.132.678-.047zm-3.686.364c.092.038.114.078.095.177-.013.071-.002.129.025.129.094 0-.068.854-.238 1.249-.037.086-.23.124-.295.058-.018-.018.015-.125.072-.24l.103-.206-.115-.159c-.153-.21-.142-.452.038-.791.08-.15.156-.27.17-.268.013.001.079.025.145.051zm-.025 1.84c.033.054-.042.618-.088.664-.112.114-.182-.122-.123-.41.055-.266.14-.369.211-.253zm3.446.167a.44.44 0 00-.198.25c-.026.121-.068.155-.24.192-.45.099-.49.449-.074.641.312.144 1.085.066 1.298-.13a.614.614 0 01.247-.111c.417-.085.242-.168-.415-.196-.497-.02-.952-.127-.564-.131.339-.004.636-.393.447-.585-.068-.07-.339-.032-.5.07zm4.61 1.338c-.017.029.027.177.098.33.08.17.142.419.162.643.031.338.043.365.151.365.368 0 .26-.78-.172-1.249-.14-.152-.19-.17-.239-.09zm2.104 1.207c-.078.096-.026.183.11.183.057 0 .157.058.222.129.208.228.557.12.424-.131-.046-.089-.089-.106-.204-.083-.08.017-.16.006-.177-.023-.03-.049-.203-.138-.282-.146-.018-.002-.06.03-.093.071zm-3.458.838c.141.027.14.054-.006.237-.13.162-.563.193-.563.04 0-.152.345-.32.57-.277zm-7.732.698c.201.421.052.943-.214.744-.196-.147-.197-.651-.002-.85l.111-.113.105.219zm10.702.229l-.128.14.206.198c.229.222.268.411.104.5-.142.078-.127.165.073.409.096.116.189.258.207.315.017.057.112.143.211.192.186.092.244.203.392.753.07.255.156.345.38.391.093.02.143.086.206.272.08.234.088.24.168.15.11-.123.107-.175-.024-.436-.098-.195-.103-.246-.053-.49.065-.315-.032-.647-.286-.985a1.984 1.984 0 01-.203-.335 1.936 1.936 0 00-.213-.343c-.082-.105-.149-.225-.149-.267 0-.081-.309-.347-.403-.347-.03 0-.077-.058-.103-.128-.064-.171-.224-.167-.385.01zm-.631.016c-.054.03-.098.078-.098.109 0 .146.582.763.721.765.098 0 .021-.185-.139-.338-.122-.118-.177-.216-.177-.318 0-.235-.12-.32-.307-.218zm-1.337.768c-.112.22-.1.248.13.287.306.053.356-.035.143-.254a3.069 3.069 0 00-.185-.181.672.672 0 00-.088.148zm.575.042c-.07.188-.027.249.379.535.35.247.464.266.605.103.135-.157.15-.305.035-.342a.432.432 0 01-.185-.159c-.094-.145-.254-.165-.287-.034-.018.069-.025.064-.03-.024-.012-.248-.429-.312-.517-.08zm.877 1.31c-.133.135-.07.298.154.403.118.055.252.128.297.161.197.146.31-.067.185-.347-.098-.22-.5-.356-.636-.217zM8.25 12.998a.643.643 0 00.198.233.355.355 0 01.168.302c.012.144.041.196.117.21.252.049.195.23-.163.517-.275.22-.366.257-.372.148a1.706 1.706 0 00-.023-.164.365.365 0 01.035-.2c.042-.08.036-.112-.028-.149-.045-.025-.082-.094-.082-.153 0-.06-.025-.195-.057-.302-.11-.373.08-.78.207-.442zm-4.4 2.02c.037.044.08.245.095.446.046.59.181.522.234-.117.032-.395.044-.412.188-.266.094.096.102.129.049.215-.092.15-.075.303.065.592.069.142.125.3.125.351 0 .052.026.143.058.203.111.212.352 1.313.426 1.944.033.291.333 1.899.398 2.138.039.141.085.35.102.463.018.113.064.345.103.515.15.654.224 1.042.256 1.34.019.17.055.393.08.496.026.104.067.295.09.425l.044.237H.267l.024-.142c.045-.273.272-.963.37-1.124a.708.708 0 00.098-.222c0-.115.418-.955.588-1.182.095-.126.172-.26.172-.299 0-.038.028-.07.063-.07.044-.001.04-.016-.01-.048-.062-.04-.059-.074.024-.23.085-.16.089-.204.03-.368-.058-.164-.055-.197.025-.287.085-.095.086-.121.011-.42-.108-.437-.12-1.456-.024-1.917.042-.198.089-.456.105-.573.044-.328.408-1.034.59-1.148a.916.916 0 00.23-.204c.042-.06.104-.11.14-.11.035 0 .176-.11.313-.244.465-.455.697-.565.836-.395zm11.314.408c-.112.041-.256.075-.32.075-.128.001-.48.228-.643.414a3.113 3.113 0 01-.354.308c-.562.427-.743.74-.866 1.503-.08.495-.077.606.026 1.304.093.629.094.63.23.656.16.031.171-.007.14-.479a3.947 3.947 0 01.06-.875c.259-1.477.31-1.575 1.196-2.298.17-.138.223-.184.518-.45a.978.978 0 01.297-.17c.149-.048.154-.056.045-.059-.07-.002-.218.03-.33.071zm-2.67.475c-.058.289.092.425.467.425.192 0 .335-.1.206-.145a.45.45 0 01-.147-.119.29.29 0 00-.19-.096.25.25 0 01-.173-.078c-.083-.102-.14-.097-.163.013zm-1.893 4.163a.69.69 0 01.03.2.27.27 0 00.077.182c.07.06.11.36.048.36-.127 0-.276-.294-.276-.547 0-.268.058-.361.121-.195zm12.183 1.59c0 .156.078.208.289.19.12-.011.198.02.294.118.196.2.454.16.397-.061-.02-.08-.082-.123-.207-.147-.114-.022-.188-.07-.203-.13-.043-.167-.57-.14-.57.03zm-5.62.115c0 .324.139.48.426.48.363-.002.378-.062.087-.353-.143-.144-.26-.285-.26-.315 0-.029-.057-.053-.127-.053-.117 0-.126.018-.126.241z"
        fill="#000"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgHierophantIcon);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
