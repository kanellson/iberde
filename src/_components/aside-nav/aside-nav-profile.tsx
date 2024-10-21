import { dataUser } from "@/data/dataUser"
import Link from "next/link"

export const MyProfile = () => {
   return (
      <div className="flex items-center  overflow-hidden">
         <div className="size-10 mr-2 rounded-full overflow-hidden">
            <Link href={`/${dataUser.slug}`}>
               <img
                  className="size-full"
                  src={dataUser.avatar}
                  alt={dataUser.name}
               />
            </Link>
         </div>
         <div className="flex-1 overflow-hidden">
            <Link
               className="block truncate"
               href={`/${dataUser.slug}`}>
               {dataUser.name}
            </Link>
            <div
               className="text-sm truncate">@{dataUser.slug}
            </div>
         </div>
      </div>
   )
}