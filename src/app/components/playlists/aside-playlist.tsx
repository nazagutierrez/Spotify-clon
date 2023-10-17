import Image, { StaticImageData } from 'next/image'
import React from 'react'

export const AsidePlaylist = ({ img, title, artists } : { img:StaticImageData, title:string, artists:string[] }) => {
  return (
    <button className='flex gap-6'>
        <Image src={img} alt="playlist" className='w-12 h-12 rounded-md' />
        <div className='flex-col text-start'>
            <h1 className='text-white'>{title}</h1>
            <h2>{artists}</h2>
        </div>
    </button>
  )
}
