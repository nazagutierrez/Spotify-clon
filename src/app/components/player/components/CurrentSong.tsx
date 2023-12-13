import Image from "next/image";

export const CurrentSong = ({ img = "/assets/img/music-default.png", title, artists }: {img: string; title: string, artists: string[]}) => {
    return (
      <div className="flex justify-start items-center gap-5 overflow-hidden w-[260px]">
        <picture className="rounded-md w-16 h-16 overflow-hidden">
          <Image src={img} alt={title} width={0} height={0} unoptimized={true} className="h-full w-full object-cover"></Image>
        </picture>
  
        <div>
          <h3 className="text-md">
            {title}
          </h3>
          <h4 className="text-xs opacity-80">
            {artists?.join(', ')}
          </h4>
        </div>
      </div>
    )
  }
  