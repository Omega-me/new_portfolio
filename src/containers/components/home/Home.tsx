'use client';
import { Navbar, Hero, About, Service, Portfolio, Testimonial, PricingPlan, BlogSection, ContactSection, Footer, Scrollbar } from '..';
import { useHomeModuleContext } from '@/containers/modules/home/Home.module';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  const {} = useHomeModuleContext();

  return (
    <>
      <div className="br-app">
        <Navbar />
        <Element name="home">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="service">
          <Service />
        </Element>
        <Element name="portfolio">
          <Portfolio />
        </Element>
        <Testimonial />
        <PricingPlan />
        <Element name="blog">
          <BlogSection />
        </Element>
        <Element name="contact">
          <ContactSection />
        </Element>
        <Footer />
        <Scrollbar />
      </div>
    </>
  );
};

export default Home;
