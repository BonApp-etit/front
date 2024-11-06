export default function LayoutCard({ children }) {
  return (
    <div className="w-full">
      <section className="rounded-[20px] bg-[#fcfcfc] px-[30px] py-4 shadow md:px-12">
        {children}
      </section>
    </div>
  );
}
