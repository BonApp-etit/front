import NavBar from '@/components/NavBar/NavBar'
import React, { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import LayoutOrder from '@/components/UserOrder/LayoutOrder'
import Card from '@/components/restaurant_configuration/Card'
import Input from '@/components/common_components/Input'

export default function PaymentMethod() {
  return (
    <main>
      <LayoutOrder
        swiperContainer="false"
        title="Metodo de pago "
        subtitle="Escoge tu metodo de pago."
        linkForward={'/review'}
        linkBackward={'/choose_products'}
      >
        <div className="flex flex-col gap-4">
          <div className="gap flex">
            <Card
              showIcon={true}
              titleInfo="Pago con tarjeta"
              info="Agregar tarjeta"
              iconSrc="/assets/PaymentMethod/cardOutline.svg"
            >
              <div className="px-1">
                <Input
                  label="Nombre del titular"
                  placeholder="Nombre del titular"
                  variant="outlined"
                ></Input>
                <div className="flex gap-20">
                  <Input
                    label="Expiracion"
                    placeholder="MM / YY"
                    variant="outlined"
                  ></Input>
                  <Input
                    label="CVV"
                    placeholder="***"
                    variant="outlined"
                  ></Input>
                </div>
                <Input
                  label="No.Tarjeta"
                  placeholder="0000 0000 0000 0000"
                  variant="outlined"
                ></Input>
              </div>
            </Card>
          </div>
          <div className="gap flex">
            <Card
              showIcon={true}
              titleInfo="Pago con efectivo "
              info="Pagar con efectivo"
              iconSrc="/assets/PaymentMethod/cashOutline.svg"
              isCashCard={true}
            />
          </div>
        </div>
      </LayoutOrder>
    </main>
  )
}
