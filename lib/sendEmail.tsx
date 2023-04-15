import axios from 'axios';

const sendEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  subject: string,
  message: string
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/send-email',
      data: {
        firstName,
        lastName,
        email,
        subject,
        message,
      },
    });
    return res;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export default sendEmail;
