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
        {[
          {
            title: "Fast",
            description:
              "I optimize every aspect of the website to ensure it loads quickly and provides a smooth user experience.",
            src: "/images/fast.png",
            alt: "Lightning bolt representing fast loading",
          },
          {
            title: "Responsive",
            description:
              "Whether it's desktop, tablet, or mobile, the layout adapts seamlessly across all screen sizes.",
            src: "/images/responsive.png",
            alt: "Devices showing responsive design",
          },
          {
            title: "Intuitive",
            description:
              "I design interfaces with a focus on clarity and ease of use so that users can interact effortlessly.",
            src: "/images/intuitive.png",
            alt: "User interface representing intuitive design",
          },
          {
            title: "Dynamic",
            description:
              "With animations and interactive features, I create websites that feel alive and engaging.",
            src: "/images/dynamic.png",
            alt: "Motion elements showing dynamic website",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="group rounded-2xl border border-zinc-700 p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-transparent hover:bg-zinc-800/60"
          >
            <Image
              src={feature.src}
              alt={feature.alt}
              className="mx-auto mb-4 w-20 h-20 object-contain transition-all duration-300 group-hover:scale-110"
              width={80}
              height={80}
            />
            <h3 className="text-xl font-bold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-zinc-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
