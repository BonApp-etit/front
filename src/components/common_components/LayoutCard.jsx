import clsx from "clsx";

export default function LayoutCard({ children, isConfiguration = false }) {
  return (
    <div className="w-full">
      <section
        className={clsx(
          "rounded-[20px] bg-[#fcfcfc] px-[14px] py-4 shadow hover:bg-cs50",
          {
            "px-[30px] md:px-[50px]": isConfiguration,
          },
        )}
      >
        {children}
      </section>
    </div>
  );
}

// md:px-12
