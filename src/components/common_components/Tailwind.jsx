import React, { useState } from "react";
import Image from "next/image";
import { InboxIcon, MailIcon, MenuIcon } from "@heroicons/react/24/solid"; // Heroicons para íconos

export default function Tailwind() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Panel", icon: "hola" },
    { name: "Menu Digital", icon: "hola" },
    { name: "Mi restaurante", icon: "hola" },
    { name: "Mis mesas QR", icon: "hola" },
    { name: "Pago en linea", icon: "hola" },
    { name: "Pedidos", icon: "hola" },
  ];

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        <MenuIcon className="h-6 w-6" />
      </button>

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-64 transform bg-white p-4 shadow-lg ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}
      >
        {/* Logo de la empresa */}
        <div className="my-4 flex justify-center">
          <Image
            src="/assets/CompanyLogo.png"
            alt="Company Logo"
            width={100}
            height={40}
          />
        </div>
        <hr className="my-2" />

        {/* Lista de items del menú */}
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex cursor-pointer items-center rounded-lg p-2 hover:bg-gray-100"
            >
              <span className="mr-3">{item.icon}</span>
              <span className="text-gray-800">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Fondo de sombra */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-25"
        ></div>
      )}
    </div>
  );
}
