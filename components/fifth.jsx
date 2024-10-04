export default function Fifth() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-6 rounded-lg shadow-lg">
        {/* Columna de la imagen */}
        <div className="flex-none mb-6 lg:mb-0 lg:mr-8">
          <img
            src="/assets/chef.svg"
            alt="Chef"
            className="object-cover"
          />
        </div>

        {/* Columna de texto */}
        <div className="text-center lg:text-left">
          <h4 className="text-[20px] text-red-500 font-semibold uppercase">
            Testimonio
          </h4>
          <h2 className="text-[50px] font-bold text-gray-900 mt-2">
            Descubre la forma más <br /> fácil de disfrutar tus <br /> platos
            favoritos, sin complicaciones ni <br /> esperas.
          </h2>

          <button className="mt-6 bg-[#FF441F] text-white py-3 px-6 rounded-full transition w-[235px] h-[65px] text-[27px]">
            Únete ahora
          </button>
        </div>
      </div>
    </>
  );
}
