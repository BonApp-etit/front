import * as React from "react";
import Switch from "@mui/material/Switch";
import useIsDesktop from "@/hooks/useIsDesktop";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches() {
  const isDesktop = useIsDesktop();
  return (
    <div className="flex items-center">
      <Switch
        {...label}
        defaultChecked
        size={isDesktop ? "undefined" : "small"}
      />
      <span className="font-poppins text-xs font-medium leading-5 tracking-tight text-black md:text-sm lg:text-base">
        Deshabilitar categoria
      </span>
    </div>
  );
}
