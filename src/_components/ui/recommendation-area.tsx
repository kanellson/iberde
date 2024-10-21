import { dataUser } from "@/data/dataUser"
import { RecomemdationItem, RecomemdationItemSkeleton } from "./recommendation-item"

export const RecomemdationArea = () => {
   return (
      <div className="bg-gray-700 rounded-lg ">
         <h2 className="text-xl p-6 ">Quem seguir</h2>
         <div className="flex flex-col gap-4 p-6 pt-0">
            <RecomemdationItem user={dataUser} />
            <RecomemdationItemSkeleton />
         </div>
      </div>
   )
}