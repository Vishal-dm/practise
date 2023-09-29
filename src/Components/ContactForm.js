import React, { useState } from "react";
import "./Style/ContactForm.css";
import image from "./Style/myImage.png";
const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submittedData, setsubmittedData] = useState([]);

  const fName = (e) => {
    setFirstName(e.target.value);
  };
  const lName = (e) => {
    setLastName(e.target.value);
  };
  const addressFn = (e) => {
    setAddress(e.target.value);
  };
  const emailFn = (e) => {
    setEmail(e.target.value);
  };
  const phoneNumberFn = (e) => {
    setPhoneNumber(e.target.value);
  };

  const removeCard = (index) => {
    const updatedData = submittedData.slice();
    updatedData.splice(index, 1);
    setsubmittedData(updatedData);
  };

  // const removeCard = (index) => {
  //   const updatedData = submittedData.filter((item, i) => i !== index);
  //   console.log({ updatedData });
  //   setsubmittedData(updatedData);
  // };
  const SubmitData = (e) => {
    e.preventDefault();
    let dataobj = {
      firstname: firstName,
      lastname: lastName,
      address: address,
      email: email,
      phonenumber: phoneNumber,
    };
    setsubmittedData([...submittedData, dataobj]);
    setFirstName("");
    setLastName("");
    setAddress("");
    setEmail("");
    setPhoneNumber("");
  };
  //   console.log(submittedData);
  return (
    <>
      <div className="container">
        <h1>Contact Form</h1>
        <form>
          <div className="first-name">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              value={firstName}
              id="firstName"
              onChange={fName}
            />
          </div>
          <div className="last-name">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              value={lastName}
              id="lastName"
              onChange={lName}
            />
          </div>
          <div className="address">
            <label htmlFor="address">Address:</label>
            <textarea id="address" value={address} onChange={addressFn} />
          </div>
          <div className="address">
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} id="email" onChange={emailFn} />
          </div>
          <div className="phone">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="number"
              value={phoneNumber}
              id="phone"
              onChange={phoneNumberFn}
            />
          </div>
          <div className="submit-button">
            <button className="submit-btn" type="submit" onClick={SubmitData}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="card-container">
        {submittedData.map((item, index) => {
          return (
            <>
              <div class="card">
                <div className="cross-icon">
                  <img
                    src={image}
                    onClick={() => removeCard(index)}
                    className="cross-icon-image"
                  />
                </div>
                <img
                  src="https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4>User Data:1</h4>
                  <p className="card-text">
                    First Name: {item.firstname}
                    <br />
                    Last Name: {item.lastname}
                    <br />
                    Address: {item.address}
                    <br />
                    Email: {item.email}
                    <br />
                    Phone Number: {item.phonenumber}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ContactForm;
