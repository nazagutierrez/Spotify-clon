import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HomePlaylist = ({ id, img, title, artists } : { id:string, img:string, title:string, artists:string[] }) => {
  return (
    <Link href={`/${id}`} className='flex gap-6 mr-4 min-w-[450px] text-lg justify-start items-center bg-neutral-600/30 rounded-md overflow-hidden hover:bg-neutral-600/90 transition-all'>
        <Image unoptimized={true} src={img} alt="playlist" width={0} height={0} className='w-20 h-20 shadow-lg shadow-black object-cover' />
        <h1 className='text-white px-2'>{title}</h1>
    </Link>
  )
}