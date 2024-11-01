export default function QrCard() {
    return(
        <>
            <section className="bg-white w-[250px] h-[290px] shadow-xl flex items-center flex-col rounded-2xl relative">
                
                <h1 className="text-center text-[28px] font-semibold font-poppins mt-[14px] mb-[27px]">Mesa 1</h1>

                <img className='absolute right-5 top-5' src='/assets/qrbutton.svg'></img>

                <img  className='w-[100px] h-[100px] mb-[27px]' src="/assets/qr.svg ">
                </img>
                <div className="flex flex-row gap-[22px]">
                    <button className="shadow-xl p-[10px] rounded-[24px] w-[83px] h-[50px] flex items-center justify-center">
                       <img className='w-[30px] h-[35]' src="/assets/downloadqr.svg">
                       </img>
                    </button>
                    <button>
                    <button className="shadow-xl p-[10px] rounded-[24px] w-[83px] h-[50px] flex items-center justify-center">
                       <img className='w-[30px] h-[35]' src="/assets/downloadqr.svg">
                       </img>
                    </button>
                    </button>
                </div>  
            </section>   
        </>
    )
}