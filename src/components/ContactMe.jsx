import React, { useState } from 'react';

function ContactMe() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = () => {
    if (subject.length < 5 || subject.length > 20) {
      alert('panjang subject harus di antara 5 sampai 20 karakter');
      return;
    }

    if (body.length < 20 || body.length > 540) {
      alert('Panjang body harus di antara 20 sampai 540 karakter');
      return;
    }

    const mailtoLink = `mailto:daffa.sayra.firdaus@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <div className="text-center max-w-md">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={handleSubjectChange}
          className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500 my-2 p-2"
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={handleBodyChange}
          className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring-blue-500 my-2 p-2"
          rows="5"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </section>
  );
}

export default ContactMe;
