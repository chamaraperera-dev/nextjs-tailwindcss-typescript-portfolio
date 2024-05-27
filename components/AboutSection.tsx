import { RiH1 } from 'react-icons/ri';
import Image from 'next/image';

const skills = [
  {
    link: 'https://www.w3.org/html/',
    src: './logos/html5.svg',
    alt: 'html5',
  },
  {
    link: 'https://www.w3schools.com/css/',
    src: './logos/css3.svg',
    alt: 'css3',
  },
  {
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    src: './logos/javascript.svg',
    alt: 'javascript',
  },
  {
    link: 'https://www.typescriptlang.org/',
    src: './logos/typescript.svg',
    alt: 'typescript',
  },
  {
    link: 'https://tailwindcss.com/',
    src: './logos/tailwind.svg',
    alt: 'tailwind',
  },

  {
    link: 'https://reactjs.org/',
    src: './logos/react.svg',
    alt: 'react',
  },
  {
    link: 'https://nextjs.org/',
    src: './logos/nextjs.svg',
    alt: 'nextjs',
  },
  {
    link: 'https://www.mongodb.com/',
    src: '/logos/mongodb.svg',
    alt: 'mongodb',
  },
  {
    link: 'https://nodejs.org',
    src: './logos/nodejs.svg',
    alt: 'nodejs',
  },
  {
    link: 'https://expressjs.com',
    src: './logos/express.svg',
    alt: 'express',
  },
  {
    link: 'https://wordpress.org/',
    src: './logos/wordpress.svg',
    alt: 'wordpress',
  },
  {
    link: 'https://elementor.com/',
    src: './logos/elementor.svg',
    alt: 'elementor',
  },

  {
    link: 'https://git-scm.com/',
    src: './logos/git.svg',
    alt: 'git',
  },
  {
    link: 'https://aws.com',
    src: './logos/aws.svg',
    alt: 'heroku',
  },
  {
    link: 'https://terraform.io',
    src: './logos/terraform.svg',
    alt: 'heroku',
  },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-32  md:pt-16">
        <h1 className="text-center font-bold text-4xl"> About Me</h1>
        <hr className="w-6 h-1 mx-auto mt-4 mb-6 bg-teal-500 border-0 rounded"></hr>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-12 md:space-y-0">
          <div className="md:w-1/2 px-4">
            <h1 className="text-center text-2xl font-bold  mb-10 md:text-center">
              {' '}
              Get to know me!
            </h1>
            <p>
              {''}
              Hi, my name is Chamara and I am a {''}
              <span className="font-bold">{'passionate'}</span>,
              <span className="font-bold">{' innovative'}</span>, AWS certified
              Solutions Architect Professional, Full stack developer and a
              Specialist General Practitioner based in Brisbane, Australia.
            </p>
            <br />
            <p>
              With a unique blend of skills in medicine and technology, my
              mission is to harness the power of cutting-edge technology to
              enhance healthcare solutions and ultimately improve patient
              outcomes.
            </p>
            <br />
            <p>
              I specialize in using the MERN (MongoDB, Express, React, Node.js)
              stack for web development, as well as HTML, CSS, JavaScript,
              TypeScript, and WordPress. My expertise in these technologies
              allows me to create dynamic, efficient, and user-friendly web
              applications that are accessible to everyone.
            </p>
            <br />
            <p>
              Having recently passed the AWS Solutions Architect Professional,
              Developer, and SysOps Administrator Associate exams, as well as
              the Terraform Associate Exam, I am deepening my knowledge of AWS
              services and AWS Healthcare Solutions to effectively leverage
              cloud technology in healthcare.
            </p>
            <br />
            <p>
              My dual background positions me at the intersection of medicine
              and technology, allowing me to envision and create solutions that
              bridge gaps in the healthcare industry.
            </p>
            <br />
            <p>
              If you&#39;re interested in collaborating on a project or just
              want to connect, feel free to reach out. I&#39;m always open to
              new opportunities and challenges!
            </p>
          </div>
          <div className="md:w-1/2 px-4">
            <h1 className="text-center text-2xl font-bold mb-10 md:text-center">
              My skills
            </h1>

            <div className="grid grid-cols-3 gap-4  ">
              {skills.map((item, id) => {
                return (
                  <p key={id}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.alt}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width="80"
                        height="80"
                      />
                    </a>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
