'use client';

import { ReactNode, useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Import the images directly
import Image1 from '@/asset/images/1.png';
import Image2 from '@/asset/images/2.png';
import Image3 from '@/asset/images/3.png';
import Image4 from '@/asset/images/4.png';
import Image5 from '@/asset/images/5.png';

// Define the image array
const cardImages = [Image1, Image2, Image3, Image4, Image5];

interface GlowingCardProps {
  title: string;
  description: string;
  icon: string;
  imageIndex?: number; // Optional index to specify image, will use random if not provided
}

export default function GlowingCard({ title, description, icon, imageIndex }: GlowingCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Determine which image to use (random if not specified)
  const actualImageIndex = imageIndex !== undefined 
    ? imageIndex % cardImages.length 
    : Math.floor(Math.random() * cardImages.length);
    
  const selectedImage = cardImages[actualImageIndex];

  // Handle 3D rotation effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered || !cardRef.current) return;
      
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate percentages
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      // Calculate rotations (-20 to 20 degrees)
      const rotateY = (xPercent * 40) - 20;
      const rotateX = ((1 - yPercent) * 40) - 20;
      
      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg)`;
    };

    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  // Split title into two parts if it contains 'and'
  const titleParts = title.includes('and') 
    ? title.split('and').map(part => part.trim()) 
    : [title];

  return (
    <div 
      ref={containerRef}
      className="container relative w-[200px] h-[280px] transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        // Reset transform when mouse leaves
        if (cardRef.current) {
          cardRef.current.style.transform = '';
        }
      }}
    >
      <div className="canvas perspective-[800px] inset-0 z-[200] absolute grid grid-cols-5 grid-rows-5">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className={`tr-${i + 1} tracker`} />
        ))}
      </div>
      
      <div 
        ref={cardRef}
        id="card"
        className={`absolute inset-0 z-0 flex justify-center items-center rounded-[20px] transition-all duration-300 bg-gradient-to-br from-[#1a1a1a] to-[#262626] border-2 border-white/10 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(0,0,0,0.2)] ${isHovered ? 'brightness-110' : ''}`}
      >
        {/* Card background glow effect */}
        <div className={`before:content-[''] before:absolute before:inset-0 before:w-[150%] before:h-[150%] before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-radial-gradient before:transition-opacity before:duration-300 before:blur-[20px] ${isHovered ? 'before:opacity-80' : 'before:opacity-0'}`} />
        
        <div className="card-content relative w-full h-full p-6 flex flex-col items-center">
          {/* Enlarged, rounded image container */}
          <div className="mb-5 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center relative">
            <Image
              src={selectedImage}
              alt={title}
              width={80}
              height={80}
              className="object-cover w-full h-full opacity-80"
            />
            <div className="absolute inset-0 bg-black/10 rounded-full"></div>
          </div>
          
          {/* Default title - shown when not hovered */}
          <div id="prompt" className={`relative z-20 transition-all duration-300 text-center ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            {titleParts.length > 1 ? (
              <>
                <p className="text-base font-semibold tracking-wider text-white/80">
                  {titleParts[0]}
                </p>
                <p className="text-base font-semibold tracking-wider text-white/80 mt-1">
                  and
                </p>
                <p className="text-base font-semibold tracking-wider text-white/80 mt-1">
                  {titleParts[1]}
                </p>
              </>
            ) : (
              <p className="text-base font-semibold tracking-wider text-white/80">
                {title}
              </p>
            )}
          </div>
          
          {/* Hovered title with gradient */}
          <div className={`title absolute top-[90px] left-0 right-0 text-center transition-all duration-300 ${isHovered ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}>
            {titleParts.length > 1 ? (
              <>
                <p className="text-lg font-bold tracking-wide pt-2 bg-gradient-to-r from-[#00ffaa] to-[#00a2ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,170,0.3)]">
                  {titleParts[0]}
                </p>
                <p className="text-lg font-bold tracking-wide pt-1 bg-gradient-to-r from-[#00ffaa] to-[#00a2ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,170,0.3)]">
                  and
                </p>
                <p className="text-lg font-bold tracking-wide pt-1 bg-gradient-to-r from-[#00ffaa] to-[#00a2ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,170,0.3)]">
                  {titleParts[1]}
                </p>
              </>
            ) : (
              <p className="text-lg font-bold tracking-wide pt-2 bg-gradient-to-r from-[#00ffaa] to-[#00a2ff] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,170,0.3)]">
                {title}
              </p>
            )}
          </div>
          
          <p className={`subtitle absolute left-4 right-4 bottom-6 text-center text-xs tracking-wider transition-all duration-300 ${isHovered ? 'text-white/90 translate-y-0' : 'text-white/60 translate-y-[15px]'}`}>
            {description}
          </p>
          
          <div className="glowing-elements absolute inset-0 pointer-events-none">
            <div className={`glow-1 absolute w-[100px] h-[100px] top-[-20px] left-[-20px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.3)_0%,rgba(0,255,170,0)_70%)] blur-[15px] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`glow-2 absolute w-[100px] h-[100px] top-1/2 right-[-30px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.3)_0%,rgba(0,255,170,0)_70%)] blur-[15px] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`glow-3 absolute w-[100px] h-[100px] bottom-[-20px] left-[30%] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.3)_0%,rgba(0,255,170,0)_70%)] blur-[15px] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          </div>
          
          <div className="card-particles">
            {Array.from({ length: 6 }).map((_, i) => (
              <span 
                key={i} 
                className={`absolute w-[3px] h-[3px] bg-[#00ffaa] rounded-full transition-opacity duration-300 ${isHovered ? 'animate-particleFloat' : 'opacity-0'}`}
                style={{
                  top: `${20 + i * 10}%`,
                  left: i % 2 === 0 ? `${20 + (i * 10)}%` : `${60 - (i * 5)}%`,
                  '--x': i % 2 === 0 ? '1' : '-1',
                  '--y': i < 3 ? '-1' : '1',
                } as React.CSSProperties}
              />
            ))}
          </div>
          
          <div className={`card-glare absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.05)_55%,rgba(255,255,255,0)_100%)] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          
          <div className="cyber-lines">
            <span className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(92,103,255,0.2)] to-transparent animate-lineGrow" />
            <span className="absolute top-[40%] right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(92,103,255,0.2)] to-transparent animate-lineGrow animation-delay-1000" />
            <span className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(92,103,255,0.2)] to-transparent animate-lineGrow animation-delay-2000" />
            <span className="absolute top-[80%] right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(92,103,255,0.2)] to-transparent animate-lineGrow animation-delay-1500" />
          </div>
          
          <div className="corner-elements">
            <span className={`absolute w-[15px] h-[15px] top-[10px] left-[10px] border-t-2 border-l-2 border-[rgba(92,103,255,0.3)] transition-all duration-300 ${isHovered ? 'border-[rgba(92,103,255,0.8)] shadow-[0_0_10px_rgba(92,103,255,0.5)]' : ''}`} />
            <span className={`absolute w-[15px] h-[15px] top-[10px] right-[10px] border-t-2 border-r-2 border-[rgba(92,103,255,0.3)] transition-all duration-300 ${isHovered ? 'border-[rgba(92,103,255,0.8)] shadow-[0_0_10px_rgba(92,103,255,0.5)]' : ''}`} />
            <span className={`absolute w-[15px] h-[15px] bottom-[10px] left-[10px] border-b-2 border-l-2 border-[rgba(92,103,255,0.3)] transition-all duration-300 ${isHovered ? 'border-[rgba(92,103,255,0.8)] shadow-[0_0_10px_rgba(92,103,255,0.5)]' : ''}`} />
            <span className={`absolute w-[15px] h-[15px] bottom-[10px] right-[10px] border-b-2 border-r-2 border-[rgba(92,103,255,0.3)] transition-all duration-300 ${isHovered ? 'border-[rgba(92,103,255,0.8)] shadow-[0_0_10px_rgba(92,103,255,0.5)]' : ''}`} />
          </div>
          
          <div className="scan-line absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(92,103,255,0.1)] to-transparent -translate-y-full animate-scanMove" />
        </div>
      </div>
    </div>
  );
} 