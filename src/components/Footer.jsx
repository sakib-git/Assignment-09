import { Facebook, Instagram, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
  
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-white transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>

 

     
        <div className="flex space-x-5">
          <a href="#" className="hover:text-blue-500 transition" aria-label="Facebook">
            <Facebook  />
          </a>
          <a href="#" className="hover:text-sky-400 transition" aria-label="Twitter">
            <Twitter />
          </a>
          <a href="#" className="hover:text-pink-500 transition" aria-label="Instagram">
              <Instagram />
          </a>
        </div>
      </div>
         
        <p className="text-sm mb-4 text-center pt-5">
          © 2025 Toy Market. All rights reserved.
        </p>
    </footer>
  );
};

export default Footer;
