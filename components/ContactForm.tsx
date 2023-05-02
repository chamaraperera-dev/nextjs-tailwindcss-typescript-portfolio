'use client';
import { useState } from 'react';
import sendEmail from '../lib/sendEmail';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({ mode: 'onBlur' });

  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: '',
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const req = await sendEmail(
        data.firstName,
        data.lastName,
        data.email,
        data.subject,
        data.message
      );

      if (req?.data.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: 'Thank you for the message. I will get back to you soon',
        });
        reset();
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
      <div className="md:my-32">
        <h1 className="text-center font-bold text-4xl "> Contact Me</h1>
        <hr className="w-6 h-1 mx-auto mt-4 mb-6 bg-teal-500 border-0 rounded"></hr>

        <div
          className="flex align-center justify-center my-16
        "
        >
          <form className="w-full max-w-lg " onSubmit={handleSubmit(onSubmit)}>
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
                  type="text"
                  {...register('firstName', {
                    required: true,
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500">{'First Name is required.'}</p>
                )}
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
                  type="text"
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && (
                  <p className="text-red-500">{'Last Name is required.'}</p>
                )}
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
                  type="email"
                  {...register('email', {
                    required: 'Email is required.',
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: 'Email is not valid.',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message} </p>
                )}
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
                  type="text"
                  {...register('subject', { required: true })}
                />
                {errors.subject && (
                  <p className="text-red-500">{'Subject is required.'}</p>
                )}
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
                  rows={8}
                  {...register('message', { required: true })}
                />
                {errors.message && (
                  <p className="text-red-500">{'Message is required.'}</p>
                )}
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
                  <div className="md:mx-auto text-center">
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
