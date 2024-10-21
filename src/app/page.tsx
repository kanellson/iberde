import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center mt-12">
      <Link href="/main">
        <Image
          src="/images/loho.png"
          width={180}
          height={40}
          alt="Logo iberde"
        />
      </Link>
    </div>
  );
}
