export default function TestimonialCard({ review, name }) {
  return (
    <section className="relative">
      {/* <div className="absolute right-0 top-0 h-[38px] w-[43px] rounded-bl-[21px] rounded-tr-[19px] bg-cs500 md:h-[75px] md:w-[87px] md:rounded-bl-[42px] md:rounded-tr-[37]"></div> */}
      <div className="absolute left-0 top-0 font-sans text-[190px] leading-[100px] text-cs500">
        “
      </div>
      <div className="flex max-w-sm justify-center rounded-lg bg-[#FFF1EE] p-3 shadow-md">
        {/* Cita */}
        <div>
          {/* Texto de la reseña */}
          <p className="font-robot mb-11 mt-11 text-sm font-normal text-black">
            {review}
          </p>

          {/* Estrellas */}
          <div className="mb-8 flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
                className="h-9 w-9 text-yellow-400"
              >
                <path d="M12 2.25l2.974 6.016 6.626.964-4.8 4.677 1.134 6.612L12 16.894l-5.934 3.127 1.134-6.612-4.8-4.677 6.626-.964L12 2.25z" />
              </svg>
            ))}
          </div>

          {/* Nombre de la persona */}
          <p className="font-roboto text-[20px] font-semibold text-gray-900">
            -{name}
          </p>
        </div>
      </div>
    </section>
  );
}
