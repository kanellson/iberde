'use client'

import { dataUser } from "@/data/dataUser"
import { faImage } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../ui/ui-button"

export const IberdePost = () => {
   const handleImageUpload = () => {

   }
   const handlePostClick = () => {

   }
   return (
      <div className="flex gap-6 mt-3 rounded-md px-8 py-6 border border-gray-600">
         <div>
            <img
               src={dataUser.avatar}
               alt={dataUser.name}
               className="size-12 rounded-full"
            />
         </div>
         <div className="flex-1">
            <div
               className="min-h-14 outline-none text-lg text-white empty:before:text-gray-600 empty:before:content-[attr(data-placeholder)]"
               contentEditable
               role="textbox"
               data-placeholder="O que está acontecendo em..."
            >

            </div>
            <div className="flex justify-between items-center mt-2">
               <div onClick={handleImageUpload} className="cursor-pointer mt-[.3rem]">
                  <FontAwesomeIcon icon={faImage} className="size-5" />
               </div>
               <span className="flex-1 bg-slate-800 h-[.5px] mx-1"></span>
               <div className="w-28">
                  <Button
                     label="Postar"
                     size="m"
                     onClick={handlePostClick}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}