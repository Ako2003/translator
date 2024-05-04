"use client"
import { useParams } from 'next/navigation'
import React from 'react'


export default function page() {
    const router = useParams()
    return (
        <div>
            <iframe className='w-screen h-screen' src={`/pdfs/pdf-${router.id}.pdf`} frameBorder='0'></iframe>
        </div>
  )
}
