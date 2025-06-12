import { redirect } from "next/navigation";
import { getVideoById } from "@/lib/actions/video";
import VideoPlayer from "@/component/VideoPlayer";
import VideoDetailHeader from "@/component/VideoDetailHeader";

const Page = async ({ params }: Params) => {
  const { videoId } = await params;
  

   const data = await getVideoById(videoId);
  if (!data || !data.video) redirect("/404");

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