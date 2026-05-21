import React from 'react'
import Navbar from '../components/Navbar'
import { Noto_Serif_JP,  Lovers_Quarrel, MedievalSharp} from 'next/font/google'
import Footer from '../components/Footer'
import FoodCards from '../components/FoodCards'
import Image from 'next/image'
import Link from 'next/link'
const notoSerifJP = Noto_Serif_JP({ subsets: ['latin'] })
const loversQuarrel = Lovers_Quarrel({ subsets: ['latin'],weight: '400' })
const medievalSharp = MedievalSharp({ subsets: ['latin'],weight: '400' })
const Cards = [
    {
        imageSrc: '/placeholder.webp',
        title: 'Kids Celebrations',
        description: 'Tiny tummies, big celebrations! Curated for little foodies.'
     },
     {
        imageSrc: '/placeholder.webp',
        title: 'Corporate Party',
        description: 'Corporate, But Make It Memorable.Beyond Boardrooms. Into Experiences.Celebrate Success, The Ikigai Way.Fresh Air. Fresh Ideas. Better Gatherings.'
     },
     {
        imageSrc: '/placeholder.webp',
        title: 'Weekend Brunches',
        description: 'Slow Mornings. Beautiful Brunches Where Weekends Taste Better.Brunches Worth Lingering Over.Your Weekend Ritual, Reimagined.'
     },
     {
        imageSrc: '/placeholder.webp',
        title: 'Farm to Table',
        description: 'From Our Farm To Your Table.Freshly Harvested. Thoughtfully Served.From Soil To Celebration.The Art Of Fresh, Farm-Led Dining.'
     },
     {
        imageSrc: '/placeholder.webp',
        title: 'Sundown Table',
        description: 'Interactive culinary stations where the art of cooking becomes part of the celebration.'
     },
     

]
const page = () => {
  return (<div>
    <div className='flex flex-col min-h-screen items-center bg-transparent'>
        <Navbar />
        <Image src={'/food placeholder.webp'} alt='food placeholder' width={1200} height={600} className='h-[100vh] -z-2 w-screen absolute object-cover' />
        <div className='absolute inset-0 bg-radial -z-1 to-[#02160a] from-[#000000]/80' />
        <h1 className={`text-7xl text-center mt-20 text-white ${notoSerifJP.className}`}>Taste of Purpose</h1>
        <h2 className={`text-6xl text-center mt-4 text-white ${loversQuarrel.className}`}> "A harvest woven in nature's finest threads" </h2>
        <p className={`text-2xl w-[60vw] text-center mt-8 text-[#f8ffad] ${notoSerifJP.className}`}>A curated menu of delicious and nutritious meals made from fresh, locally-sourced ingredients.</p>
    </div>
    <div className='flex bg-[#fdfdf1] flex-col p-20 gap-8'> 
        {
            Cards.map((card, index) => (
                <FoodCards
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                />
            ))
        }
       <p className={`text-5xl text-center mt-8 text-[#333] ${medievalSharp.className}`}>Book your Spot at our interactive kitchen today!</p>   
       <Link href='/GroupBookings' className='mx-auto block'>
         <button className='mx-auto block rounded-full bg-[#122a02] px-6 py-3 text-sm font-medium text-amber-100 transition-colors duration-300 hover:bg-[#1f3c07] mb-16'>Book My spot</button>
       </Link>
        </div>
        <Footer />
        </div>
  )
}

export default page