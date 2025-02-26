import Image from 'next/image';

const features = [
  {
    title: "Seamless Event Photo Management",
    description: "Create events in seconds and easily manage all photos in one place.",
    icon: "/icons/event-icon.svg"
  },
  {
    title: "User-Friendly Guest Participation",
    description: "Guests can join with a simple code and contribute photos instantly.",
    icon: "/icons/guest-icon.svg"
  },
  {
    title: "Powerful Host Control",
    description: "Full control over your event photos with curation and approval features.",
    icon: "/icons/control-icon.svg"
  },
  {
    title: "Convenient Photo Sharing and Access",
    description: "Share photos instantly with all guests or download the entire collection.",
    icon: "/icons/share-icon.svg"
  },
  {
    title: "Secure and Private Experience",
    description: "Your photos stay private and secure, visible only to event participants.",
    icon: "/icons/security-icon.svg"
  }
];

export default function Features() {
  return (
    <section id="features" className="container-section">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Powerful <span className="gradient-text">Features</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Everything you need to make your event photography experience seamless and memorable.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="mb-4 bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
