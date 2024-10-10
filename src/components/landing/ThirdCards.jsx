export default function TestimonialCard ({ review, name })  {
    return (
      <div className="bg-[#FFF1EE] p-6 shadow-md  w-[348px] h-[348px] rounded-[10px]">
        {/* Cita */}
        <div className="text-orange-500 text-5xl leading-none mb-4">“</div>
        
        {/* Texto de la reseña */}
        <p className="text-gray-700 mb-11 mt-11 text-[20px] font-robot">
          {review}
        </p>
        
        {/* Estrellas */}
        <div className="flex items-center mb-6">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
              className="w-9 h-9 text-yellow-400"
            >
              <path d="M12 2.25l2.974 6.016 6.626.964-4.8 4.677 1.134 6.612L12 16.894l-5.934 3.127 1.134-6.612-4.8-4.677 6.626-.964L12 2.25z" />
            </svg>
          ))}
        </div>
  
        {/* Nombre de la persona */}
        <p className="text-gray-900 font-semibold text-[20px] font-roboto">-{name}</p>
      </div>
    );
  };
  