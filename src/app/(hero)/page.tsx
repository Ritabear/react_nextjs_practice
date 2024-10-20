
import homeSrc from '@/public/home.jpg'
import Hero from '../components/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home page',
}





export default function Home() {
    return (
    <Hero imgUrl={homeSrc} altText='hero' content='Professional Cloud Hosting'/>

    );
  }