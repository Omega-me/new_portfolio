'use client';
import { eSections } from '@/common/enums';
import { Hero, About, Service, Portfolio, Testimonial, PricingPlan, BlogSection, ContactSection, Footer, Scrollbar, Header } from '..';
import { useHomeModuleContext } from '@/containers/modules/home/Home.module';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

interface HomeProps {}

const Home: React.FC<HomeProps> = props => {
  const { className } = useHomeModuleContext();

  return (
    <>
      <div className="br-app">
        <div className={className}>
          <Header />
        </div>
        <Element name={eSections.HOME}>
          <Hero />
        </Element>
        <Element name={eSections.ABOUT}>
          <About />
        </Element>
        <Element name={eSections.SERVICES}>
          <Service />
        </Element>
        <Element name={eSections.PORTFOLIO}>
          <Portfolio />
        </Element>
        <Testimonial />
        <PricingPlan />
        <Element name={eSections.BLOG}>
          <BlogSection />
        </Element>
        <Element name={eSections.CONTACT}>
          <ContactSection />
        </Element>
        <Footer />
        <Scrollbar />
      </div>
    </>
  );
};

export default Home;
