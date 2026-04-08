import VerticalSidebar from "@/shared/components/VerticalSidebar/page";
import Hero from "@/shared/Hero/page";
import Features from "@/shared/Features/page";
import Projects from "@/shared/Projects/page";
import Footer from "@/shared/Footer/page";
import Skills from "@/shared/Skills/page";
import Testimonials from "@/shared/Testimonials/page";
import Experience from "@/shared/Experience/page";
import About from "@/shared/About/page";

export default function Home() {
  return (
    <>
      <VerticalSidebar />
      <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        <Hero />
        <About />
        <Features />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
