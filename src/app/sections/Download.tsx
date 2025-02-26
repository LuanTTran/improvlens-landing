import Image from 'next/image';
import Link from 'next/link';

export default function Download() {
  return (
    <section id="download" className="container-section">
      <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="gradient-text">Event Photography</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Download ImprovLens today and start capturing, sharing, and preserving your special moments.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="cta-button group">
              <div className="mr-3">
                <Image 
                  src="/apple-logo.svg" 
                  alt="Apple App Store" 
                  width={30} 
                  height={30} 
                />
              </div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </Link>
            
            <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="cta-button bg-white/10 hover:bg-white/20 group">
              <div className="mr-3">
                <Image 
                  src="/google-play.svg" 
                  alt="Google Play Store" 
                  width={30} 
                  height={30} 
                />
              </div>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
