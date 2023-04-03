import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SlideUp';

const projects = [
  {
    name: 'Nature Sights',
    description:
      'Nature Sights is a web application that allows users to book tours and view information about available tours.',
    image: '/nature-sights.png',
    alt: 'nature-sights-website',
    github: 'https://github.com/chamaraperera-dev/naturesights',
    link: 'https://app.naturesights.com/',
  },
  {
    name: 'Pig Game',
    description:
      'Pig is a simple dice game first described in print in John Scarne in 1945.',
    image: '/pig-game.png',
    alt: 'pig-game-website',
    github: 'https://github.com/chamaraperera-dev/pig-game',
    link: 'https://start-pig-game.netlify.app/',
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="my-32">
        <h1 className="text-center font-bold text-4xl"> Projects</h1>
        <hr className="w-6 h-1 mx-auto mt-4 mb-6 bg-teal-500 border-0 rounded"></hr>
        <div className="flex flex-col space-y-28"></div>

        {projects.map((project, id) => {
          return (
            <div key={id}>
              <SlideUp offset="-300px 0px">
                <div className="flex flex-col  md:flex-row md:space-x-12 ">
                  <div className="mt-8 md:w-1/2">
                    <Link
                      href={project.link}
                      target="_blank"
                      aria-label={project.alt}
                    >
                      <Image
                        src={project.image}
                        alt={project.alt}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70 cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="mt-20 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-8 text-neutral-600 dark:text-white">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        aria-label={project.alt}
                      >
                        {' '}
                        <BsGithub
                          size={30}
                          className="hover:translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>

                      <Link
                        href={project.link}
                        target="_blank"
                        aria-label={project.alt}
                      >
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
