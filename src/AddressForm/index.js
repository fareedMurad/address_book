import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../Styles/_AddressForm.css";

const AddressForm = () => {
  const [inputFields, setInputFields] = useState([]);
  const handleChange = (e) => {
    setInputFields({
      [e.target.fname]: e.target.value,
      [e.target.lname]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.address]: e.target.value,
    });
  };
  return (
    <div className="container">
      <form id="contact" action="" method="post" onSubmit={(values) => {}}>
        <h3>Address Form</h3>
        <h4>Contact us for custom quote</h4>
        <InputField
          name="fname"
          placeholder="Your First Name"
          type="text"
          tabIndex="1"
          onChange={handleChange}
          required
        />
        <InputField
          name="lname"
          placeholder="Your Last Name"
          type="text"
          tabIndex="1"
          onChange={handleChange}
          required
        />
        <InputField
          name="phone"
          placeholder="Your Phone Number"
          type="text"
          tabIndex="1"
          onChange={handleChange}
          required
        />
        <InputField
          name="email"
          placeholder="Your Email Address"
          type="text"
          tabIndex="1"
          onChange={handleChange}
          required
        />
        <InputField
          name="address"
          placeholder="Type your address"
          type="textarea"
          tabIndex="5"
          onChange={handleChange}
          required
        />
        <Button
          name="submit"
          type="submit"
          id="contact-submit"
          dataSubmit="...Sending"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddressForm;
