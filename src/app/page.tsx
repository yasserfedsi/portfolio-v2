import Hero from "@/components/Home/Hero/page";
import Features from "@/components/Home/Features/page";
import Projects from "@/components/Home/Projects/page";
import Footer from "@/components/Home/Footer/page";

export default function Home() {
  return (
    <main className="overflow-y-scroll h-screen">
      <Hero />
      <Features />
      <Projects />
      <Footer />
    </main>
  );
}
