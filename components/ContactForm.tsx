'use client';
import { useState } from 'react';
import useContactForm from '../hooks/useContactForm';
import sendEmail from '../lib/sendEmail';

const ContactForm = () => {
  const { values, handleChange, resetForm } = useContactForm();

  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const req = await sendEmail(
        values.firstName,
        values.lastName,
        values.email,
        values.subject,
        values.message
      );

      if (req?.data.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: 'Thank you for the message. I will get back to you soon',
        });
        resetForm();
      }

      if (req?.data.status === 500) {
        setResponseMessage({
          isSuccessful: false,
          message: 'Oops Something went wrong.Please try again later',
        });
      }
    } catch (err) {
      console.log(err);
      setResponseMessage({
        isSuccessful: false,
        message: 'Oops Something went wrong.Please try again later',
      });
    }

    setTimeout(() => {
      setResponseMessage({ isSuccessful: false, message: '' });
    }, 5000);
  };
  return (
    <section id="contact">
      <div className="my-32">
        <h1 className="text-center font-bold text-4xl "> Contact Me</h1>
        <hr className="w-6 h-1 mx-auto mt-4 mb-6 bg-teal-500 border-0 rounded"></hr>

        <div
          className="flex align-center justify-center my-16
        "
        >
          <form className="w-full max-w-lg " onSubmit={handleSubmit}>
            <div className="flex flex-wrap mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight border-gray-400 focus:outline-none focus:bg-white focus:border-red-500 dark:text-black dark:border-white dark:bg-white"
                  required
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  type="text"
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight border-gray-400 focus:outline-none focus:bg-white focus:border-red-500 dark:text-black dark:border-white dark:bg-white"
                  required
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-wrap mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight border-gray-400 focus:outline-none focus:bg-white focus:border-red-500 dark:text-black dark:border-white dark:bg-white"
                  required
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                />
              </div>
            </div>

            <div className="flex flex-wrap mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight border-gray-400 focus:outline-none focus:bg-white focus:border-red-500 dark:text-black dark:border-white dark:bg-white"
                  required
                  id="subject"
                  value={values.subject}
                  onChange={handleChange}
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-wrap mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight border-gray-400 focus:outline-none focus:bg-white focus:border-red-500 h-48 resize-none dark:text-black dark:border-white dark:bg-white"
                  required
                  id="message"
                  value={values.message}
                  onChange={handleChange}
                  rows={8}
                />
              </div>
            </div>
            {responseMessage.message && (
              <div
                role="alert"
                className={`${
                  responseMessage.isSuccessful
                    ? 'flex justify-center p-4 mb-4 text-lg text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400'
                    : 'flex justify-center p-4 mb-4 text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
                }`}
              >
                <span className="font-medium">{responseMessage.message}</span>
              </div>
            )}
            <div className="flex flex-wrap mx-3 mb-6">
              <div className="w-full px-3">
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3">
                    <button
                      className="shadow bg-teal-700 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      value="Submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
