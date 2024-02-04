import * as React from 'react';

function SvgElementalistIcon(
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
        d="M.39.737c0 .405.128 1.018.286 1.36.457.994.317 1.37-.151.406l-.423-.87-.058 1.389c-.05 1.2.002 1.463.384 1.932l.441.542-.432-.15C.018 5.2.006 5.24.006 6.71v1.515l.72.354.72.355-.72-.07-.72-.07v4.974l.585-.133c.363-.082.541-.051.469.082-.065.118-.328.214-.586.214-.258 0-.468.098-.468.218s.097.218.215.218c.154 0 .157.08.011.279-.128.175-.209 1.946-.218 4.789L0 23.946H7.825l-.838-.95c-.461-.524-.839-1.078-.839-1.233 0-.155.238.07.528.5.867 1.282 3.002 2.351 2.657 1.329a.803.803 0 01.097-.65c.164-.225.153-.32-.045-.392l-1.03-.377c-.422-.155-.918-.273-1.103-.262a.317.317 0 01-.336-.322c0-.253.056-.278.215-.098.119.134.328.195.465.136.138-.06.45.014.697.163.245.15.706.333 1.022.408.506.118.576.226.576.887v.752l2.4-.002c2.487-.002 3.646-.38 4.847-1.58.184-.184.335-.235.335-.113 0 .241-1.41 1.369-1.712 1.369-.101 0-.238.098-.303.218-.078.142 1.374.217 4.212.217H24v-4.59c0-4.49-.01-4.601-.432-5.02l-.432-.428.432.238c.623.342.531-.048-.144-.615-.317-.265-.576-.596-.576-.734s-.188-.478-.417-.756c-.23-.277-.322-.503-.206-.503.116 0 .395.264.618.587.83 1.196 1.157.925 1.157-.956V9.497l-.574.623c-.316.343-.62.571-.677.507-.057-.064.202-.38.574-.703.64-.554.677-.654.677-1.88 0-.713-.034-1.296-.075-1.296-.041 0-.451.194-.912.431-.85.437-1.909.628-1.317.237.159-.105.742-.358 1.296-.563L24 6.481V5.46c0-.561-.106-1.14-.235-1.287-.186-.21-.186-.357 0-.693.13-.235.235-1.114.235-1.954V0H13.376C2.996 0 2.744.01 2.405.435c-.347.436-.692.58-.65.273C1.833.163 1.673 0 1.062 0 .426 0 .39.04.39.737zM5.187 2.99c0 .061-.13-.01-.288-.16-.158-.15-.287-.48-.286-.734 0-.401.039-.38.288.16.157.343.286.673.286.734zm-1.343.167c-.264.17-.61.313-.768.315-.368.006.573-.595.96-.613.158-.007.072.126-.192.298zm-2.336 1.66c-.461.331-.501.2-.184-.6l.312-.79.064.603c.035.336-.05.684-.192.787zm11.838-.23c-.634.35-1.282.63-1.44.622-.159-.009.037-.15.434-.316.397-.165.913-.452 1.147-.638.233-.185.556-.329.717-.32.161.01-.225.303-.858.653zM7.02 4.369c.225.413-.103.515-.438.136-.299-.34-.3-.368-.006-.368.174 0 .374.105.444.232zm3.347 1.991c-.005.283-.44-.259-1.173-1.46-.29-.477-.184-.405.39.263.433.504.785 1.043.783 1.197zm-8.793-.1c.169.329.37.941.45 1.36.167.896.885 1.801 1.29 1.625.16-.07.674.215 1.176.65 1.107.958 1.653 1.015 1.67.174.013-.67 1.282-3.125 1.694-3.277.16-.06.214-.002.134.144-.087.161-.015.196.214.103.19-.078.285-.065.21.028-.3.378 1.12 1.215 2.036 1.2.401-.008.401-.01-.024-.412l-.426-.404.522-.117c.42-.095.675.047 1.29.714.825.893 1.677 1.455 2.418 1.595.254.048.614.162.799.253.184.091.542.107.793.036.273-.078.543-.015.667.155.167.228.084.272-.41.218l-.619-.068.576.235c.317.13.733.232.926.228.301-.006.315.044.096.357-.238.342-.222.342.25.001.54-.391 1.205-.316 1.729.195.198.195.497.254.817.163.628-.178.848-.53.331-.53-.21 0-.437-.098-.502-.218-.147-.27-.056-.272.54-.015.341.147.583.112.885-.129.476-.378.974-.249.974.254 0 .26-.08.291-.344.132-.262-.16-.546-.057-1.18.427-.91.693-1.442.802-1.681.343-.218-.415-1.152-.64-1.328-.318-.078.143-.157.951-.177 1.797-.035 1.524-.49 3.145-1.078 3.836-.147.172-.665.95-1.151 1.728-.902 1.442-1.699 2.402-1.699 2.047 0-.108-.194-.213-.431-.233a5.888 5.888 0 01-.942-.185c-.377-.11-.67-.015-1.122.363l-.612.511-.664-.87c-2.023-2.655-3.406-5.856-3.567-8.258-.05-.744-.133-.88-.63-1.03-.315-.095-.66-.3-.765-.453-.353-.513-1.225-1.032-1.519-.904-.353.153-1.265-.897-1.265-1.457 0-.214-.088-.452-.195-.527-.107-.075-.14-.237-.073-.36.067-.123-.061-.504-.285-.847-.437-.67-.493-.859-.256-.859.083 0 .289.27.458.599zm17.445.295c-.322.4-.586.637-.586.527 0-.24.997-1.451 1.1-1.335.039.044-.192.408-.514.808zm-6.73.954c.15.205.406.277.695.194.466-.132.664.237.219.408-.326.125.878.815 1.43.819.507.004 1.063.344.887.543-.394.447-3.21-.997-3.613-1.853-.24-.507.034-.586.382-.11zm-6.525.111c0 .12-.324.205-.72.19l-.72-.03.672-.16c.37-.088.694-.173.72-.189.027-.016.048.07.048.19zm16.736.483c-.305.345-1.512.328-1.811-.026-.196-.232-.1-.26.528-.15.422.073.895.04 1.05-.075.362-.267.53-.086.233.25zm-5.006 1.127c.272.287.833.733 1.245.991l.75.47-.672-.142c-.37-.078-.771-.148-.893-.156-.122-.008-.182-.134-.133-.28.05-.145-.196-.52-.546-.832-.35-.312-.548-.569-.441-.57.106-.001.417.232.69.52zm-10.002.1c0 .083.39.253.868.379.477.125.801.157.72.07-.221-.237-1.588-.623-1.588-.45zm3.661.121c-.213.292-.204.346.058.346.183 0 .312.179.312.43 0 .368-.069.4-.478.224a1.176 1.176 0 00-.912-.008l-.434.197.48.04c.264.022.539.03.611.019.072-.012.435.123.806.298.44.21.716.243.795.099.066-.122.222-.204.346-.183.283.05 1.737-.671 1.621-.803-.156-.177-1.3.378-1.306.634-.003.138-.142.055-.31-.185-.21-.302-.33-.352-.393-.163-.136.41-.442.326-.442-.122 0-.73-.457-1.229-.754-.823zm2.225 1.83c-.256.322-.271.46-.078.732.259.364.999.735.823.413-.059-.109.002-.253.134-.322.133-.07.055-.074-.172-.011-.36.1-.408.03-.373-.546.048-.78.065-.766-.334-.265zm-2.883.09c.059.109-.053.339-.249.512-.323.288-.31.295.141.076.514-.248.683-.783.248-.783-.136 0-.199.088-.14.196zm6.054.93c.12.3.256.504.301.452.136-.154-.156-.997-.345-.997-.096 0-.076.246.044.545zM4.913 13.39c.066.398.328.944.582 1.215.253.27.461.589.461.708s-.317-.144-.704-.582c-.387-.44-.647-.863-.577-.942.07-.079.054-.25-.034-.38-.334-.495-.402-.982-.12-.86.15.066.327.444.392.842zm14.964 1.002c-.043.492-.124.947-.18 1.01-.146.165-.69-.386-.673-.68.01-.154.051-.144.112.027.176.494.404.283.532-.49.173-1.044.305-.96.21.133zm-17.895.028c.602-.04.982.659.695 1.28-.09.194-.12.4-.069.459.052.058-.03.224-.183.367-.31.29-.223-.506.106-.986.233-.34-.302-.794-1.042-.886-.333-.041-.696-.183-.805-.314-.143-.172-.064-.19.281-.061.264.097.722.161 1.017.141zm9.624.253c-.144.65.017 1.002.456.998.262-.003.273-.04.057-.196-.156-.112-.223-.381-.162-.65.058-.25.03-.51-.063-.575-.092-.065-.222.126-.288.423zm2.128-.264c.055.162.29.43.522.593.412.292.415.287.124-.21-.332-.566-.802-.845-.646-.383zm7.861-.032c-.068.125-.028.358.088.517.266.363.12.818-.374 1.167-.487.345-.533-.104-.052-.503.274-.227.287-.33.08-.613-.256-.35-.15-.795.19-.795.106 0 .136.102.068.227zm-12.424.768c-.395.426-.72.882-.72 1.014 0 .133.022.198.049.146.026-.051.39-.508.806-1.015.924-1.122.85-1.202-.135-.145zm1.361.245c.121.257.444.667.718.911.273.244.441.546.374.67-.068.125-.01.237.127.25.455.042 1.397-.047 1.787-.168.374-.115.373-.106-.02.356-.852 1.002-2.807.676-3.769-.629-.183-.25-.443-.449-.576-.444-.348.014 1.386 1.726 2.014 1.99.61.255.668.502.192.805-.363.231-.376.219.583.546.136.046.503-.044.816-.2.508-.254.522-.287.137-.302-.6-.025-.544-.593.096-.976.624-.374 2.019-1.886 1.882-2.04-.052-.06-.294.04-.537.22-.243.18-.804.397-1.246.482l-.803.154.66-.818c.803-.993.753-1.13-.184-.503-.753.504-.968.462-2.01-.392-.454-.373-.458-.371-.241.088zm8.558 1.688c.15.63.136 1.31-.022 1.13-.073-.083-.162-.365-.197-.628-.035-.262-.195-.704-.356-.982-.279-.483-.275-.493.089-.236.21.149.428.47.486.716zm-16.013.678c0 .068-.083.299-.184.513-.263.557.374 1.288 1.049 1.204.282-.035.462-.007.4.063-.287.326-1.845.196-1.751-.146.051-.188.017-.48-.077-.65-.104-.187-.084-.461.05-.707.21-.379.513-.543.513-.277zm14.926 1.783c.132.05.32-.139.418-.418.174-.49.18-.492.192-.042.007.257-.127.527-.296.6-.3.131-.288.555.04 1.526.065.19.022.347-.095.347-.117 0-.213-.193-.213-.43 0-.459-.69-1.987-.998-2.207-.24-.172-.22-.349.083-.717.202-.247.277-.165.437.476.107.426.301.815.432.865zm4.975-.892c-.07.079-.029.277.091.44.172.235.152.269-.098.16-.358-.156-.43-.743-.09-.743.122 0 .166.064.097.143zm-15.844.492c-.138.096-.243.238-.234.314.009.077.016.254.016.393 0 .329-.286.01-.293-.326-.006-.288.533-.817.67-.66.05.057-.021.182-.159.279zm12.497.943c-.148.666-.622 1.47-.866 1.47-.11 0-.063-.172.104-.381.166-.21.361-.65.434-.98.072-.33.2-.599.285-.599.084 0 .104.22.043.49zm-3.375 2.004c-.063.185-.204.336-.314.336-.126 0-.113-.156.035-.425.265-.481.451-.421.279.09z"
        fill="#000"
      />
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgElementalistIcon);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;
