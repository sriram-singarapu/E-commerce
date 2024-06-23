import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_No, setMobile_No] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const user_message = {
      name: name,
      email: email,
      mobile_No: mobile_No,
      message: message,
    };

    async function messageHandler(user_message) {
      try {
        const response = await fetch(
          "https://react-http-e7750-default-rtdb.firebaseio.com/contact.json",
          {
            method: "POST",
            body: JSON.stringify(user_message),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        alert("Message sent ", data);
      } catch (error) {
        alert.error("Error", error);
      }
    }
    messageHandler(user_message);
    console.log(user_message);

    setName("");
    setEmail("");
    setMessage("");
    setMobile_No("");
  };

  return (
    <Fragment>
      <div
        style={{
          backgroundColor: "grey",
          height: "70px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>
          <strong>The Generics</strong>
        </h1>
      </div>
      <section style={{ margin: "2% 30% 5% 30%" }}>
        <h2
          className="text-center"
          style={{
            fontSize: "30px",
            color: "#10B981",
            fontWeight: "bold",
            marginBottom: "2%",
            backgroundColor: "#A7F3D0",
            padding: "10px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Contact Me
        </h2>

        <form
          onSubmit={sendEmail}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <label style={{ fontWeight: "bold" }}>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <label style={{ fontWeight: "bold" }}>Mobile Number</label>
          <input
            type="number"
            name="mobile_No"
            value={mobile_No}
            onChange={(e) => setMobile_No(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <label style={{ fontWeight: "bold" }}>Message</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <Button
            type="submit"
            variant="warning"
            style={{
              width: "100%",
              padding: "0.75rem",
              fontWeight: "bold",
              borderRadius: "5px",
              marginTop: "2%",
            }}
          >
            Send
          </Button>
        </form>
      </section>
    </Fragment>
  );
};

export default Contact;
