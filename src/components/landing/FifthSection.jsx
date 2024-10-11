export default function Fifth() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-6 rounded-lg ">
        <div className="text-center lg:text-left">
          <h4 className="hidden text-[20px] text-red-500 font-roboto uppercase">
            Testimonio
          </h4>
          <h2 className="text-[24px] font-bold font-poppins text-gray-900 mt-2 md:text-[32px]">
            Descubre la forma más <br /> fácil de disfrutar tus <br /> platos
            favoritos, sin complicaciones ni <br /> esperas.
          </h2>

          <button className="mt-[14px] bg-[#FF441F] text-white rounded-full transition w-[132px] h-[37px] text-[15px] font-roboto font-bold md:text-[20px] md:w-[175px] md:h-[50px]">
            Únete ahora
          </button>
          <div className="flex-none mt-[65px] lg:mb-0 lg:mr-8 flex justify-center">
          <img
            src="/assets/chef.svg"
            alt="Chef"hh
            className="object-cover w-[190px] h-[280px] md:w-[350px] md:h-[548px]"
          />
        </div>
        </div>
      </div>
    </>
  );
}
