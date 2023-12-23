'use client';
import { useEffect, useState } from 'react';
import { Header } from '..';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = props => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const className = scroll > 100 ? 'fixed-navbar active' : 'fixed-navbar';

  return (
    <div className={className}>
      <Header />
    </div>
  );
};

export default Navbar;
