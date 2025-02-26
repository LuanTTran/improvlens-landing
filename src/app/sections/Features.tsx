import GlowingCard from '../components/GlowingCard';

const features = [
  {
    title: "Seamless Event Photo Management",
    description: "Create events in seconds and easily manage all photos in one place."
  },
  {
    title: "User-Friendly Guest Participation",
    description: "Guests can join with a simple code and contribute photos instantly."
  },
  {
    title: "Powerful Host Control",
    description: "Full control over your event photos with curation and approval features."
  },
  {
    title: "Convenient Photo Sharing and Access",
    description: "Share photos instantly with all guests or download the entire collection."
  },
  {
    title: "Secure and Private Experience",
    description: "Your photos stay private and secure, visible only to event participants."
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
      
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <GlowingCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageIndex={index}
          />
        ))}
      </div>
    </section>
  );
}
