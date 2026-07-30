import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Expertise from "@/components/expertise/Expertise";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Academic from "@/components/academic/Academic";
import Certificates from "@/components/certificates/Certificates";
import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";

import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Experience />
      <Academic />
      <Certificates />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
