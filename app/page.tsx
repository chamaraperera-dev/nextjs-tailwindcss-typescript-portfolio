import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactForm />
    </main>
  );
}
