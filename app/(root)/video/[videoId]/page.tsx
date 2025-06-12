import { redirect } from "next/navigation";
import { getVideoById, getVideoByDbId } from "@/lib/actions/video";
import VideoPlayer from "@/component/VideoPlayer";
import VideoDetailHeader from "@/component/VideoDetailHeader";

const Page = async ({ params }: Params) => {
  const { videoId } = await params;
  

  // Try fetching by DB ID first
  let data = await getVideoByDbId(videoId);

  // If not found, fallback to fetching by Bunny GUID
  if (!data || !data.video) {
    data = await getVideoById(videoId); // this uses Bunny videoId (guid)
  }

  // Still not found? Redirect to 404
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