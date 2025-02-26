import Image from 'next/image';
import Link from 'next/link';
import GetTheAppButton from '@/app/components/GetTheAppButton';
import appIcon from '@/asset/icons/appicon.svg';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1a]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src={appIcon}
            alt="ImprovLens Logo" 
            width={40} 
            height={40} 
            className="mr-2 rounded-full"
          />
          <span className="text-xl font-bold">ImprovLens</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>
        
        <GetTheAppButton href="#download" />
      </div>
    </header>
  );
} 