import { redirect } from "next/navigation";
import { getVideoById, getVideoByDbId } from "@/lib/actions/video";
import VideoPlayer from "@/component/VideoPlayer";
import VideoDetailHeader from "@/component/VideoDetailHeader";

const Page = async ({ params }: Params) => {
  const { videoId } = await params;
  

  let data = await getVideoById(videoId); // Try Bunny GUID first

if (!data || !data.video) {
  data = await getVideoByDbId(videoId); // Then fallback to DB ID
}

if (!data || !data.video) {
  redirect("/404");
}


  const { user, video } = data;

  return (
    <main className='wrapper-page'>
           <VideoDetailHeader {...video} userImg={user?.image}
           username={user?.name} ownerId={video.userId}/>
           <section className = "video-details">
            <div className="content">
              <VideoPlayer videoId={video.videoId} />
            </div>
           </section>
    </main>
  );
};

export default Page