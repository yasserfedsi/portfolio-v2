export default function Footer() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-8 md:gap-12 px-4 md:px-20 snap-start overflow-hidden">
      <div className="flex flex-col gap-1 md:gap-7 items-center">
        <div className="font-extrabold text-[5rem] md:text-[7rem] leading-[4rem]">
          Let's work
        </div>
        <div className="font-extrabold text-[5rem] text-silver md:text-[7rem] leading-[4rem]">
          together
        </div>
      </div>

      <div className="w-1/2 float-left z-10 text-center flex flex-col gap-24 items-center">
        <a href="/contact" className="w-fit">
          <div className="mt-12 text-zinc-500 w-fit cursor-pointer  border border-zinc-500 py-3 px-5 rounded-full hover:text-black hover:bg-white duration-150 ease-in">
            Contact Us
          </div>
        </a>
      </div>
    </section>
  );
}
