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
            <div className="absolute inset-0 -z-10 bg-gradient-radial from-orange-500/30 via-indigo-500/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute inset-0 -z-10 animate-pulse-slow bg-gradient-radial from-orange-400/30 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -inset-4 -z-10 bg-gradient-conic from-indigo-900/50 via-blue-900/40 to-purple-800/50 rounded-full blur-2xl opacity-90"></div>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-indigo-900/40 to-transparent p-3 backdrop-blur-sm border border-indigo-500/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/60 via-transparent to-transparent rounded-[2.25rem] z-0"></div>
              <Image
                src="/hero1.png"
                alt="ImprovLens App"
                width={500}
                height={500}
                quality={95}
                priority
                className="drop-shadow-xl relative z-10 mix-blend-screen rounded-[2.25rem]"
                style={{ filter: 'brightness(1.15) contrast(1.1)' }}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-orange-500/40 rounded-full blur-xl animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
