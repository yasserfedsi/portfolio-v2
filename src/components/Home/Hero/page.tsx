export default function Hero() {
  return (
    <div className="relative ml-16 w-[calc(100%-4rem)] h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
      >
        <source
          src="https://abdelkrimdjerrah.com/videos/hero-vid.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Centered Hero Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 animate-fade-in">
        <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wider drop-shadow-xl">
          Yasser
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-xl tracking-wide">
          Software Developer
        </p>
        <p className="text-white mt-6 text-2xl md:text-5xl font-bold">
          Explore Our Ingenuity
        </p>
      </div>

      {/* Scroll Down SVG */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce w-8 h-8 opacity-80 z-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-full h-full"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <path
            d="M16 5 C16 10 12 14 8 14 C4 14 0 10 0 5 C0 5 0 -5 0 -5 C0 -10 4 -14 8 -14 C12 -14 16 -10 16 -5 C16 -5 16 5 16 5z"
            transform="translate(8, 16)"
          />
          <path d="M16 9.4 C16 11.2 16 14 16 14" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
