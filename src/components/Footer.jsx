import React from 'react';

const Footer = () => {
  // SVG icons as components
  const FacebookIcon = ({ size = 16, className = "" }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 320 512" 
      className={`fill-current ${className}`}
      width={size}
      height={size}
      aria-label="Facebook icon"
    >
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
    </svg>
  );

  const InstagramIcon = ({ size = 16, className = "" }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512" 
      className={`fill-current ${className}`}
      width={size}
      height={size}
      aria-label="Instagram icon"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    </svg>
  );

  // Safe image source handling
  const logoImgSrc = "/images/action car logo.png";
  const awardImgSrc = "/images/Awardhome.png";

  return (
    <footer className="relative w-full">
      {/* Wave curve top border */}
      <div className="w-full h-12 sm:h-14 md:h-16 bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
          <path fill="#1393c4" d="M0,0 C240,100 480,100 720,50 C960,0 1200,0 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
      
      {/* Footer content with sky blue and white theme */}
      <div className="w-full py-6 sm:py-8 md:py-10 text-white" style={{backgroundColor: '#1393c4'}}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {/* Contact Information */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 border-b-2 border-white pb-2">Contact Information</h3>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">Action Car Detailing</p>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">1380 Sargent avenue,</p>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">Winnipeg, MB, R3E 0G5</p>
            </div>
            
            {/* Phone & Email */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 border-b-2 border-white pb-2">Get In Touch</h3>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base"><span className="font-bold">Phone:</span> (204) 775-0005</p>
              <p className="mb-2 sm:mb-4 text-sm sm:text-base"><span className="font-bold">Email:</span> info@actioncardetailing.ca</p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4">
                <a 
                  href="https://www.facebook.com/actioncardetailingwinnipeg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon size={16} className="sm:text-lg md:text-xl" />
                </a>
                <a 
                  href="https://www.instagram.com/actioncardetailingwinnipeg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-pink-600 flex items-center justify-center hover:bg-pink-50 hover:text-pink-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon size={16} className="sm:text-lg md:text-xl" />
                </a>
              </div>
              
              {/* Follow us text */}
              <p className="text-xs sm:text-sm mt-2 opacity-90">Follow us for updates and showcases!</p>
            </div>
            
            {/* Business Hours */}
            <div className="mb-6 sm:mb-0">
              <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 border-b-2 border-white pb-2">Business Hours</h3>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">Monday – Friday | 8 AM – 6 PM</p>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">Saturday | 8AM – 3 PM</p>
              <p className="mb-1 sm:mb-2 text-sm sm:text-base">Sunday | Closed</p>
            </div>
            
            {/* Logo and Award section with white background */}
            <div className="flex flex-col items-center justify-center mt-2 sm:mt-0 space-y-4">
              {/* Logo */}
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <img 
                  src={logoImgSrc} 
                  alt="Action Car Detailing" 
                  className="w-36 sm:w-40 md:w-48" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-gray-600 text-center p-4">Logo</div>';
                  }}
                />
              </div>
              
              {/* Award Badge */}
              <div className="bg-white rounded-xl p-3 shadow-lg">
                <img 
                  src={awardImgSrc} 
                  alt="Award Recognition" 
                  className="w-20 sm:w-24 md:w-28" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-gray-600 text-center">Award</div>';
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t-2 border-white border-opacity-30 text-center">
            <p className="text-sm sm:text-base">© {new Date().getFullYear()} Action Car Detailing. All Rights Reserved.</p>
            <p className="text-xs sm:text-sm mt-1 sm:mt-2 opacity-90">Website Design by Building india Digital</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;