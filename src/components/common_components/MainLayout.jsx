export default function MainLayout({ children }) {
  return (
    <section className="mt-2 flex min-h-dvh justify-center px-3 pb-4 md:mt-3 md:px-14">
      <div className="max-w-md px-2 sm:max-w-xl md:max-w-2xl lg:max-w-5xl lg:items-center xl:max-w-6xl">
        {children}
      </div>
    </section>
  )
}
