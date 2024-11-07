export default function LayoutCard({ children }) {
  return (
    <div className="w-full">
      <section className="rounded-[20px] bg-[#fcfcfc] px-[14px] py-4 shadow">
        {children}
      </section>
    </div>
  );
}

// md:px-12
