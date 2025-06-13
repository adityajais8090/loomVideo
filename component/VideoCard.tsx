'use client';
import Link from 'next/link'
import Image from 'next/image'

const VideoCard = ({
    id,
    title,
    thumbnail,
    userImg,
    username,
    createdAt,
    views,
    visibility,
    duration
} : VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
        <Image src={thumbnail} alt="thumbnail" width={290}
        height={270} className="thumbnail" />
        <article className="hover:shadow-md transition">
            <div className="flex items-center justify-between mb-2">
                {/* User Info */}
                <div className="flex items-center gap-3">
                <Image
                    src={userImg || '/assets/images/dummy.jpg'}
                    alt="avatar"
                    width={34}
                    height={34}
                    className="rounded-full aspect-square object-cover"
                />
                <div className="flex flex-col text-sm">
                    <h3 className="font-semibold text-gray-800">{username}</h3>
                    <p className="text-gray-500 text-xs">{visibility}</p>
                </div>
                </div>

                {/* Views */}
                <div className="flex items-center gap-1 text-sm text-gray-500">
                <Image src="/assets/icons/eye.svg" alt="views" width={16} height={16} />
                <span>{views}</span>
                </div>
            </div>

            {/* Title + Date */}
            <h2 className="text-sm font-medium text-gray-800 line-clamp-1">
                {title} -{" "}
                {createdAt.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                })}
            </h2>
            </article>

        <button onClick={() => {}} className = "copy-btn"> 
            <Image src="/assets/icons/link.svg" alt="copy" width={18}
            height={18} />

        </button>

        {duration && (
            <div className = "duration" >
                {Math.ceil(duration / 60)} min
            </div>
        )}
        </Link>

  )
}

export default VideoCard