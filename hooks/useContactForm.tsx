'use client';

import { useState } from 'react';

const useContactForm = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setValues((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const resetForm = () => {
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  return { values, handleChange, resetForm };
};

export default useContactForm;
