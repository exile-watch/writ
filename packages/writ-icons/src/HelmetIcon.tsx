import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHelmetIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M5.207.462c-.004.254.035.505.086.558s.124.632.16 1.286c.038.654.108 1.636.156 2.182.083.948.012 1.425-.195 1.3-.048-.029-.121-.612-.163-1.296-.11-1.811-.336-4.153-.355-3.68-.009.223-.013 1.365-.009 2.537.01 3.018.038 2.947-.978 2.475l-.407-.19.225.234c.244.253.268.353.136.556-.134.206-.609-.052-.733-.4-.057-.16-.153-.29-.213-.29s-.11-.074-.11-.163c0-.105.057-.142.157-.102.086.034.238.091.338.127s-.034-.158-.298-.431c-.471-.489-1.312-1.716-2.16-3.156-.38-.644-.636-.966-.636-.8 0 .147.39.984.696 1.497.19.317.344.66.344.761 0 .103.304.476.676.83.64.611 1.028 1.288.416.727-.644-.591-.31.23.39.956.243.252.652.687.91.966.372.405.52.5.728.466.341-.055 1.218.33 1.28.563.076.282-.046.319-.296.09-.124-.115-.409-.234-.631-.265-.513-.071-1.29-.343-1.29-.45 0-.046-.126-.143-.281-.215C2.47 6.815.258 3.215.56 2.92c.042-.04.119-.006.172.077.053.082.097.117.098.077s-.114-.238-.255-.441a2.3 2.3 0 0 1-.324-.716C.148 1.38 0 1.404 0 1.958c0 .59.68 2.677 1.21 3.71.406.795.647 1.154 1.927 2.871.505.678.919 1.325.919 1.438s.056.223.125.246c.07.022.132.174.14.338.01.21.067.298.196.298.19 0 .681.521.682.723.001.205-.37.217-.62.02-.239-.189-.246-.189-.468.014-.123.114-.307.206-.407.206-.634 0-.752.514-.276 1.2.168.242.338.651.378.91.092.6-.29 2.81-.581 3.368-.115.22-.223.489-.24.597a.84.84 0 0 1-.16.35c-.229.268-.353 1.912-.233 3.077.205 1.99.374 1.938 1.47-.449.348-.756.883-1.34 1.227-1.34.206 0 .639.4.639.59 0 .188.223.142.487-.1.294-.27.43-.174.24.17-.087.159-.229.253-.381.253-.271 0-.287.034-.14.303.133.24.613.344.975.21.34-.126 1.316-1.062 1.52-1.457.082-.157.349-.466.594-.687l.447-.401.834.041c.957.048 1.188.161 1.56.766.142.233.388.587.545.788.413.526.415.967.009 2.495-.276 1.04-.263 1.494.042 1.494.268 0 1.256-1.075 1.9-2.066 1.462-2.257 1.845-2.782 2.494-3.427.756-.751 1.575-1.202 2.186-1.204.54-.001 1.06-.32 1.846-1.131a25 25 0 0 1 1.613-1.48c1.133-.939 1.36-1.327 1.29-2.197-.129-1.559-.267-2.487-.41-2.76-.086-.164-.218-.571-.293-.906-.149-.66-1.114-2.747-1.507-3.26l-.243-.317.315-.732c.32-.742.328-.976.041-1.083-.184-.07-.885.229-.885.376 0 .054.143.027.319-.062.513-.259.532-.134.066.434-.71.865-1.246 1.564-1.633 2.13-.2.293-.41.527-.468.522-.266-.028-.37.033-.512.302-.084.159-.128.382-.097.497.03.114-.005.315-.08.447-.074.13-.123.295-.108.365s-.017.127-.069.127-.093-.125-.092-.279c.002-.447-.363-1.796-.615-2.274-.188-.353-.182-.39.065-.39.114 0 .208-.046.208-.101s.085-.102.188-.102a.8.8 0 0 0 .386-.14c.108-.078.248-.123.31-.1.061.024.305-.118.54-.315s.48-.358.542-.358.114-.046.114-.102.058-.103.13-.105c.071-.002.27-.116.442-.253.32-.256.294-.33-.052-.15-.138.073-.233.064-.331-.029-.368-.35-.663-.476-.98-.418-.192.035-.359.014-.4-.05-.038-.061-.154-.11-.259-.11-.31 0-.48-.274-.3-.485.25-.291.814-1.408.813-1.61 0-.14-.04-.114-.154.1a4 4 0 0 1-.416.59c-.144.167-.261.35-.261.41 0 .057-.129.253-.286.435-.502.578-.91 1.115-.91 1.197 0 .044-.064.119-.143.166s-.156.203-.172.345-.306.638-.644 1.102c-.343.471-.743 1.18-.905 1.605-.16.419-.421 1.035-.582 1.37-.39.818-.537 1.216-.509 1.383a.7.7 0 0 1-.044.317l-.139.355c-.096.244-.146.606-.156 1.117-.005.294-.053.43-.15.43-.185 0-.18.054.026.362.158.236.157.267-.016.453-.185.199-.19.198-.56-.074-.205-.151-.39-.311-.408-.355-.068-.157-.324-.078-.44.135-.093.168-.088.236.021.308.09.058.027.065-.17.02-.171-.039-.49-.197-.71-.352-.731-.518-1.746-.738-2.567-.558-.33.072-.345.067-.156-.063.304-.208 1.008-.385 1.267-.319.177.045.232.007.259-.18.02-.139.119-.252.239-.275.162-.03.18-.009.09.1-.146.177.006.596.216.596.1 0 .167-.132.194-.38.035-.316.056-.344.12-.165.073.204.453.443.704.443.064 0 .038-.083-.057-.185-.094-.102-.172-.262-.172-.355 0-.182.26-.234.362-.073.092.146.366.007.366-.185 0-.092.117-.29.26-.441.143-.15.26-.36.26-.466 0-.105.094-.274.21-.376.12-.107.185-.258.153-.357-.074-.227.042-.505.21-.505.08 0 .115-.076.086-.186-.033-.122.042-.245.217-.357.147-.094.335-.33.418-.524.155-.361.316-.453.4-.226.063.174.147.08.237-.27q.075-.292-.033-.228c-.232.14-.213-.26.04-.819.408-.899 1.323-2.297 2.416-3.686l.203-.26h-.343c-.238 0-.46-.099-.72-.322-.385-.33-.845-.51-.977-.381-.04.039.01.13.11.2.1.072.181.167.181.211s-.082.011-.182-.074-.434-.181-.742-.215-.64-.131-.736-.217c-.097-.085-.227-.155-.29-.155s-.14-.057-.173-.127c-.048-.1-.074-.1-.123.004-.197.415-.622.743-1.162.897-.466.132-.553.188-.433.279.662.504.603 1.237-.19 2.395-.212.308-.393.575-.403.593-.054.097-1.494-1.276-1.494-1.424 0-.211.662.18 1.093.645.451.487.487.469.979-.484.358-.695.376-.764.19-.74-.275.034-.405-.013-.364-.133.023-.069-.038-.21-.137-.312-.19-.198-.247-.18-1.257.396-.641.366-.948.871-.634 1.043.1.054.143.135.098.18-.046.044-.12.023-.164-.047q-.19-.304-.678.45a4.5 4.5 0 0 1-.572.711c-.214.195-.24.264-.127.333.119.072.11.14-.046.4-.214.353-.17.446.211.446.327 0 .35.233.03.317-.146.038-.277.004-.35-.09-.08-.106-.213-.132-.441-.088-.423.083-.426-.078-.009-.54.522-.581.39-.656-.473-.27-.428.19-.628.22-1.123.17l-.603-.06.246-.265c.393-.423.616-.827.55-.996a.32.32 0 0 1 .054-.293c.087-.103.076-.176-.044-.293-.21-.204-.346-1.064-.185-1.161.126-.076.004-.958-.18-1.305-.051-.096-.123-.38-.16-.631A7 7 0 0 0 5.36.457L5.214 0zm8.853 1.507c.422.278.704.568 1.245 1.278.213.28.214.29.017.124-.167-.14-.312-.166-.645-.114-.29.045-.43.03-.43-.047 0-.063.07-.115.156-.115a.155.155 0 0 0 .156-.152c0-.084-.049-.152-.108-.152-.172 0-.932-.78-.932-.956 0-.213.022-.208.54.134M9.1 3.286c-.23.101-.732.312-1.118.468-.677.275-.928.559-.493.559.313 0 1.855-.796 1.978-1.022.06-.108.094-.194.078-.192a8 8 0 0 0-.446.187M7.892 4.692c-.186.153-.57.37-.856.482-.529.209-.588.273-.77.825l-.103.316.428-.158c.71-.263 1.516-.809 1.637-1.109.062-.153.155-.358.207-.456.146-.277-.15-.223-.543.1m11.034.99c-.143.074-.385.19-.538.258-.224.1-.262.165-.196.34.144.38.523.27.918-.267.361-.49.31-.584-.184-.33m-9.516.559c.678.489.643.486 1.003.076.159-.181.29-.297.293-.257.009.152-.65.79-.812.787-.213-.004-1.288-.712-1.344-.885-.08-.246.304-.122.86.279m4.384.361c.311.281.191.383-.45.383-.548 0-.592-.037-.504-.428.083-.37.518-.35.954.045M4.542 6.6c.092.09.243.13.358.094.33-.102.959.145.812.318-.097.114-.083.143.073.144.164.001.17.017.039.1q-.157.099-.26-.027c-.058-.07-.265-.13-.461-.137-.233-.008-.422-.09-.543-.236-.103-.124-.235-.196-.293-.16-.14.084-.336-.036-.259-.158.091-.143.355-.113.534.062M18.46 8.986c.172.014.449-.03.617-.096.405-.16.776.131.55.433-.124.165-.198.17-.808.06-.98-.176-1.19-.27-1.032-.457.082-.096.17-.117.245-.057.064.05.256.104.428.117m-1.421-.012c.595.007.748.255.164.266-.642.012-1.75.425-2.272.847-.11.09-.017-.098.208-.417.44-.624.678-.784 1.085-.735.143.018.51.035.815.039m-11.764.895c.574.549.603.598.48.836a.8.8 0 0 0-.07.482c.034.135.01.23-.057.23-.063 0-.115-.064-.115-.142s-.065-.165-.143-.195c-.079-.03-.175-.26-.214-.512a2.3 2.3 0 0 0-.325-.824c-.457-.657-.339-.624.444.125m.393 3.449c.22.34.32.429.345.304.054-.274.54-.06.54.237 0 .052.068.095.152.095s.202.09.264.202c.06.112.085.203.054.203s.013.164.099.365c.11.26.126.419.052.554-.082.149-.06.212.105.298.186.097.301.407.152.407-.216 0-.67-.342-.67-.504 0-.107-.1-.36-.222-.56l-.221-.367-.195.312c-.214.343-.243.45-.101.365.125-.076.219.186.219.61 0 .191.046.347.104.347s.104-.053.104-.118.024-.095.054-.066c.03.03.014.159-.035.288q-.089.232-.164.116c-.042-.065-.21-.118-.374-.118-.288 0-.295-.013-.202-.33.16-.544-.019-.734-.215-.229-.388.996-.675-.587-.395-2.18.148-.844.152-.846.55-.231m12.22-.411c0 .124-.582.86-.782.987-.173.111-.224.216-.18.377.036.136.018.197-.047.158-.058-.035-.258.122-.444.348-.404.49-.653.408-.35-.115.682-1.177 1.084-1.71 1.316-1.746.317-.048.487-.051.487-.009m-7.465.279c.245.08.863.243 1.374.362 1.594.372 2.035.724 2.035 1.623 0 1.13-.853 1.73-2.174 1.53-1.45-.219-2.074-.773-2.622-2.327-.238-.674-.239-.604.011-1.004.239-.381.617-.432 1.376-.184m7.82 1.615c-.313.338-.67.811-.793 1.05-.123.24-.294.437-.381.437-.123 0-.13-.028-.034-.122.069-.067.124-.261.123-.431 0-.213-.03-.267-.09-.172-.054.082-.116.097-.153.038-.086-.136.81-.978 1.195-1.123.05-.019.09-.114.09-.212 0-.262.096-.312.37-.19.243.108.242.113-.326.725m-3.429.596c.125.735.174 2.311.072 2.311-.052 0-.124.113-.16.251-.058.225-.09.24-.32.137-.35-.155-.58.04-.547.46.038.479-.34.5-.57.032-.187-.383-1.057-1.133-1.208-1.042-.053.032-.367.01-.698-.05-.458-.083-.658-.079-.843.018-.187.097-.303.1-.508.008-.366-.163-.674-.148-.89.044-.231.203-.823-.184-1.031-.673-.07-.166-.161-.301-.202-.301s-.13-.116-.196-.259l-.12-.258.441.295c.823.55 1.808.876 1.586.526-.035-.055-.018-.101.038-.101s.117.047.137.105c.046.135 3.003.448 3.374.358.699-.172 1.391-1.14 1.391-1.947 0-.558.154-.506.254.086m-10.702.474c-.087.268.191.505.68.582.466.072.553.241.123.24-.61-.003-1.048-.125-1.097-.306-.078-.292.043-.708.206-.708q.15 0 .088.192m13.416 1.032c.08.126-.237.5-.424.5-.07 0-.245.152-.39.336-.366.469-1.242 1.3-1.305 1.238-.07-.07.413-1.066.517-1.066.046 0 .243-.137.438-.304.195-.168.406-.305.467-.305s.195-.112.298-.25c.207-.277.297-.31.399-.15M7.249 17.962c.118.223.345.64.503.925.165.295.26.59.223.684-.091.233-.458.208-.594-.041-.073-.133-.18-.188-.295-.152-.374.116-.744-1.729-.412-2.053.137-.133.21-.052.575.637m7.993.174c-.09.124-.163.298-.163.385s-.096.34-.214.561a2.4 2.4 0 0 0-.244.765c-.03.367-.706 1.853-.952 2.093-.22.215-.303-.395-.104-.769.089-.169.162-.358.162-.42s.118-.355.261-.65c.144-.297.275-.764.292-1.038.038-.602.135-.78.391-.714.133.034.212-.019.256-.17a4 4 0 0 1 .237-.554l.175-.337.033.31a.9.9 0 0 1-.13.538"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHelmetIcon);
const HelmetIcon = memo(ForwardRef);
export { HelmetIcon };
