import NavBar from "@/components/NavBar/NavBar";
import MainLayout from "@/components/common_components/MainLayout";
import LayoutCard from "@/components/common_components/LayoutCard";
import CardContent from "@/components/UserOrder/CardContent";
import ButtonContained from "@/components/common_components/ButtonContained";

export default function ChooseProducts(title, subtitle) {
  return (
    <main>
      <NavBar></NavBar>
      <MainLayout>
        <div class="inline-flex flex-col items-start justify-start gap-1">
          <h1 class="self-stretch font-poppins text-[28px] font-medium leading-7 text-[#191c1e] md:text-4xl">
            ¡Tu orden casi esta lista!
          </h1>
          <h4 class="self-stretch font-ubuntu text-xl font-medium text-black/50 md:text-2xl">
            Hecha un vistazo, que todo este en orden
          </h4>
        </div>

        <LayoutCard>
          <CardContent></CardContent>
        </LayoutCard>
      </MainLayout>
    </main>
  );
}
