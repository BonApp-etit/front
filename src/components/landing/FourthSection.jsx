import TarjetasTerceras from './ThirdCards'
const infoComments = [
    {
        name:'Jessica',
        review:'Esta aplicación ha cambiado la forma en que pido comida. Es tan fácil de usar y el proceso es facil.'
    },
    {
        name:'Mario',
        review:'Me encanta lo simple que es pedir desde mi restaurante favorito. 10/10'
    },
    {
        name:'Laura',
        review:'La experiencia de pedir comida nunca ha sido tan sencilla. La interfaz es amigable'     
    }

]
export default function fourth (){
    return(
        <section className="bg-white mt-[40px]">
            <div className="text-center">
                <h2 className="text-[24px] font-bold text-black font-poppins mb-[34px]">
                ¿Que dicen nuestros <br /> clientes de nosotros?
                </h2>
            </div>

            {/* Sección de Tarjetas */}
            <div className="">
                {infoComments.map((info, index) => (
                    <TarjetasTerceras
                    key={index}
                    review={info.review}
                    name={info.name}
                    />
                ))}
            </div>
               
        </section>
    );
}