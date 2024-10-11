export default function Fifth() {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-white p-6 rounded-lg lg:mx-[120px]">
        <div className="text-center lg:text-left lg:flex lg:flex-row-reverse lg:justify-center lg:items-center">
          <div className="lg:mt-12">
            <h4 className="hidden text-[20px] text-red-500 font-roboto uppercase lg:flex lg:text-[17px] xxl:text-[20px]">
              Testimonio
            </h4>
            <h2 className="text-[24px] font-bold font-poppins text-gray-900 mt-2 md:text-[32px] lg:text-[30px] xxl:text-[50px]">
              Descubre la forma más fácil de disfrutar tus platos
              favoritos, sin complicaciones ni esperas.
            </h2>

            <button className="mt-[14px] bg-[#FF441F] text-white rounded-full transition w-[132px] h-[37px] text-[15px] font-roboto font-bold md:text-[20px] md:w-[175px] md:h-[50px] xxl:w-[235px] xxl:h-[65px] xxl:text-[26px] xxl:mt-[10px]">
              Únete ahora
            </button>
          </div>
          
          <div className="flex-none mt-[65px] lg:mb-0 lg:mr-8 flex justify-center">
            <img
            src="/assets/chef.svg"
            alt="Chef"hh
            className="object-cover w-[190px] h-[280px] md:w-[350px] md:h-[548px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
