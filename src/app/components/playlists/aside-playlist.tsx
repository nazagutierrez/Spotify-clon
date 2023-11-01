import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const AsidePlaylist = ({ img, title, genre, id } : { img:string, title:string, genre:string, id:string }) => {
  return (
    <Link href={`/${id}`} className='flex gap-5 hover:opacity-60 transition-all'>
        <Image unoptimized={true} src={img} alt="playlist" height={0} width={0} className='w-12 h-12 rounded-md' />
        <div className='flex-col text-start'>
            <h1 className='text-white'>{title}</h1>
            <h2 className='text-sm'>{genre}</h2>
        </div>
    </Link>
  )
}
