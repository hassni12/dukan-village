import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import http from '../../config/axios';
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import Axios from 'axios';


const ContactUs = () => {
  const { handleSubmit, register, errors } = useForm();
  const settings = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onContactUs = async (formData) => {
    try {
      const { data } = await http.post('/contact', { email, subject, message });
      toast.success("Thank you for contacting us.");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  }
  return (
    <div>
      {/*inner-header-section start here*/}
      <section className="inner-header-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-9 col-12">
              <h1>Contact Us</h1>
              <h4 className="pink">Discover the Unique Village Items!</h4>
            </div>
          </div>
        </div>
      </section>
      {/*inner-header-section end here*/}
      <section className="contact-us p-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7  col-12">
              <form onSubmit={handleSubmit(onContactUs)}>
                <div className="row">
                  <div className="col-12 form-group">
                    <h5>Drop a Message</h5>
                    <label>
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      defaultValue={email}
                      onChange={e => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      name="email"
                      ref={register({
                        required: 'This field is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "invalid email address"
                        }
                      })}
                    />
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                  </div>
                  <div className="col-12 form-group">
                    <label>
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      defaultValue={subject}
                      onChange={e => setSubject(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Enter Subject"
                      name="subject"
                      ref={register({ required: true })}
                    />
                    {errors.subject && <span className="text-danger">This field is required</span>}
                  </div>
                  <div className="col-12 form-group">
                    <label>
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      defaultValue={message}
                      onChange={e => setMessage(e.target.value)}
                      className="form-control"
                      placeholder="Enter Message Here"
                      ref={register({ required: true })}
                      name="message"
                    />
                    {errors.message && <span className="text-danger">This field is required</span>}
                  </div>
                  <div className="col-12 form-group">
                    <button type="submit" className="form-control pink-btn-nr">
                      submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-4 col-lg-5 offset-xl-1 col-12">
              <h5>Contact Information</h5>
              <ul className="contact-info">
                <li>
                  <a href="#">
                    <div className="media align-items-center">
                      <i className="fa fa-map-marker" />
                      <div className="media-body">
                        <p>{settings.settings.store_address_1}</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="tel:+123-6654-9874">
                    <div className="media align-items-center">
                      <i className="fa fa-map-marker" />
                      <div className="media-body">
                        <p>{settings.settings.store_phone}</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:samplemail@info.com">
                    <div className="media align-items-center">
                      <i className="fa fa-envelope" />
                      <div className="media-body">
                        <p>{settings.settings.store_email}</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://villagedukaan.com/">
                    <div className="media align-items-center">
                      <i
                        className="fa fa-globe"
                      />
                      <div className="media-body">
                        <p>www.villagedukaan.com</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <ul className="social-media align-items-center">
                <p>Follow Us</p>
                <li>
                  <a href="https://twitter.com/VillageDukaan">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/VillageDukaan">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/villagedukaan/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactUs;
