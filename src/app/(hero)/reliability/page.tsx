
import React from 'react'
import Hero from '@/app/components/hero'
import reliabilitySrc from '@/public/reliabilitySrc.jpg'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Reliability',
    description: 'Reliability',
}

export default function Page() {
  return (
    <Hero imgUrl={reliabilitySrc} altText='reliability' content='Reliability'/>
  )
}
