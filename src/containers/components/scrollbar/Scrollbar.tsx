'use client';
import { eSections } from '@/common/enums';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface ScrollbarProps {}

const Scrollbar: React.FC<ScrollbarProps> = props => {
  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <ul className="smothscroll">
          <li>
            <AnchorLink href={`#${eSections.HOME}`}>
              <i className="fi flaticon-up-arrow"></i>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;
