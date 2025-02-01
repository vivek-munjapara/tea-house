'use client'
import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa'; // Make sure to install react-icons

const ScrollToTop = () => {
   const [isVisible, setIsVisible] = useState(false);

   // Show button when page is scrolled up to given distance
   const toggleVisibility = () => {
      if (window.scrollY > 300) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   };

   // Set the top cordinate to 0
   // make scrolling smooth
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   };

   useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
         window.removeEventListener("scroll", toggleVisibility);
      };
   }, []);

   return (
      <>
         {isVisible &&
            <div
               onClick={scrollToTop}
               className="scroll-to-top"
            >
               <FaAngleUp className="text-white" size={20} />
            </div>
         }
      </>
   );
};

export default ScrollToTop;
