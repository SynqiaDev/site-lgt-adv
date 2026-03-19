import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLdHome from "@/components/seo/JsonLdHome";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCta from "@/components/sections/FinalCta";
import MissionVisionValuesSection from "@/components/sections/MissionVisionValuesSection";
import ProfessionalsSection from "@/components/sections/ProfessionalsSection";

export default function Home() {
  return (
    <>
      <JsonLdHome />
      <Navbar />
      <main>
        {/* Section01 */}
        <HeroSection />

        {/* Section02 */}
        <AboutSection />

        {/* Section03 */}
        <MissionVisionValuesSection />

        {/* Section04 */}
        <ServicesSection />

        {/* Section05 */}
        <ProfessionalsSection />

        {/* Section06 */}
        <FaqSection />

        {/* Section07 */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
