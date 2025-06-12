'use client';
import { useState, useEffect } from "react";
import { daysAgo } from "@/lib/utils";
import Image from "next/image"
import { useRouter } from "next/navigation";

const VideoDetailHeader = ({title, createdAt, userImg, username, videoId, ownerId, visibility, 
    thumbnailUrl, id} : VideoDetailHeaderProps) => {
        const router = useRouter();
        const [copied, setcopied] = useState(false);

        useEffect(() => {
            const changeChecked = setTimeout(() => {
              if(copied) setcopied(false);
            }, 2000)
          
          return () => clearTimeout(changeChecked)
        }, [copied])
        

        const handleCopyLink = () => {
            navigator.clipboard.writeText(`${window.location.origin}/video/${id}`);

            setcopied(true);
        }

  return (
    <header className="detail-header">
        <aside className = "user-info">
            <h1> {title} </h1>
            <figure> 
                <button onClick={() => router.push('/profile/${ownerId}')}>
                    <Image src={userImg || ''} alt="User" width={24} height={24} className="rounded-full" />
                    <h2>{username ?? 'Guest'}</h2>
                </button>
                <figcaption>
                    <span className="mt-1">
                        -
                    </span>
                    <p>{daysAgo(createdAt)}</p>
                </figcaption>
            </figure>
        </aside>
        <aside className="cta">
            <button onClick={handleCopyLink}>
                 <Image src={
              copied ? "/assets/images/checked.png" : "/assets/icons/link.svg"
            }
            alt="Copy Link"
            width={24}
            height={24}
          />
            </button>

        </aside>

    </header>
  )
}

export default VideoDetailHeader