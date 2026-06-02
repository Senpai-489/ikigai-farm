import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import ExperienceComponent from '../components/ExperienceComponent'
import {
  Noto_Serif_JP,
  MedievalSharp,
} from 'next/font/google'



import ImageSlider3D from '../components/lightswind/3d-image-slider'

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
})

const medievalSharp = MedievalSharp({
  subsets: ['latin'],
  weight: '400',
})

const experienceHighlights = [
  {
    title: 'Sustainable Celebrations',
    description:
      'Eco-friendly decorations, organic catering, and zero-waste practices make your celebration environmentally responsible.',
    imageSrc: ['/Sustainable1.jpeg','/Sustainable2.jpeg','/Sustainable3.jpeg'],
  },
  {
    title: 'Nature Based Activities',
    description:
      'Unique activities like farm tours, animal interactions, vegetable picking, and nature games for all ages.',
    imageSrc: ['/Naturebased1.1.jpeg','/Naturebased2.jpeg','/Naturebased4.jpeg'],
  },
  {
    title: 'Farm to Fork Dining',
    description:
      'Fresh, organic meals prepared from ingredients grown right on our farm, ensuring the highest quality and taste.',
    imageSrc: ['/FarmToTable.jpeg'],
  },
  {
    title: 'Personalized Experiences',
    description:
      'Customized decorations, themes, and activities tailored to your specific celebration and preferences.',
    imageSrc: ['/PersonalizedActivities1.jpeg','/PersonalizedActivities2.jpeg','/PersonalizedActivities3.jpeg'],
  },
  {
    title: 'Memorable Moments',
    description:
      'Professional photography, unique backdrops, and unforgettable experiences that create lasting memories.',
    imageSrc: ['/beltCarousel2.jpeg','/MemorableMoments2.jpeg','/MemorableMoments3.jpeg'],
  },
  {
    title: 'Farm venue',
    description:
      'Lush green gardens, scenic landscapes, and natural beauty provide the perfect backdrop for any celebration.',
    imageSrc: ['/FarmVenue0.jpeg','/FarmVenue1.jpeg','/FarmVenue2.jpeg','/FarmVenue3.jpeg','/FarmVenue4.jpeg'],
  },
]

const page = () => {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-transparent">
        
        <Navbar />

        {/* Background */}
        {/* <Image
          src={'/Team building.webp'}
          alt="team placeholder"
          width={1200}
          height={600}
          className="absolute -z-20 h-full w-full object-cover"
        /> */}

        {/* Overlay */}
        {/* <div className="absolute inset-0 -z-10 bg-radial from-[#000000]/80 to-[#02160a]" /> */}

        {/* Hero */}
        <div className="flex flex-col -translate-y-12 items-center px-4 pt-24 text-center sm:px-6 md:px-10">
          
          <h1
            className={` text-black text-5xl sm:text-xl md:text-7xl lg:text-8xl ${medievalSharp.className}`}
          >
            Our Philosophy
          </h1>

          <h2
            className={`mt-3  t0ext-black sm:text-xl md:text-2xl ${notoSerifJP.className}`}
          >
            &quot;The Ikigai Experience&quot;
          </h2>
        </div>

        {/* Slider */}
        <div className="relative -translate-y-32 w-full overflow-hidden">
          <ImageSlider3D
            containerClassName="relative w-[130vw] sm:w-[120vw] lg:w-[110vw]"
            images={[
             '/3dCarousel1.jpeg',
             '/3dCarousel2.jpeg',
             'Archery.jpeg',
             'KidsFood.jpeg',
             'KidsTrain.jpeg',
             'Trampoline.jpeg',
             'CamelRide.jpeg',
             'Food1.jpeg',
             'ATV2.jpeg',
             'beltCarousel1.jpeg',
             'beltCarousel4.jpeg',
             'CorporateFood.jpeg',
             'zipline2.jpeg',

            ]}
          />
        </div>

        {/* Highlights */}
        <section className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16  sm:px-6 lg:px-8">
          
          <div className="mx-auto -translate-y-40 max-w-3xl text-center">
            <p
              className={`text-lg uppercase tracking-[0.25em] text-black sm:text-xl md:text-2xl ${notoSerifJP.className}`}
            >
              What the experience includes
            </p>
          </div>

          <div className="mt-10 items-center flex flex-col gap-12 -translate-y-40 ">
            {experienceHighlights.map(({ title, description, imageSrc }, index) => (
              <ExperienceComponent
                key={index}
                title={title}
                description={description}
                imageSrc={imageSrc}
              />
            ))}
            
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mb-16 w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-[2rem] border border-[#f8ffad]/20 bg-[#012d0b]/95 px-5 py-8 text-center text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-8 sm:py-10 lg:px-10">
            
            <p
              className={`text-xs uppercase tracking-[0.3em] text-[#f8ffad]/80 sm:text-sm ${notoSerifJP.className}`}
            >
              Ready to begin?
            </p>

            <p
              className={`mx-auto mt-4 max-w-2xl text-2xl leading-tight sm:text-3xl md:text-4xl ${medievalSharp.className}`}
            >
              Ready to discover your purpose?
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
              Join us at Ikigai Farm for an experience that reconnects you
              with nature and your inner self. Book your visit or inquire
              about our packages today.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              
              <Link href='/Events'>
                <button className="w-full rounded-full bg-[#f8ffad] px-6 py-3 text-sm font-semibold text-[#012d0b] transition duration-300 hover:scale-105 sm:w-auto">
                  Event Packages
                </button>
              </Link>

              <Link href='/Contact'>
                <button className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 sm:w-auto">
                  Book Now!
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default page
