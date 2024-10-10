const TarjetasPrimeras = ({ texto, src }) => {
  return (
    <div className="p-8 bg-[#FFFCFB] border rounded-[30px] shadow-lg w-[340px] h-[380px] flex justify-center flex-col items-center">
      <img src={src} alt="Icon" className="w-[260px] h-[260px]" />
      <div className="mt-4 text-lg text-red-500 font-roboto">
        {texto}
      </div>
    </div>
  );
};

export default TarjetasPrimeras;
