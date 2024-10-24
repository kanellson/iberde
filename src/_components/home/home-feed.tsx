import { dataIberde } from "@/data/dataIberde"
import { IberdeItem } from "../iberde/iberde-item"

export const HomeFeed = () => {
   return (
      <div>
         <IberdeItem iberde={dataIberde} />
         <IberdeItem iberde={dataIberde} />
         <IberdeItem iberde={dataIberde} />
      </div>
   )
}