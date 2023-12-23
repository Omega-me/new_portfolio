/* eslint-disable @next/next/no-img-element */
'use client';
import { Dialog, Grid } from '@mui/material';

interface ServiceSingleProps {
  maxWidth?: any;
  open?: any;
  onClose?: any;
  title?: any;
  doc?: any;
  image1?: any;
  image2?: any;
  image3?: any;
}

const ServiceSingle: React.FC<ServiceSingleProps> = props => {
  const { maxWidth, open, onClose, title, doc, image1, image2, image3 } = props;
  return (
    <>
      <Dialog open={open} onClose={onClose} className="modalWrapper quickview-dialog" maxWidth={maxWidth}>
        <Grid className="modalBody modal-body">
          <button className="modal-close" onClick={onClose}>
            <i className="fa fa-close"></i>
          </button>
          <div className="tp-minimals-wrap">
            <div className="minimals-img">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="service-details-section">
            <h4>{title}</h4>
            <p>{doc}</p>
            <p>
              It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn&apos;t anything embarrassing hidden
              in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.
            </p>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-12 mb-3">
                <div className="service-details-img">
                  <img src={image2} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 mb-3">
                <div className="service-details-img">
                  <img src={image3} alt="" />
                </div>
              </div>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
              randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
              isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet generators on the Internet tend to repeat.{' '}
            </p>
            <p>
              It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there&apos;t anything embarrassing hidden in
              the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.
            </p>
          </div>
        </Grid>
      </Dialog>
    </>
  );
};

export default ServiceSingle;
