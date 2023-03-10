import Person from "../assets/person.png";

const Hero = () => {
  const socialMedia = [
    {
      initial: "FB",
      link: "https://facebook.com",
    },
    {
      initial: "TW",
      link: "https://twitter.com",
    },
    {
      initial: "IG",
      link: "https://instagram.com",
    },
  ];

  return (
    <div className="relative">
      <div className="inset-x-0 mt-8 flex items-center justify-center font-roboto-slab text-[50px] font-black uppercase tracking-tighter text-white md:absolute md:top-[15%] md:mt-[unset] md:text-[145px] lg:top-[10%] lg:text-[180px] xl:top-[15%] xl:text-[250px]">
        <span></span>
      </div>
      <div className="relative mx-auto flex h-full flex-col-reverse justify-center md:mt-8 md:max-w-none md:flex-row md:gap-x-6 xl:-mt-2">
        <div className="flex flex-none">
          <img
            src={Person}
            alt="Person"
            className="-mt-14 w-[250px] object-contain sm:w-[345px] md:mt-auto md:w-[400px] lg:w-[450px] xl:w-[560px]"
          />
        </div>
        <div className="relative mx-10 self-end font-poppins sm:mx-14 md:mx-0 md:pr-8 lg:pr-0 lg:pb-16">
          <div className="relative mb-4 ml-auto w-max text-2xl font-extrabold uppercase text-accent md:text-[32px] lg:mb-6 lg:text-[50px]">
            <div className="absolute top-full right-0 h-[2px] w-3/4 bg-accent md:top-[120%] lg:top-[150%]" />
            <span>
full stack developer</span>
          </div>
          <div className="mb-4 text-justify text-[13px] font-medium text-light lg:max-w-[479px] lg:text-[15px]">
            <span>
            Currently I design, new projects and web application sites, both on the client side (Front-end, UX / UI) and on the server side (Back-end).
Continuously learning and acquiring new skills based on current and future demands and technological trends in the field of design and development of web applications in general.
Passionate about the work I do, offering and contributing my knowledge, skills
and experience, as well as new ideas, solutions, customization and quality monitoring of the client and his objective in each project.
            </span>
          </div>
          <div className="text-right text-[13px] font-semibold text-accent md:mb-20 md:text-left lg:text-base">
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
          <div className="absolute top-[170%] right-0 flex flex-col items-center justify-end gap-y-[13px] gap-x-[30px] text-[15px] font-medium uppercase text-secondary md:relative md:flex-row">
            {socialMedia.map((list, i) => (
              <a
                key={i}
                href={list.link}
                target="_blank"
                className="transition-all hover:text-accent"
              >
                {list.initial}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
