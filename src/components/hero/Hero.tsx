import HeroVideo from "./HeroVideo";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-background">
      <HeroVideo />
      <HeroContent />
    </section>
  );
}
