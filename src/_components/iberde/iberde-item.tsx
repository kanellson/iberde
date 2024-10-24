import { typeIberde } from "@/_types/typeIberde"
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
   iberde: typeIberde;
}

export const IberdeItem = ({ iberde }: Props) => {
   return (
      <div className="flex gap-2 my-3 p-6 rounded-md px-8 py-6 border border-gray-800">
         <div>
            <Link href={`/${iberde.user.slug}`}>
               <img
                  className="size-10 rounded-full"
                  src={iberde.user.avatar}
                  alt={iberde.user.name} />
            </Link>
         </div>
         <div className="flex-1">
            <div className="flex flex-wrap items-center gap-x-3">
               <div className="font-semibold text-md text-gray-400">
                  <Link href={`/${iberde.user.slug}`}>{iberde.user.name}</Link>
               </div>
               <div className="text-sm text-gray-500">@{iberde.user.slug}</div>
            </div>
            <div className="py-4 text-md">{iberde.body}</div>
            {iberde.image &&
               <div className="w-full">
                  <img
                     className="w-full rounded-2xl"
                     src={iberde.image}
                     alt="" />
               </div>
            }
            <div className="flex mt-6 text-gray-400">
               <div className="flex-1">
                  <Link href={`/iberde/${iberde.id}`}>
                     <div className="inline-flex items-center gap-2 cursor-pointer">
                        <FontAwesomeIcon
                           className="size-4"
                           icon={faComment}
                        />
                        <div className="text-md">{iberde.commentCount}</div>
                     </div>
                  </Link>
               </div>
               <div className="flex-1">
                  <div className="inline-flex items-center gap-2 cursor-pointer">
                     <FontAwesomeIcon
                        className="size-4"
                        icon={faRetweet}
                     />
                     <div className="text-md">{iberde.reIberdeCount}</div>
                  </div>
               </div>
               <div className="flex-1">
                  <div className="inline-flex items-center gap-2 cursor-pointer">
                     <FontAwesomeIcon
                        className="size-4"
                        icon={faHeart}
                     />
                     <div className="text-md">{iberde.likeCount}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}