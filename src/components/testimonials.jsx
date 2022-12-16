import Client from "../assets/C4BA8175922F448FBE3979A38B10DE53.jpg";
import ClientRounded from "../assets/client rounded.png";

const Testimonials = () => {
  return (
    <div
      className="mx-6 py-14 md:mx-0 md:p-20 md:px-10 lg:px-[unset] lg:py-44"
      id="testimonials"
    >
      <div className="relative mx-auto flex max-w-[805px] rounded-lg bg-dark lg:gap-x-6">
        <div className="absolute top-[15px] left-[15px] -z-10 hidden h-full w-full rounded-lg bg-accent sm:block" />
        <div className="ml-5 mr-4 flex items-center font-poppins text-white sm:ml-6 sm:mr-5 md:mx-11 md:max-w-[280px] lg:mx-14">
          <div className="py-6 sm:py-8">
            <div className="mb-4 text-[15px] font-medium md:mb-10 md:text-[25px] lg:text-[35px]">
              <span>
               conocimientos y habilidades tecnicas
              </span>
            </div>
            <div className=" ">
              <div className="flex-none">
                <span>Html5
Ccs3, Flexbox, Css Grid
Javascript, JQuery
Responsive Web Design (Diseño adaptable)
Desarrollo web basado en estándares W3C
UX/UI - Experiencia de Usuario. Interfaz de Usuario.
Accesibilidad y Usabilidad
Programas:  Visual Studio Code
Frameworks: Bootstrap 4
Control de versiones: Git/GitHub</span>

                
              </div>
              <div className="flex-none self-end">
                <div className="text-[10px] font-bold md:text-lg lg:text-2xl">
                  <span></span>
                </div>
                <div className="text-[7px] md:text-xs lg:text-sm">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex rounded-r-lg bg-white">
          <img
            src={Client}
            alt="Client"
            className="max-w-[120px] self-end sm:max-w-[160px] md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
