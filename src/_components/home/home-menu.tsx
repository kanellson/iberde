import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "../ui/logo";
import { faHouse, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "../ui/ui-search-input";
import { NavItem } from "../aside-nav/aside-nav-item";
import { faUser } from "@fortawesome/free-regular-svg-icons";

type Props = {
   closeAction: () => void;
}

export const HomeMenu = ({ closeAction }: Props) => {
   return (
      <div className="lg:hidden fixed inset-0 p-6 bg-slate-950">
         <div className="flex justify-between items-center">
            <Logo width={120} height={30} />
            <div onClick={closeAction} className="cursor-pointer flex justify-center items-center bg-slate-900 rounded-full p-1 size-10">
               <FontAwesomeIcon className="size-6" icon={faXmark} />
            </div>
         </div>

         <div className="mt-6">
            <SearchInput />
         </div>
         <div>
            <NavItem
               href="/main"
               icon={faHouse}
               label="Página inicial"
            />
            <NavItem
               href="/profile"
               icon={faUser}
               label="Meu perfil"
            />
         </div>
      </div>
   )
}