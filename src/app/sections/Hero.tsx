import Image from 'next/image';
import Stars from '@/components/Stars';

export default function Hero() {
  return (
    <section className="container-section pt-32 md:pt-40 pb-16 relative overflow-hidden">
      <Stars />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your <span className="gradient-text">Event Photography</span> Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Seamlessly capture, share, and enjoy every moment of your special events with ImprovLens.
          </p>
          <div className="flex flex-wrap gap-4">
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-64 md:w-80 h-auto">
            <div className="absolute inset-0 -z-10 bg-gradient-radial from-orange-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute inset-0 -z-10 animate-pulse-slow bg-gradient-radial from-orange-400/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -inset-4 -z-10 bg-gradient-conic from-indigo-900/30 via-blue-900/20 to-purple-800/30 rounded-full blur-2xl opacity-70"></div>
            <Image
              src="/hero.png"
              alt="ImprovLens App"
              width={500}
              height={500}
              quality={90}
              priority
              className="drop-shadow-xl relative z-10 mix-blend-lighten"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-orange-500/30 rounded-full blur-xl animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
