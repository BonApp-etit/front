import React from "react";
import {
  ShoppingCartIcon,
  CheckIcon,
  CreditCardIcon,
  ClipboardIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

export default function Stepper({ currentStep }) {
  const steps = [
    { id: 1, title: "Escoge tus productos", icon: ShoppingCartIcon },
    { id: 2, title: "Confirmación de cocina", icon: CheckIcon },
    { id: 3, title: "Método de pago", icon: CreditCardIcon },
    { id: 4, title: "Review", icon: ClipboardIcon },
    { id: 5, title: "Thank You", icon: HeartIcon },
  ];

  return (
    <div className="mx-auto flex max-w-[400px] justify-between md:max-w-[632px] lg:max-w-[830px]">
      {steps.map((step) => {
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;
        return (
          <section key={step.title} className="w-14 md:w-24 lg:w-40">
            <div className="flex flex-col items-center">
              <div
                className={`inline-block rounded-full border-2 p-2 ${
                  isActive
                    ? "border-cs500"
                    : isCompleted
                      ? "border-cs500"
                      : "border-black/50"
                }`}
              >
                <step.icon
                  className={`h-5 w-5 md:h-7 md:w-7 ${
                    isActive
                      ? "text-cs700"
                      : isCompleted
                        ? "text-cs700"
                        : "text-black/50"
                  }`}
                  strokeWidth={2}
                />
              </div>
              <p className="text-center text-xs text-black/50 md:text-base lg:text-lg lg:font-medium">
                {step.title}
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

// import React, { useState } from "react";
// import {
//   ShoppingCartIcon,
//   CheckIcon,
//   CreditCardIcon,
//   ClipboardIcon,
//   HeartIcon,
// } from "@heroicons/react/24/outline";

// export default function Stepper() {
//   const [currentStep, setCurrentStep] = useState(1); // Paso inicial

//   const steps = [
//     { id: 1, title: "Escoge tus productos", icon: ShoppingCartIcon },
//     { id: 2, title: "Confirmacion de cocina", icon: CheckIcon },
//     { id: 3, title: "Metodo de pago", icon: CreditCardIcon },
//     { id: 4, title: "Review", icon: ClipboardIcon },
//     { id: 5, title: "Thank You", icon: HeartIcon },
//   ];

//   const handleNext = () => {
//     if (currentStep < steps.length) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   return (
//     <div className="max-w-[328px] sm:max-w-[632px] lg:max-w-[1200px] w-full mx-auto">
//       {/* Lista de pasos */}
//       <ol className="flex flex-col sm:flex-row items-center text-xs font-medium text-gray-900 sm:text-base">
//         {steps.map((step, index) => {
//           const isActive = currentStep === step.id;
//           const isCompleted = currentStep > step.id;
//           return (
//             <li
//               key={step.id}
//               className={`relative flex sm:w-1/5 w-full ${
//                 isActive
//                   ? "text-indigo-600"
//                   : isCompleted
//                   ? "text-green-600"
//                   : "text-gray-600"
//               } after:absolute after:left-4 after:top-3 after:inline-block after:h-0.5 after:w-full after:bg-gray-200 after:content-[''] lg:after:top-5`}
//             >
//               <div className="z-10 block whitespace-nowrap">
//                 <span
//                   className={`mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full border-2 text-sm lg:h-10 lg:w-10 ${
//                     isActive
//                       ? "border-indigo-600 bg-white text-indigo-600"
//                       : isCompleted
//                       ? "border-green-600 bg-green-600 text-white"
//                       : "border-gray-200 bg-gray-50 text-gray-600"
//                   }`}
//                 >
//                   <step.icon className="h-6 w-6" strokeWidth={2} />
//                 </span>
//                 {step.title}
//               </div>
//             </li>
//           );
//         })}
//       </ol>

//       {/* Botones de navegación */}
//       <div className="mt-6 flex justify-between">
//         <button
//           onClick={handlePrev}
//           disabled={currentStep === 1}
//           className="rounded-lg bg-gray-300 px-4 py-2 text-gray-700 disabled:opacity-50"
//         >
//           Anterior
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentStep === steps.length}
//           className="rounded-lg bg-indigo-600 px-4 py-2 text-white disabled:opacity-50"
//         >
//           Siguiente
//         </button>
//       </div>
//     </div>
//   );
// }
