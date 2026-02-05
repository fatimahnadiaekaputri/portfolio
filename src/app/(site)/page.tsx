import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectSection";
import { client } from "@/sanity/lib/client";
import { experienceQuery, heroProfileQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const [profile, experience] = await Promise.all([
    client.fetch(heroProfileQuery),
    client.fetch(experienceQuery),
  ]);
  
  return (
   <>
      <Navbar />
      <HeroSection profile={profile}/>
      <ExperienceSection experience={experience} />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
   </>
  );
}
