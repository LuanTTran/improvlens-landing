import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container-section pt-32 md:pt-40 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your <span className="gradient-text">Event Photography</span> Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Seamlessly capture, share, and enjoy every moment of your special events with ImprovLens.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#download" className="cta-button">
              <Image 
                src="/apple-logo.svg" 
                alt="Apple App Store" 
                width={24} 
                height={24} 
                className="mr-2" 
              />
              App Store
            </Link>
            <Link href="#download" className="cta-button bg-white/10 hover:bg-white/20">
              <Image 
                src="/google-play.svg" 
                alt="Google Play Store" 
                width={24} 
                height={24} 
                className="mr-2" 
              />
              Google Play
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-64 md:w-80 h-auto">
            <Image
              src="/hero-app-mockup.png"
              alt="ImprovLens App"
              width={320}
              height={650}
              quality={90}
              priority
              className="drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
