export default function MainLayout({ children }) {
  return (
    <section className="flex min-h-dvh justify-center p-4 md:px-14">
      <div className="mb-1 flex w-full max-w-[400px] flex-col md:min-w-[632px] md:max-w-[700px] lg:max-w-[1200px]">
        {children}
      </div>
    </section>
  );
}
