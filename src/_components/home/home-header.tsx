'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Logo } from "../ui/logo"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { HomeMenu } from "./home-menu"

export const HomeHeader = () => {
   const [showMenu, setShowMenu] = useState(false)
   return (
      <header className="flex justify-between  pb-4 border-b-[1px] border-gray-600">
         <div className="lg:hidden">
            <Logo width={150} height={35} />
         </div>
         <div className="hidden lg:block text-xl">Página inicial</div>
         <div
            className="cursor-pointer lg:hidden"
            onClick={() => setShowMenu(true)}
         >

            <FontAwesomeIcon className="size-6" icon={faBars} />
         </div>
         {showMenu &&
            <HomeMenu
               closeAction={() => setShowMenu(false)}
            />
         }
      </header>
   )
}