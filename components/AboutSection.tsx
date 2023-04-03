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
    link: 'https://www.figma.com/',
    src: './logos/figma.svg',
    alt: 'figma',
  },
  {
    link: 'https://getbootstrap.com',
    src: './logos/bootstrap.svg',
    alt: 'bootstrap',
  },
  {
    link: 'https://tailwindcss.com/',
    src: './logos/tailwind.svg',
    alt: 'tailwind',
  },
  {
    link: 'https://sass-lang.com',
    src: '/logos/sass.svg',
    alt: 'sass',
  },
  {
    link: 'https://gulpjs.com',
    src: './logos/gulp.svg',
    alt: 'gulp',
  },

  {
    link: 'https://reactjs.org/',
    src: './logos/react.svg',
    alt: 'react',
  },
  {
    link: 'https://redux.js.org',
    src: './logos/redux.svg',
    alt: 'redux',
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
    link: 'https://www.mysql.com/',
    src: './logos/mysql.svg',
    alt: 'mysql',
  },
  {
    link: 'https://www.npmjs.com',
    src: './logos/npm.svg',
    alt: 'npm',
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
    link: 'https://jestjs.io',
    src: './logos/jest.svg',
    alt: 'jest',
  },
  {
    link: 'https://parceljs.org',
    src: './logos/parcel.svg',
    alt: 'parcel',
  },
  {
    link: 'https://git-scm.com/',
    src: './logos/git.svg',
    alt: 'git',
  },
  {
    link: 'https://www.docker.com/',
    src: './logos/docker.svg',
    alt: 'docker',
  },
  {
    link: 'https://heroku.com',
    src: './logos/heroku.svg',
    alt: 'heroku',
  },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12  md:pt-16">
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
              <span className="font-bold">{' self-motivated'}</span>, full stack
              developer and a medical doctor based in Brisbane, Australia.
            </p>
            <br />
            <p>
              With a passion for both medicine and technology, I have been able
              to combine my skills to create innovative solutions that can help
              people.
            </p>
            <br />
            <p>
              I specialize in using the MERN (MongoDB, Express, React, Node.js)
              stack for web development, as well as HTML, CSS,
              JavaScript,TypeScript and Wordpress. My expertise in these
              technologies allows me to create dynamic and efficient web
              applications that are user-friendly and accessible.
            </p>
            <br />
            <p>
              As a medical doctor, I have a deep understanding of how technology
              can improve the healthcare industry. I am always looking for ways
              to incorporate technology into healthcare to improve patient
              outcomes and make medical care more accessible to everyone.
            </p>
            <br />
            <p>
              If you&#39;re interested in collaborating on a project or just
              want to connect, feel free to reach out to me. I&#39;m always open
              to new opportunities and challenges!
            </p>
          </div>
          <div className="md:w-1/2 px-4">
            <h1 className="text-center text-2xl font-bold mb-10 md:text-center">
              My skills
            </h1>

            <div className="grid grid-cols-4 gap-5  ">
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
                        width="60"
                        height="60"
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
