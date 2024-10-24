import Link from "next/link";

type Props = {
  fontLogo: "font-1" | "font-2" | "font-3";
}

export const Logo = ({ fontLogo }: Props) => {
  return (
    <Link href="/main">
      <div className={`flex font_Marcellus-logo text-sky-700 text-[1.8rem] font-semibold 
        ${fontLogo === "font-1" && "text-[1rem]"}
        ${fontLogo === "font-2" && "text-[2.5rem]"}
        ${fontLogo === "font-3" && "text-[3.1rem]"}`}>
        iberde
        <span className="ml-1 font-normal text-gray-400">iasd</span>
      </div>
    </Link>
  );
};

// export const Logo = ({ width, height }: Props) => {
//   return (
//     <Link href="/main">
//       <Image
//         src="/images/loho.png"
//         width={width}
//         height={height}
//         quality={100}
//         alt="logo iberdi seven"
//       />
//     </Link>
//   );
// };
