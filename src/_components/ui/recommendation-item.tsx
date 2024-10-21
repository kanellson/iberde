'use client'

import { TypeUser } from "@/_types/typeUser"
import Link from "next/link";
import { Button } from "./ui-button";
import { useState } from "react";

type Props = {
   user: TypeUser;
}

export const RecomemdationItem = ({ user }: Props) => {
   const [following, setFollowing] = useState(false)

   const handleFollowButton = () => {
      setFollowing(true)
   }
   return (
      <div className="flex item-center">
         <div className="size-10 mr-2 rounded-full overflow-hidden">
            <Link href={`/${user.slug}`}>
               <img
                  className="size-full"
                  src={user.avatar}
                  alt={user.name} />
            </Link>
         </div>
         <div className="flex-1 overflow-hidden">
            <Link
               className="block truncate"
               href={`/${user.slug}`}> {user.name}
            </Link>
            <div className="text-sm truncate text-gray-400">@{user.slug}</div>
         </div>
         <div className="pl-2 w-20 text-sm text-gray-200">
            {!following &&
               <Button
                  label="seguir"
                  onClick={handleFollowButton}
                  size="p"
               />
            }
         </div>
      </div>
   )
}

export const RecomemdationItemSkeleton = () => {
   return (
      <div className="flex items-center animate-pulse">
         <div className="size-10 mr-2 rounded-full bg-gray-600"></div>
         <div className="flex-1 flex flex-col gap-1">
            <div className="bg-gray-600 w-3/4 h-3 "></div>
            <div className="bg-gray-600 w-1/4 h-3 "></div>
         </div>
      </div>
   )
}