import NavBar from "@/components/NavBar/NavBar";
import MainLayout from "@/components/common_components/MainLayout";

import Order from "@/components/kitchen_order/Order";

import KitchenOrderCard from "@/components/kitchen_order/KitchenOrderCard";
export default function kitchenOrders() {
  return (
    <main>
      <NavBar></NavBar>
      <MainLayout>
        <section className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:gap-4">
          <section>
            <KitchenOrderCard bgColor="yellow" time="15">
              <div className="flex flex-col gap-6">
                <Order></Order>
                <Order></Order>
              </div>
            </KitchenOrderCard>

            <KitchenOrderCard time="5">
              <div className="flex flex-col gap-6">
                <Order></Order>
                <Order></Order>
              </div>
            </KitchenOrderCard>
          </section>
          <section>
            <KitchenOrderCard bgColor="red" time="20">
              <div className="flex flex-col gap-6">
                <Order></Order>
                <Order></Order>
              </div>
            </KitchenOrderCard>

            <KitchenOrderCard time="5">
              <div className="flex flex-col gap-6">
                <Order></Order>
                <Order></Order>
              </div>
            </KitchenOrderCard>
          </section>

          <section>
            <KitchenOrderCard time="5">
              <div className="flex flex-col gap-6">
                <Order></Order>
                <Order></Order>
              </div>
            </KitchenOrderCard>

            <KitchenOrderCard time="5">
              <div className="flex flex-col gap-6">
                <Order></Order>
                <Order></Order>
              </div>
            </KitchenOrderCard>
          </section>
        </section>
      </MainLayout>
    </main>
  );
}
