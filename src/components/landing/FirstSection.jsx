export default function First() {
  return (
    <div className="bg-[#FFFFFF] lg:bg-[#FFF1ED]"> {/* Contenedor exterior que extiende el fondo */}
      <div className="flex flex-col">
        
        {/* Left Side: Text and Button */}
        <div className="text-center">
          <h1 className="text-[32px]  font-bold text-black font-roboto md:text-[50px]">
            Ordena fácilmente, <br /> disfruta rápidamente
          </h1>
          <p className="text-gray-600 text-[16px] font-roboto mt-[16px] mb-[16px] md:text-[20px]">
            Ordena lo que te gusta en pocos pasos y disfruta de <br/>tu comida sin esperar.
          </p>
          <button className="bg-[#FF441F] hover:bg-orange-600 text-white py-2 px-4 rounded-full font-bold font-poppins text-[16px]">
            ¡Solicita una demo!
          </button>
          <div className="hidden items-center ">
            <div className="flex -space-x-2 md:mr-10 sm:mr-0">
              <img
                src="/assets/pp1.svg"
                alt="User1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/assets/pp2.svg"
                alt="User2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/assets/pp3.svg"
                alt="User3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <div className="text-sm text-gray-600 flex-col">
              <span className="font-semibold">Nuestros usuarios felices</span>
              <span>⭐ 4.8 (450+ reviews)</span>
            </div>
          </div>
        </div>
  
        {/* Right Side: Chef Image */}
        <div className="mt-[40px] md:ml-[100px]">
          <img
            src="/assets/first.svg" // Cambia esta ruta con tu imagen
            alt="Chef"
            className="rounded-lg md:mt-10"
          />
        </div>
      
      </div>
    </div>
  );
  
}
