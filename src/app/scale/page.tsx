
import React from 'react'
import Hero from '@/app/components/hero'
import scaleSrc from '@/public/scaleSrc.jpg'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Scale',
    description: 'Scale',
}

export default function Page() {
  return (
    <Hero imgUrl={scaleSrc} altText='scale' content='Scale~~'/>
  )
}
