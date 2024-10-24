import { SignupForm } from "@/_components/auth/auth-signup-form";
import { Logo } from "@/_components/ui/logo";
import { CodeXml } from "lucide-react";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="w-full h-screen relative">
      <div className="efect_shadow-r"></div>
      <div className="max-w-lg mx-auto py-6 px-6 rounded-md">
        <div className="flex items-center flex-col mt-6">
          <h1 className="flex gap-2 items-center">
            <CodeXml size={40} />
            <Logo fontLogo="font-2" />
          </h1>
          <h2 className="mt-10 text-lg ">Acesse sua conta</h2>
        </div>
        <div className="mt-10 mb-10 flex flex-col gap-3 text-slate-400">
          <SignupForm />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 md:flex-row text-lg ">
          <div className="">Já tem tem uma conta?</div>
          <Link className="text-cyan-700 hover:text-slate-300" href="/signin">
            Iniciar sessão!
          </Link>
        </div>
      </div>
    </div>
  );
}
