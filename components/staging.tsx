import Header from './Header';
import Footer from './Footer';
import About from './Cta';
import Project from './Project';
import Testimonials from './Testimonials';
import Hero from './Hero';
import FeatureWithGrid from './FeatureWithGrid';
import ContactUs from './Contact';
import VisionMission from './VisionMission';
import OurMd from './OurMd';

export default function Cray() {
  return (
    <div className="bg-white" id="home">
      <Header />
      <div className="relative overflow-hidden">
        <main>
          <Hero />
          {/* Feature section with screenshot */}
          {/* <FeatureWithScreenShot /> */}

          {/* Feature section with grid */}
          <FeatureWithGrid />

          {/* Blog section */}
          <Project />

          {/* About Section */}
          <About />

          {/* OurMd section */}
          <OurMd />

          {/* Vision and Mission section */}
          <VisionMission />

          {/* AContactbout Section */}
          <ContactUs />
        </main>
        <Footer />
      </div>
    </div>
  );
}
