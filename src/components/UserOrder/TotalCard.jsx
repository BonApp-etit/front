import LayoutCard from "../common_components/LayoutCard";
import ButtonContained from "../common_components/ButtonContained";

export default function TotalCard({ currentStep, setCurrentStep, totalSteps }) {
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <LayoutCard>
      <div className="mb-3 flex flex-col gap-4 lg:mb-4">
        <div className="flex justify-evenly">
          <p className="font-ubuntu text-base font-normal leading-relaxed tracking-tight text-black">
            Total
          </p>
          <div className="font-ubuntu text-base leading-relaxed tracking-tight text-cs600">
            <span className="font-normal">$</span>
            <span className="mr-1 font-bold">359</span>
            <span className="font-normal">MXN</span>
          </div>
        </div>

        <div className="flex justify-evenly">
          <ButtonContained
            onClick={handlePrev}
            disabled={currentStep === 1}
            text="Volver"
            variant="text"
            showIcon="true"
          />
          <ButtonContained
            onClick={handleNext}
            disabled={currentStep === totalSteps}
            text="Siguiente"
            variant="generalPoppins"
            showIcon="true"
          />
        </div>
      </div>
    </LayoutCard>
  );
}
