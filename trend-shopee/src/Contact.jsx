import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="contactSection">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15007.234334659106!2d75.28290415000001!3d19.89030305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1690949865506!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <div className="formSection section">
            <form
              action="https://formspree.io/f/mvojzbbw"
              method="POST"
              className="form flex"
            >
              <input
                autoComplete="off"
                required
                placeholder="Name"
                type="text"
                name="name"
              />
              <input
                placeholder="Email"
                required
                autoComplete="off"
                type="email"
                name="email"
              />
              <textarea
                placeholder="Message"
                name="message"
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn">submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
