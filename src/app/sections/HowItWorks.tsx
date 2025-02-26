import Image from 'next/image';

const steps = [
  {
    title: "Create an Event",
    description: "Set up your event in seconds with a name, date, and optional password.",
    icon: "/icons/create-icon.svg",
    number: "01"
  },
  {
    title: "Invite Guests",
    description: "Share your unique event code with guests through any messaging platform.",
    icon: "/icons/invite-icon.svg",
    number: "02"
  },
  {
    title: "Capture Moments",
    description: "Everyone captures photos that are instantly uploaded to the shared collection.",
    icon: "/icons/capture-icon.svg",
    number: "03"
  },
  {
    title: "Curate & Share",
    description: "Review the collection, approve photos, and share them with all participants.",
    icon: "/icons/share-icon.svg",
    number: "04"
  },
  {
    title: "Keep the Memories",
    description: "Download and save all photos from your event to preserve your memories.",
    icon: "/icons/download-icon.svg",
    number: "05"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container-section bg-gradient-to-b from-transparent to-[#1a1a3a]/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How <span className="gradient-text">It Works</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A simple process designed to make photo sharing seamless for everyone.
        </p>
      </div>

      <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="relative flex flex-col items-center text-center"
          >
            <div className="mb-6 relative">
              <div className="absolute -inset-3 bg-purple-600/20 rounded-full blur-xl"></div>
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#1a1a3a] border border-purple-600/50 flex items-center justify-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={32}
                  height={32}
                />
              </div>
              <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-purple-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {index + 1}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 w-8 h-1 border-t-2 border-dashed border-purple-600/30"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
