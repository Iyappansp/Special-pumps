'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FloatingContacts() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* WhatsApp Floating Button - Bottom Left */}
      <Link
        href="https://wa.me/919843018058?text=Hi%20Special%20Pumps!%20I%20have%20a%20query."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fab-whatsapp"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#25D366"/>
          <path fill="#fff" d="M16.002 3C8.82 3 3 8.82 3 16.002c0 2.278.593 4.506 1.718 6.496L3 29l6.618-1.683c1.93 1.062 4.124 1.683 6.384 1.683 7.182 0 13.002-5.82 13.002-13.002S23.184 3 16.002 3zm0 23.804c-1.95 0-3.86-.525-5.538-1.518l-.397-.236-4.118 1.048 1.048-4.118-.236-.397c-1.062-1.678-1.518-3.588-1.518-5.538 0-5.94 4.862-10.802 10.802-10.802s10.802 4.862 10.802 10.802-4.862 10.802-10.802 10.802z"/>
          <path fill="#fff" d="M23.204 18.678c-.315-.157-1.863-.918-2.152-1.024-.289-.105-.499-.157-.709.157-.21.315-.814 1.024-.998 1.234-.184.21-.368.236-.683.079-.315-.158-1.33-.49-2.533-1.563-.937-.835-1.57-1.866-1.754-2.181-.184-.315-.02-.485.138-.642.142-.142.315-.368.473-.552.158-.184.21-.315.315-.525.105-.21.053-.394-.026-.552-.079-.158-.709-1.709-.972-2.34-.256-.614-.516-.53-.709-.54-.184-.01-.394-.01-.604-.01-.21 0-.552.079-.841.394-.289.315-1.103 1.077-1.103 2.628s1.129 3.048 1.287 3.258c.158.21 2.23 3.404 5.398 4.773.754.326 1.343.52 1.801.666.757.24 1.446.206 1.991.125.607-.091 1.863-.762 2.126-1.498.263-.736.263-1.367.184-1.498-.079-.131-.289-.21-.604-.368z"/>
        </svg>
      </Link>

      {/* Phone Floating Button - Bottom Right */}
      <a
        href="tel:+919843018058"
        aria-label="Call us"
        className="fab-phone"
      >
        <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.41 22 2 13.59 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.2 2.47.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z"/>
        </svg>
      </a>

      {/* Scroll to Top - Right Side Middle Area */}
      {/* {hasScrolled && (
        <button 
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fab-scroll-top"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 20h-2V8l-5.5 5.5-1.42-1.42L12 4.16l7.92 7.92-1.42 1.42L13 8v12z"/>
          </svg>
        </button>
      )} */}
    </>
  );
}
