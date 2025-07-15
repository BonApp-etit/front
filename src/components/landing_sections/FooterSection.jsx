export default function Footer() {
  return (
    //cs500 Change color

    <footer className="bg-cs500 px-4 py-2 font-roboto text-[8px] text-white md:px-14 md:py-3 md:text-base md:leading-normal lg:py-5 lg:text-lg">
      <section className="mx-auto flex justify-between md:max-w-2xl lg:max-w-7xl">
        <p>Copyright © 2024 Bonappetit. All rights reserved</p>
        <div className="flex gap-1 md:gap-2 lg:gap-5">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Term of Use
          </a>
          <a href="#" className="hover:underline">
            Partner
          </a>
        </div>
      </section>
    </footer>
  )
}
