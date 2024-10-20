import Image from "next/image";
import homeSrc from '@/public/home.jpg'
import Hero from './components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page',
}





export default function Home() {
    return (
    //   <div className='bg-red-500 w-full'>
    //   <div className='h-screen relative'>
    //     <div className='absolute inset-0 -z-10'>
    //         <Image
    //             src={homeSrc}
    //             alt='hero'
    //             layout='fill'
    //             objectFit='cover'
    //             style={{objectFit: 'cover'}}
    //         />
    //         <div className='absolute inset-0 bg-gradient-to-r from-gray-800'></div>
    //     </div>
    //     <div className='flex justify-center pt-48'>
    //         <h1 className='text-white text-6xl'>Professional Cloud Hosting</h1>
    //     </div>
    //   </div>

    <Hero imgUrl={homeSrc} altText='hero' content='Professional Cloud Hosting'/>

    );
  }