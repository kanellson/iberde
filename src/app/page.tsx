import { Logo } from "@/_components/ui/logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center mt-12">
      <Link href="/main">
        <Logo fontLogo="font-3" />
      </Link>
    </div>
  );
}
