import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Pillars from './components/Pillars';
import ProjectsMap from './components/ProjectsMap';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Pillars />
      <ProjectsMap />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
