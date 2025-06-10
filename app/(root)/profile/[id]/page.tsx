


import Header from "@/component/Header";
import VideoCard from "@/component/VideoCard";
import { dummyCards } from "@/constants";


const page = async ( {params} : ParamsWithSearch) => {
    const { id } = await params;
  return (
    <div className="wrapper page">
        <Header subHeader = " Video Video" title ="Record Video Aditya"
        userImg="/assets/images/dummy.jpg" />
        <section className="video-grid">
           {dummyCards.map((card) => (
        <VideoCard key={card.id} {...card} />

           ))}
        </section>
       
     
        </div>
  )
}

export default page