import React from 'react'
import Hero from '@/app/components/hero'
import performanceSrc from '@/public/performanceSrc.jpg'

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Performance',
    description: 'Performance',
}



export default function Page() {
  return (
    <Hero imgUrl={performanceSrc} altText='performance' content='Performance'/>
  )
}
