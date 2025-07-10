import Image from "next/image";

export default function Features() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-8 md:gap-12 px-4 md:px-20 snap-start overflow-hidden">
      {/* Heading */}
      <div className="text-center">
        <h2 className="font-bold text-[2rem] md:text-[4rem] leading-tight">
          Features of
        </h2>
        <h2 className="font-bold text-[2rem] md:text-[4rem] text-silver leading-tight">
          working with me
        </h2>
      </div>

      {/* Boxes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full cursor-default">
        <div className="group rounded-2xl border border-zinc-700 p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-transparent hover:bg-zinc-800/60">
          <Image
            src="/images/fast.png"
            alt="Fast"
            className="mx-auto mb-4 w-20 h-20 object-contain transition-all duration-300 group-hover:scale-110"
            width={80}
            height={80}
          />
          <h3 className="text-xl font-bold mb-2 text-white">Fast</h3>
          <p className="text-sm text-zinc-300">
            I optimize every aspect of the website to ensure it loads quickly
            and provides a smooth user experience.
          </p>
        </div>

        <div className="group rounded-2xl border border-zinc-700 p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-transparent hover:bg-zinc-800/60">
          <Image
            src="/images/responsive.png"
            alt="Responsive"
            className="mx-auto mb-4 w-20 h-20 object-contain transition-all duration-300 group-hover:scale-110"
            width={80}
            height={80}
          />
          <h3 className="text-xl font-bold mb-2 text-white">Responsive</h3>
          <p className="text-sm text-zinc-300">
            Whether it's desktop, tablet, or mobile, the layout adapts
            seamlessly across all screen sizes.
          </p>
        </div>

        <div className="group rounded-2xl border border-zinc-700 p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-transparent hover:bg-zinc-800/60">
          <Image
            src="/images/intuitive.png"
            alt="Intuitive"
            className="mx-auto mb-4 w-20 h-20 object-contain transition-all duration-300 group-hover:scale-110"
            width={80}
            height={80}
          />
          <h3 className="text-xl font-bold mb-2 text-white">Intuitive</h3>
          <p className="text-sm text-zinc-300">
            I design interfaces with a focus on clarity and ease of use so that
            users can interact effortlessly.
          </p>
        </div>

        <div className="group rounded-2xl border border-zinc-700 p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-transparent hover:bg-zinc-800/60">
          <Image
            src="/images/dynamic.png"
            alt="Dynamic"
            className="mx-auto mb-4 w-20 h-20 object-contain transition-all duration-300 group-hover:scale-110"
            width={80}
            height={80}
          />
          <h3 className="text-xl font-bold mb-2 text-white">Dynamic</h3>
          <p className="text-sm text-zinc-300">
            With animations and interactive features, I create websites that
            feel alive and engaging.
          </p>
        </div>
      </div>
    </section>
  );
}
