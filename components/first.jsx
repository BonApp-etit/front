export default function first(){
    return(
        <div className="flex flex-col md:flex-row items-center bg-pink-50 p-6 md:p-12 rounded-lg shadow-lg">
        {/* Left Side: Text and Button */}
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">
            Ordena fácilmente, <br /> disfruta rápidamente
          </h1>
          {/* Subtitle */}
          <p className="text-gray-600">
            Ordena lo que te gusta en pocos pasos y disfruta de tu comida sin esperar.
          </p>
          {/* Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full">
            ¡Solicita una demo!
          </button>
          {/* User Reviews */}
          <div className="flex items-center space-x-2 pt-4">
            <div className="flex -space-x-2">
              <img
                src="https://via.placeholder.com/32"
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
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="/chef-banner.png" // Cambia esta ruta según dónde esté tu imagen
            alt="Chef"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    )
    
}