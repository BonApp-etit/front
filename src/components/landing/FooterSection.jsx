export default function Footer() {
    return (
      <footer className="bg-[#FFF1EE] text-white h-[24px] mt-[27px] flex flex-row justify-between items-center p-1">
        
          {/* Texto de Copyright */}
          <div className="text-[8px] font-roboto text-[#FF441F]">
            Copyright © 2024 Bonappetit. All rights reserved
          </div>
          {/* Links */}
            <a href="#" className="font-roboto text-[#FF441F] hover:underline text-[8px]">Privacy Policy</a>
            <a href="#" className="font-roboto text-[#FF441F] hover:underline text-[8px]">Term of Use</a>
            <a href="#" className="font-roboto text-[#FF441F] hover:underline text-[8px]">Partner</a>
      </footer>
    );
  }