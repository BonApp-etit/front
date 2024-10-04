export default function Footer() {
    return (
      <footer className="bg-[#FF441F] text-white py-4 h-[50px] flex">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          {/* Texto de Copyright */}
          <p className="text-[16px]">
            Copyright © 2024 Bonappetit. All rights reserved
          </p>
          
          {/* Links */}
          <div className="flex space-x-4 mt-2 sm:mt-0 text-[16px]">
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline">Term of Use</a>
            <a href="#" className="text-sm hover:underline">Partner</a>
          </div>
        </div>
      </footer>
    );
  }