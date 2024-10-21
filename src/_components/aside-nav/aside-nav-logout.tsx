"use client";

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export const NavLogout = () => {

   const router = useRouter()
   const handleClick = () => {
      router.replace('/signin')
   }
   return (
      <div className="flex items-center rounded-md w-fit px-2  gap-2 py-3 opacity-50 hover:opacity-100 cursor-pointer" onClick={handleClick}>
         <FontAwesomeIcon icon={faArrowRightFromBracket} />
         <div className="text-lg">Sair</div>
      </div>
   );
};
