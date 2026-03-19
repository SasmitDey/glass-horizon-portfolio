import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingOrbs from "@/components/FloatingOrbs";
import FloatingShapes from "@/components/FloatingShapes";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrainingSection from "@/components/TrainingSection";
import ToolsTable from "@/components/ToolsTable";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import SectionReveal from "@/components/SectionReveal";
import CursorEffect from "@/components/CursorEffect";
import SmoothScroll from "@/components/SmoothScroll";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <SmoothScroll>
    <div className="relative min-h-screen overflow-x-hidden">
      <CursorEffect />
      <BackToTop />
      <FloatingOrbs />
      <FloatingShapes />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <SectionReveal>
          <AboutSection />
        </SectionReveal>
        <SectionReveal>
          <SkillsSection />
        </SectionReveal>
        <SectionReveal>
          <ProjectsSection />
        </SectionReveal>
        <SectionReveal>
          <TrainingSection />
        </SectionReveal>
        <SectionReveal>
          <ToolsTable />
        </SectionReveal>
        <SectionReveal>
          <AchievementsSection />
        </SectionReveal>
        <SectionReveal>
          <EducationSection />
        </SectionReveal>
        <SectionReveal>
          <ResumeSection />
        </SectionReveal>
        <SectionReveal>
          <ContactSection />
        </SectionReveal>
      </main>
    </div>
  </SmoothScroll>
);

export default Index;
