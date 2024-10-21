import { NavItem } from "@/_components/aside-nav/aside-nav-item";
import { NavLogout } from "@/_components/aside-nav/aside-nav-logout";
import { MyProfile } from "@/_components/aside-nav/aside-nav-profile";
import { Logo } from "@/_components/ui/logo";
import { RecomemdationArea } from "@/_components/ui/recommendation-area";
import { TrendingArea } from "@/_components/ui/trending-area";
import { SearchInput } from "@/_components/ui/ui-search-input";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutHome({ children }: Props) {
  return (
    <main className="min-h-screen flex justify-center mx-auto max-w-7xl">
      <section
        className="hidden lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-[1px] border-gray-60">
        <div className="flex-1 mt-6">
          <Logo width={150} height={30} />
          <span className="flex mt-2 py-1">
            <MyProfile />
          </span>
          <nav className="mt-11 flex flex-col gap-1">
            <NavItem href="/main" icon={faHouse} label="Página inicial" />
            <NavItem href="/profile" icon={faUser} label="Meu perfil" />
          </nav>
        </div>
        <div className="mb-6">
          <NavLogout />
        </div>
      </section>

      <section className="flex-1 max-w-lg m-6">{children}</section>

      {/* aside */}

      <aside className="hidden lg:flex flex-col gap-6 sticky top-0 h-fit w-96 px-8 py-6 border-l-[1px] border-gray-600">
        <SearchInput hideOnSearch />
        <TrendingArea />
        <RecomemdationArea />
      </aside>
    </main>
  );
}
