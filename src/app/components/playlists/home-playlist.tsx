import Image, { StaticImageData } from 'next/image'
import React from 'react'

export const HomePlaylist = ({ id, img, title, artists } : { id:string, img:StaticImageData, title:string, artists:string[] }) => {
  return (
    <a href={`/${id}`} className='flex gap-6 mr-4 min-w-[450px] text-lg justify-start items-center bg-neutral-600/30 rounded-md overflow-hidden hover:bg-neutral-600/90 transition-all'>
        <Image src={img} alt="playlist" className='w-20 h-20 shadow-lg shadow-black' />
        <h1 className='text-white px-2'>{title}</h1>
    </a>
  )
}