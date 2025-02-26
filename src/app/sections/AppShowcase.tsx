import Image from 'next/image';

const appFeatures = [
  {
    title: "Intuitive Event Creation",
    description: "Create new events with just a few taps and customize settings to your preference.",
    align: "left"
  },
  {
    title: "Real-time Photo Sharing",
    description: "Photos appear instantly in the shared gallery as guests capture special moments.",
    align: "right"
  },
  {
    title: "Smart Photo Management",
    description: "Easily organize, approve, and highlight your favorite photos from the event.",
    align: "left"
  }
];

export default function AppShowcase() {
  return (
    <section id="app-showcase" className="container-section overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The <span className="gradient-text">App Experience</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Designed for simplicity and delight, ImprovLens makes photo sharing a joy.
        </p>
      </div>

      <div className="relative">
        {/* Center phone showcase */}
        <div className="relative z-10 flex justify-center mb-16">
          <div className="relative w-64 md:w-72">
            <div className="absolute -inset-10 bg-gradient-radial from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
            <Image
              src="/app-main-screen.png"
              alt="ImprovLens App Main Screen"
              width={360}
              height={720}
              quality={90}
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Feature descriptions */}
        <div className="space-y-24 mt-16">
          {appFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${feature.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="flex-1">
                <Image
                  src={`/app-screen-${index + 1}.png`}
                  alt={feature.title}
                  width={280}
                  height={560}
                  quality={85}
                  className="drop-shadow-xl mx-auto"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
