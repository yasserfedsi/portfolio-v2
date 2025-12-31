import VerticalSidebar from "@/components/Layouts/VerticalSidebar/page";
import Hero from "@/components/Home/Hero/page";
import Features from "@/components/Home/Features/page";
import Projects from "@/components/Home/Projects/page";
import Footer from "@/components/Home/Footer/page";

export default function Home() {
  return (
    <>
      <VerticalSidebar />
      <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        <Hero />
        <Features />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
