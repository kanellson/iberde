import Image from "next/image";
import Link from "next/link";

type Props = {
  width: number;
  height: number;
};

export const Logo = ({ width, height }: Props) => {
  return (
    <Link href="/main">
      <Image
        src="/images/loho.png"
        width={width}
        height={height}
        quality={100}
        alt="logo iberdi seven"
      />
    </Link>
  );
};
