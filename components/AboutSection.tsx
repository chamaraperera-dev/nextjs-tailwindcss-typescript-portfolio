import { RiH1 } from 'react-icons/ri';
import Image from 'next/image';

const skills = [
  {
    link: 'https://www.w3.org/html/',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    alt: 'html5',
  },
  {
    link: 'https://www.w3schools.com/css/',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    alt: 'css3',
  },
  {
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    alt: 'javascript',
  },
  {
    link: 'https://www.typescriptlang.org/',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    alt: 'typescript',
  },
  {
    link: 'https://www.figma.com/',
    src: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
    alt: 'figma',
  },
  {
    link: 'https://getbootstrap.com',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
    alt: 'bootstrap',
  },
  {
    link: 'https://tailwindcss.com/',
    src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    alt: 'tailwind',
  },
  {
    link: 'https://sass-lang.com',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    alt: 'sass',
  },
  {
    link: 'https://gulpjs.com',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg',
    alt: 'gulp',
  },
  {
    link: 'https://pugjs.org',
    src: 'https://cdn.worldvectorlogo.com/logos/pug.svg',
    alt: 'pug',
  },
  {
    link: 'https://reactjs.org/',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    alt: 'react',
  },
  {
    link: 'https://redux.js.org',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    alt: 'redux',
  },
  {
    link: 'https://nextjs.org/',
    src: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
    alt: 'nextjs',
  },
  {
    link: 'https://www.mongodb.com/',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
    alt: 'mongodb',
  },
  {
    link: 'https://www.mysql.com/',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    alt: 'mysql',
  },
  {
    link: 'https://www.npmjs.com',
    src: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-tile.svg',
    alt: 'npm',
  },
  {
    link: 'https://nodejs.org',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    alt: 'nodejs',
  },
  {
    link: 'https://expressjs.com',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
    alt: 'express',
  },
  {
    link: 'https://postman.com',
    src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    alt: 'postman',
  },
  {
    link: 'https://jestjs.io',
    src: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg',
    alt: 'jest',
  },
  {
    link: 'https://parceljs.org',
    src: 'https://www.vectorlogo.zone/logos/parceljs/parceljs-icon.svg',
    alt: 'parcel',
  },
  {
    link: 'https://git-scm.com/',
    src: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    alt: 'git',
  },
  {
    link: 'https://www.docker.com/',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
    alt: 'docker',
  },
  {
    link: 'https://heroku.com',
    src: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg',
    alt: 'heroku',
  },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12  md:pt-16 md:pb-16">
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
              stack for web development, as well as HTML, CSS, JavaScript and
              TypeScript. My expertise in these technologies allows me to create
              dynamic and efficient web applications that are user-friendly and
              accessible.
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
                    <a href={item.link} target="_blank" rel="noreferrer">
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
