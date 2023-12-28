'use client';
import { socialLinks } from '@/common/configs';
import { eSections } from '@/common/enums';
import { memo } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface HeroProps {}

const Hero: React.FC<HeroProps> = props => {
  return (
    <section id="home" className="hero hero-slider-wrapper hero-style-1">
      <div className="hero-slider">
        <div className="slide" style={{ backgroundImage: `url(${'images/slide.jpg'})` }}>
          <div className="container">
            <div className="row">
              <div className="col col-md-10 col-sm-12 slide-caption">
                <div className="slide-subtitle">
                  <h4>I Am Olken Merxira</h4>
                </div>
                <div className="slide-title">
                  <h2>Software Developer</h2>
                </div>
                <div className="btns">
                  <AnchorLink href={`#${eSections.CONTACT}`} className="template-btn go-contact-area">
                    Contact Me
                  </AnchorLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-links">
        <div className="overlay"></div>
        <ul>
          {socialLinks.map(link => (
            <li key={link.key}>
              <a target="_blank" rel="noopener noreferrer" href={link.href}>
                <i className={link.iconClassName}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="white_svg">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
    </section>
  );
};

export default memo(Hero);
