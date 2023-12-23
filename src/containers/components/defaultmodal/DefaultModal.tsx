'use client';
import { Button, Dialog, Grid } from '@mui/material';
import { useState } from 'react';
import { Counter } from '..';

interface DefaultModalProps {
  maxWidth?: any;
  button?: any;
  buttonClass?: any;
}

const DefaultModal: React.FC<DefaultModalProps> = props => {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button className={`btn ${props.buttonClass}`} onClick={handleClickOpen}>
        {props.button}
        More About
      </Button>
      <Dialog open={open} onClose={handleClose} className="modalWrapper quickview-dialog" maxWidth={props.maxWidth}>
        <Grid className="modalBody modal-body">
          <button className="modal-close" onClick={handleClose}>
            <i className="fa fa-close"></i>
          </button>
          <div className="skill-area section-padding">
            <div className="container">
              <div className="col-12">
                <div className="section-title text-center">
                  <h2>My skills</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="progress yellow">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      90% <span>Product Design</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="progress blue">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      80% <span>Web Design</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="progress pink">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      65% <span>App Design</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="progress green">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      47% <span>Visual Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Counter />
        </Grid>
      </Dialog>
    </>
  );
};

export default DefaultModal;
