import { HomeFeed } from "@/_components/home/home-feed";
import { HomeHeader } from "@/_components/home/home-header";
import { IberdePost } from "@/_components/iberde/iberde-post";

export default function MainPage() {
  return (
    <div>
      <HomeHeader />
      <IberdePost />
      <HomeFeed />
    </div>
  )
}
