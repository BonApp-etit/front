import NavBar from "@/components/NavBar/NavBar";
import MainLayout from "@/components/common_components/MainLayout";
import Order from "@/components/kitchen_order/Order";
import StatusOrderCard from "@/components/kitchen_order/StatusOrderCard";
import { useEffect, useState } from "react";

export default function KitchenOrders() {
  const [ordersData, setOrdersData] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/kitchenOrders");
        if (!response.ok) throw new Error("Error al obtener los datos");
        const data = await response.json();
        setOrdersData(data);
      } catch (error) {
        console.error("Error al cargar los datos", error);
      }
    };
    fetchOrders();
  }, []);
  return (
    <main>
      <NavBar></NavBar>
      <MainLayout>
        <div className="flex flex-col gap-4 lg:flex-row">
          {ordersData.map((statusData, index) => (
            <StatusOrderCard key={index} status={statusData.status}>
              {statusData.orders.map((order, idx) => (
                <div className="mb-3" key={idx}>
                  <Order
                    dishName={order.dishName}
                    table={order.table}
                    time={order.time}
                    baseIgredients={order.baseIngredients}
                    extraIngredients={order.extraIngredients}
                  />
                </div>
              ))}
            </StatusOrderCard>
          ))}
        </div>
      </MainLayout>
    </main>
  );
}
