export default function QrCardDemo (){ return(
    <>
        <div className="bg-white rounded-xl shadow-lg p-4 w-64 relative">
            {/* Icono de cerrar */}
            <button className="absolute top-3 right-3 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
    
            {/* Título */}
            <h2 className="text-center text-xl font-bold mb-4">Mesa 1</h2> {/* Código QR */}
            <div className="flex justify-center mb-4">
                <div className="bg-black p-4 rounded-lg">
                    <div className="w-16 h-16 bg-white grid grid-cols-3 gap-1 p-1">
                        {/* Parte del diseño del código QR (esto es solo un ejemplo) */}
                        <div className="bg-black col-span-1 row-span-1"></div>
                        <div className="bg-black col-start-3 row-span-1"></div>
                        <div className="bg-black col-start-1 row-span-3"></div>
                        <div className="bg-black col-start-3 row-span-3"></div>
                        <div className="bg-black col-start-2 row-span-2"></div>
                    </div>
                </div>
            </div>
    
            {/* Botones */}
            <div className="flex justify-around mt-4">
                {/* Botón de descargar */}
                <button className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md text-orange-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 16l-4-4h3V4h2v8h3l-4 4zm6-1v5H6v-5H4v5a2 2 0 002 2h12a2 2 0 002-2v-5h-2z" />
                    </svg>
                </button>
    
                {/* Botón de alternar */}
                <button className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md text-orange-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19 13h2v-2h-2v2zM3 13h2v-2H3v2zm10 8h-2v2h2v-2zm0-20h-2v2h2V1zM5.66 5.66L4.24 4.24 2.83 5.66 4.24 7.07 5.66 5.66zm12.02 12.02l1.41-1.41-1.41-1.41-1.41 1.41 1.41 1.41zM18.34 5.66l1.41 1.41L20.17 5.66 18.76 4.24 18.34 5.66zM5.66 18.34L4.24 19.76l1.41 1.41 1.41-1.41-1.41-1.41z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        </> 
    )
         
}