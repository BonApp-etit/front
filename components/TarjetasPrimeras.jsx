const TarjetasPrimeras = ({ texto, src }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#FFF1ED] border rounded-lg shadow-lg">
      <img src={src} alt="Icon" className="w-[260px] h-[260px]" />
      <div className="mt-4 text-lg text-red-500 font-semibold">
        {texto}
      </div>
    </div>
  );
};

export default TarjetasPrimeras;
