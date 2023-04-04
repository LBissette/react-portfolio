import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleNameChange = event => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
    setMessageError(false);
  };

  const handleNameBlur = () => {
    if (name.trim() === '') {
      setNameError(true);
    }
  };

  const handleEmailBlur = () => {
    if (email.trim() === '') {
      setEmailError(true);
    } else {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        setEmailError(true);
      }
    }
  };

  const handleMessageBlur = () => {
    if (message.trim() === '') {
      setMessageError(true);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Send email using form data
  };

  return (
    <form
      className="flex flex-col bg-gray-100 m-6 p-6 rounded-lg"
      onSubmit={handleSubmit}
    >
      <label className="mb-2 font-medium" htmlFor="name">
        Name
      </label>
      <input
        className={`border rounded-lg py-2 px-3 mb-4 ${
          nameError ? 'border-red-500' : ''
        }`}
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        onBlur={handleNameBlur}
      />
      {nameError && <p className="text-red-500 mb-4">Please enter your name</p>}
      <label className="mb-2 font-medium" htmlFor="email">
        Email
      </label>
      <input
        className={`border rounded-lg py-2 px-3 mb-4 ${
          emailError ? 'border-red-500' : ''
        }`}
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
      />
      {emailError && (
        <p className="text-red-500 mb-4">Please enter a valid email address</p>
      )}
      <label className="mb-2 font-medium" htmlFor="message">
        Message
      </label>
      <textarea
        className={`border rounded-lg py-2 px-3 mb-4 ${
          messageError ? 'border-red-500' : ''
        }`}
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        onBlur={handleMessageBlur}
      />
      {messageError && (
        <p className="text-red-500 mb-4">Please enter a message</p>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-sky-700 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Contact;
