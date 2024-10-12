export default function First() {
  return (
    <section className="bg-[#FFFFFF] lg:bg-[#FFF1ED]
    "> {/* Contenedor exterior que extiende el fondo */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:ml-[120px] xxl:p-0">
        
        {/* Left Side: Text and Button */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-[32px]  font-bold text-black font-roboto md:text-[50px] lg:text-[32px] xxl:text-[64px]">
            Ordena fácilmente, disfruta rápidamente
          </h1>
          <h1 className="text-black text-[16px] font-roboto mt-[16px] mb-[16px] md:text-[20px] lg:text-[18px] xxl:text-[24px]">
            Ordena lo que te gusta en pocos pasos y disfruta de tu comida sin esperar.
          </h1>
          <button className="bg-[#FF441F] hover:bg-orange-600 text-white py-2 px-4 rounded-full font-bold font-poppins text-[16px] lg:text-[14px]  xxl:w-[225px] xxl:h-[60px] ">
            ¡Solicita una demo!
          </button>
          <div className="hidden items-center lg:flex lg:mt-4 xxl:mt-[30px]">
            <div className="flex flex-row -space-x-2">
              <img
                src="/assets/pp1.svg"
                alt="User1"
                className="xxl:w-[63px] xxl:h-[63px] lg:w-[44px] lg:h-[44px] rounded-full border-2 border-white"
              />
              <img
                src="/assets/pp2.svg"
                alt="User2"
                className="xxl:w-[63px] xxl:h-[63px] lg:w-[44px] lg:h-[44px] rounded-full border-2 border-white"
              />
              <img
                src="/assets/pp3.svg"
                alt="User3"
                className="xxl:w-[63px] xxl:h-[63px] lg:w-[44px] lg:h-[44px] rounded-full border-2 border-white"
              />
            </div>
            <div className="ml-[5px] text-sm text-gray-600 flex flex-col">
              <span className="font-bold font-roboto lg:text-[14px] xxl:text-[20px]">Nuestros usuarios felices</span>
              <span className="lg:text-[14px] xxl:text-[20px]">⭐ 4.8 (450+ reviews)</span>
            </div>
          </div>
        </div>
  
        {/* Right Side: Chef Image */}
        <div className="mt-[40px] md:ml-[100px] lg:ml-[0px] lg:mt-[0px]">
          <img
            src="/assets/first.svg" 
            alt="Chef"
            className="rounded-lg md:mt-10 lg:mt-0 lg:h-[440px] lg:w-[550px] "
          />
        </div>
      
      </div>
    </section>
  );
  
}
