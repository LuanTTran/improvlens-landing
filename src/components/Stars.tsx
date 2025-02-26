'use client';
import { useEffect, useState } from 'react';
import styles from './Stars.module.css';

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
  type: 'white' | 'orange' | 'blue';
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  length: number;
  speed: number;
  delay: number;
}

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate random stars
    const starCount = window.innerWidth < 768 ? 70 : 150;
    const newStars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      // Determine star type with probabilities
      let type: 'white' | 'orange' | 'blue' = 'white';
      const typeRandom = Math.random();
      if (typeRandom > 0.85) {
        type = 'orange';
      } else if (typeRandom > 0.7) {
        type = 'blue';
      }
      
      newStars.push({
        id: i,
        size: Math.random() * 2.5 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.7 + 0.3,
        animationDuration: Math.random() * 3 + 2,
        type
      });
    }
    
    setStars(newStars);
    
    // Generate shooting stars
    const generateShootingStars = () => {
      const newShootingStars: ShootingStar[] = [];
      const shootingStarCount = window.innerWidth < 768 ? 2 : 4;
      
      for (let i = 0; i < shootingStarCount; i++) {
        newShootingStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 30,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 3 + 2,
          delay: Math.random() * 15
        });
      }
      
      setShootingStars(newShootingStars);
    };
    
    generateShootingStars();
    
    // Regenerate shooting stars periodically
    const interval = setInterval(() => {
      generateShootingStars();
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  const getStarClassName = (type: string) => {
    let className = styles.star;
    if (type === 'orange') className += ` ${styles.starOrange}`;
    if (type === 'blue') className += ` ${styles.starBlue}`;
    return className;
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={getStarClassName(star.type)}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
      
      {shootingStars.map((star) => (
        <div
          key={`shooting-${star.id}`}
          className={styles.shootingStar}
          style={{
            width: `${star.length}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.speed}s`,
            animationDelay: `${star.delay}s`,
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>
  );
} 