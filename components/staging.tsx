import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import { features, blogPosts } from 'utils/sample-data';
import Header from './Header';
import Footer from './Footer';
import About from './Cta';
import Blog from './Blog';
import Testimonials from './Testimonials';
import Hero from './Hero';
import FeatureWithGrid from './FeatureWithGrid';
import FeatureWithScreenShot from './FeatureWithScreenShot';
import ContactUs from './Contact';

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
          {/* Testimonial section */}
          <Testimonials />

          {/* Blog section */}
          <Blog />

          {/* About Section */}
          <About />

          {/* AContactbout Section */}
          <ContactUs />
        </main>
        <Footer />
      </div>
    </div>
  );
}
