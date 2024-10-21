import Link from "next/link";

type Props = {
   label: string;
   count: number;
}

export const TrendingItem = ({ label, count }: Props) => {
   return (
      <Link
         className="group/item"
         href={`/search?q=${encodeURIComponent(label)}`}
      >
         <div className="group-hover/item:underline font-semibold ">{label}</div>
         <div className="text-sm text-gray-400">{count} posts</div>
      </Link>
   )
}

export const TrendingItemSkeleton = () => {
   return (
      <div className="flex flex-col animate-pulse gap-1 ">
         <div className="bg-gray-600 w-3/4 h-3 rounded-sm"></div>
         <div className="bg-gray-600 w-1/4 h-3 rounded-sm"></div>
      </div>
   )
}