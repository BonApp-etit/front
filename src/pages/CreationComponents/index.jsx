import LoadingButton from "@/components/common_components/LoadingButton";
import React from "react";
export default function SignUp() {
  const [loading, setLoading] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsComplete(true);
    }, 3000);
  };
  return (
    <main>
      <LoadingButton
        isComplete={isComplete}
        isLoading={loading}
        onClick={handleClick}
      >
        {" "}
        {isComplete ? "¡Completado!" : "Registrarse"}
      </LoadingButton>
    </main>
  );
}
