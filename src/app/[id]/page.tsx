import React from 'react'

export default function Page({ params }: { params: { id: string } }) {
  return <div className='h-full w-full mt-20 text-white'>My Post: {params.id}</div>
}
