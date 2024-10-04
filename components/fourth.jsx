import TarjetasTerceras from '../../front/components/TarjetasTerceras'
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
        <section className="bg-white py-12 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black">
                ¿Que dicen nuestros <br /> clientes de nosotros?
                </h2>
            </div>

            {/* Sección de Tarjetas */}
            <div className="mx-auto sm:mx-8 md:mx-16 lg:mx-[120px] flex flex-wrap justify-center gap-4">
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