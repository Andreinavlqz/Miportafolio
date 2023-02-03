import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo-AV.png";

const Navbar = ({ handleSidebar }) => {
  const navbarMenu = [
    {
      name: "about me",
      link: "#",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "abilities",
      link: "#abilities",
    },
  ];

  return (
    <div className="flex items-center justify-between px-10 pt-[45px]">
      <div className="flex gap-x-[100px]">
        <a href={"/"}>
        <img src={Logo}
     className="h-12 rounded-md md:h-16 rounded-lg lg:h-20 rounded-full xl:h-24"
     alt="Logo"
          />
        </a>
        <div className="hidden items-center gap-x-[50px] font-roboto font-semibold text-white/80 lg:flex lg:text-base xl:text-xl">
          {navbarMenu.map((menu, i) => (
            <a href={menu.link} key={i} className="hover:text-white">
              {menu.name}
            </a>
          ))}
        </div>
      </div>
      <div className="hidden gap-x-[30px] text-white lg:flex">
        <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-dark opacity-80 hover:opacity-100">
          <FontAwesomeIcon icon={faPhone} className="-rotate-90" />
        </div>
        <a
          href={"/#contact-me"}
          className="rounded-lg bg-accent/90 px-4 py-2 font-poppins font-bold hover:bg-accent lg:text-base xl:text-lg"
        >
          Contact Me
        </a>
      </div>
      <div className="block lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-white"
          onClick={handleSidebar}
        />
      </div>
    </div>
  );
};

export default Navbar;
