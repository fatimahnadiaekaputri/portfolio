import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectSection";
import { client } from "@/sanity/lib/client";
import { heroProfileQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const profile = await client.fetch(heroProfileQuery)
  return (
   <>
      <Navbar />
      <HeroSection profile={profile}/>
      <ExperienceSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
   </>
  );
}
