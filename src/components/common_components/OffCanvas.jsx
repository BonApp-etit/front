const menuItems = [
  { href: "#", label: "Dashboard", icon: "DashboardIcon" },
  { href: "#", label: "E-commerce" },
  { href: "#", label: "Inbox" },
  { href: "#", label: "Kanban" },
];

const OffCanvas = ({ IsOpen, onClose }) => {
  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 z-40 h-screen w-64 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800 ${
          IsOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        {/* Encabezado */}
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
        >
          Navigation
        </h5>
        {/* Botón para cerrar el drawer */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        {/* Contenido del menú */}
        <div className="overflow-y-auto py-4">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {item.icon && (
                    <item.icon className="h-5 w-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                  )}
                  <span className="ml-3">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
