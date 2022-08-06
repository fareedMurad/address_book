import React, { useState } from "react";
import InputField from "../InputField";
import Button from "../Button";
import "../../styles/styles.css"
import { address } from "../../api";
import Alert from "../Alert";
import { validateEmail, validatePhone } from "../../utils";

const AddressForm = () => {
  const [inputFields, setInputFields] = useState({});
  const [error, setError] = useState(false)
  const handleChange = (e) => {
    setError(false)
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  const createAddress = async (e) => {
    e.preventDefault();

    const { fname, lname, email, phone } = inputFields;
    if (fname || lname || validateEmail(email) || validatePhone(phone))
      await address.create(inputFields)
    else setError("Please enter valid values")
  }


  return (
    <div className="container">
      <form id="contact" action="#" onSubmit={createAddress}>
        <h3>Address Form</h3>
        <h4>Contact us for custom quote</h4>
        {error ? <Alert message={error} /> : null}
        <InputField
          name="fname"
          placeholder="Your First Name"
          type="text"
          tabIndex="1"
          onChange={handleChange}
        />
        <InputField
          name="lname"
          placeholder="Your Last Name"
          type="text"
          tabIndex="1"
          onChange={handleChange}
        />
        <InputField
          name="phone"
          placeholder="Your Phone Number"
          type="number"
          tabIndex="1"
          onChange={handleChange}
        />
        <InputField
          name="email"
          placeholder="Your Email Address"
          type="text"
          tabIndex="1"
          onChange={handleChange}
        />
        <InputField
          name="address"
          placeholder="Type your address"
          type="textarea"
          tabIndex="5"
          onChange={handleChange}
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
