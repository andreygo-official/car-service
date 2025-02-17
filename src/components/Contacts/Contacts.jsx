import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import MaskedInput from "react-text-mask";
import ReCAPTCHA from "react-google-recaptcha";
import "./contacts.scss";
const Contacts = () => {
  const { control, register, formState, handleSubmit, reset } = useForm({
    mode: "onBlur",
  });
  const [capVal, setCapVal] = useState(null)
  const { errors, isValid } = formState;

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    reset();
  };
  return (
    <div className="contacts-container">
      <div className="container">
        <div className="text-block">
          <h1 className="block-heading">
            <span className="heading-bold">CONTACT </span>
            <span className="heading">INFO</span>
          </h1>
        </div>
        <div className="form-block row">
          <div className="google-map col-12 col-lg-6 mt-5">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d273006.87836450976!2d30.655765900000003!3d46.4825253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631e8191a5fd7%3A0x2e73507c4a1e20c6!2sOdesa%2C%20Odes&#39;ka%20oblast%2C%20Ukraine%2C%2065000!5e0!3m2!1sen!2sus!4v1612147107361!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="address-block">
                <h3>ODESA, UKRAINE</h3>
                <p><span>Freephone:</span><a href="tel: +1 800 559 6580">+1 800 559 6580</a></p>
                <p><span>Telephone:</span><a href="tel: +1 800 603 6035">+1 800 603 6035</a></p>
                <p><span>FAX:</span><a href="tel: +1 800 889 9898">+1 800 889 9898</a></p>
                <p><span>E-mail:</span><a href="mailto: mail@demolink.org">mail@demolink.org</a></p>
            </div>
          </div>
          <div className="form col-12 col-lg-6 mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <h2 className="text-white fw-bold">CONTACT FORM</h2>
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                Name
              </label>
              <input
                placeholder="Enter your name"
                type="text"
                id="userName"
                className="form-control"
                {...register("userName", {
                  required: "Required field!",
                  pattern: {
                    value: /^[A-Za-z]{2,50}$/,
                    message: "Wrong format!",
                  },
                })}
              />
              <p className="error">{errors.userName?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "Required field!",
                  pattern: {
                    value: /^\+[1-9] \([1-9]\d{2}\) \d{3}-\d{4}$/,
                    message: "Invalid phone number format",
                  },
                }}
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={[
                      "+",
                      /[1-9]/,
                      " ",
                      "(",
                      /[1-9]/,
                      /\d/,
                      /\d/,
                      ")",
                      " ",
                      /\d/,
                      /\d/,
                      /\d/,
                      "-",
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    guide={false}
                    placeholder="+9 (999) 999-9999"
                    id="phone"
                    className="form-control"
                  />
                )}
              />
              <p className="error">{errors.phone?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                className="form-control"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email format is invalid!",
                  },
                })}
              />
              <p className="error">{errors.email?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="textArea" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                placeholder="Write something"
                id="textMessage"
                {...register("textMessage", {
                  required: "Required field!",
                })}
                cols="30"
                rows="10"
              />
              <p className="error">{errors.textMessage?.message}</p>
            </div>
            <ReCAPTCHA
              sitekey="6LcZFNkqAAAAACMQEAgSXR4qQohxXCXfWJKRY4bA"
              onChange={(value) => setCapVal(value)}
            />
            <button
              className="btn btn-danger"
              type="submit"
              disabled={!isValid || !capVal}
            >
              SUBMIT
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
