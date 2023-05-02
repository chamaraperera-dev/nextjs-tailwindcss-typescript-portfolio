import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  const date = new Date();
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-2 mb-4 md:mb-0">
          <a
            href="https://github.com/chamaraperera-dev"
            rel="noreferrer"
            target="_blank"
            aria-label="github"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/chamaraperera"
            rel="noreferrer"
            target="_blank"
            aria-label="twitter"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/dr-chamara-perera/"
            rel="noreferrer"
            target="_blank"
            aria-label="linkedin"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
        <div className="text-neutral-500 dark:text-neutral-100 flex flex-col items-center md:items-start">
          <div className="mb-2">© {date.getFullYear()} Chamara Perera</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
