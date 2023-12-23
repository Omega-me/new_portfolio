'use client';

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = props => {
  return (
    <form className="form">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input type="text" name="name" placeholder="Name" />
            {/* <p>{error.name ? error.name : ''}</p> */}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input type="text" name="lastname" placeholder="Lastname" />
            {/* <p>{error.lastname ? error.lastname : ''}</p> */}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input type="email" name="email" placeholder="Email" />
            {/* <p>{error.email ? error.email : ''}</p> */}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input type="text" name="subject" placeholder="Subject" />
            {/* <p>{error.subject ? error.subject : ''}</p> */}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-field">
            <textarea name="message" placeholder="Message"></textarea>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-submit">
            <button type="submit" className="template-btn">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
