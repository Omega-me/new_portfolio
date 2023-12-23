'use client';
import { Button } from '@mui/material';
import { useState } from 'react';
import { ServiceSingle } from '..';

interface ServiceProps {}

const Service: React.FC<ServiceProps> = props => {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  const [state, setState] = useState<any>({});

  const handleClickOpen = (item: any) => {
    setOpen(true);
    setState(item);
  };
  const service = [
    {
      Id: '1',
      sIcon: 'fi flaticon-web-design',
      heading: 'Web Design',
      Simg1: 'images/service-single/web-design/img-1.jpg',
      Simg2: 'images/service-single/web-design/img-2.jpg',
      Simg3: 'images/service-single/web-design/img-3.jpg',
      des: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy.',
    },
    {
      Id: '2',
      sIcon: 'fi flaticon-laptop',
      heading: 'Web Development',
      Simg1: 'images/service-single/development/img-1.jpg',
      Simg2: 'images/service-single/development/img-2.jpg',
      Simg3: 'images/service-single/development/img-3.jpg',
      des: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy.',
    },
    {
      Id: '3',
      sIcon: 'fi flaticon-paint-palette',
      heading: 'Creative Design',
      Simg1: 'images/service-single/creative/img-1.jpg',
      Simg2: 'images/service-single/creative/img-2.jpg',
      Simg3: 'images/service-single/creative/img-3.jpg',
      des: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy.',
    },
    {
      Id: '4',
      sIcon: 'fi flaticon-smartphone',
      heading: 'Responsive Design',
      Simg1: 'images/service-single/responsive/img-1.jpg',
      Simg2: 'images/service-single/responsive/img-2.jpg',
      Simg3: 'images/service-single/responsive/img-3.jpg',
      des: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy.',
    },
    {
      Id: '5',
      sIcon: 'fi flaticon-verified',
      heading: 'Branding Identity',
      Simg1: 'images/service-single/branding/img-1.jpg',
      Simg2: 'images/service-single/branding/img-2.jpg',
      Simg3: 'images/service-single/branding/img-3.jpg',
      des: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy.',
    },
    {
      Id: '6',
      sIcon: 'fi flaticon-operator',
      heading: '24/Support',
      Simg1: 'images/service-single/support/img-1.jpg',
      Simg2: 'images/service-single/support/img-2.jpg',
      Simg3: 'images/service-single/support/img-3.jpg',
      des: 'One way to categorize the activities is in terms of the professional’s area of expertise such as competitive analysis, corporate strategy.',
    },
  ];

  return (
    <div id="service" className="service-area section-padding">
      <div className="borderd"></div>
      <div className="container">
        <div className="col-l2">
          <div className="section-title section-title2 text-center">
            <span>What I am Expert In</span>
            <h2>My Service</h2>
          </div>
        </div>
        <div className="row">
          {service.map((serv, srv) => (
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={srv}>
              <div className="service-section">
                <div className="services-wrapper">
                  <div className="services-icon-wrapper">
                    <div className="service-dot">
                      <div className="dots"></div>
                      <div className="dots2"></div>
                    </div>
                    <i className={serv.sIcon}></i>
                  </div>
                  <div className="service-content">
                    <h2>{serv.heading}</h2>
                    <p>{serv.des}</p>
                    <Button className="btn" onClick={() => handleClickOpen(serv)}>
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="white_svg">
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
        </svg>
      </div>
      <ServiceSingle open={open} onClose={handleClose} title={state.heading} doc={state.doc} image1={state.Simg1} image2={state.Simg2} image3={state.Simg3} />
    </div>
  );
};

export default Service;
