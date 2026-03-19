import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrainingSection from "@/components/TrainingSection";
import ToolsTable from "@/components/ToolsTable";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <FloatingOrbs />
    <ParticleBackground />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TrainingSection />
      <ToolsTable />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
    </main>
  </div>
);

export default Index;
