export default function First() {
  return (
    <div className="bg-[#FFF1ED]"> {/* Contenedor exterior que extiende el fondo */}
      <div className="flex flex-col justify-between md:flex-row items-center p-11 md:p-12   space-y-6 md:space-y-0 font-sans mx-[120px]">
        
        {/* Left Side: Text and Button */}
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          <h1 className="text-[64px] font-bold text-gray-800">
            Ordena fácilmente, <br /> disfruta rápidamente
          </h1>
          <p className="text-gray-600 text-[24px]">
            Ordena lo que te gusta en pocos pasos y disfruta de <br />tu comida sin esperar.
          </p>
          <button className="bg-[#FF441F] hover:bg-orange-600 text-white py-2 px-4 rounded-full">
            ¡Solicita una demo!
          </button>
          <div className="flex items-center space-x-2 pt-4">
            <div className="flex -space-x-2">
              <img
                src=""
                alt="User1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://via.placeholder.com/32"
                alt="User2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://via.placeholder.com/32"
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
        <div className="md: mt-6 md:mt-0 ">
          <img
            src="/assets/first.svg" // Cambia esta ruta con tu imagen
            alt="Chef"
            className="rounded-lg"
          />
        </div>
      
      </div>
    </div>
  );
  
}
