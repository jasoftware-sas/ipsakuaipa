import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { AkuaipaLogo } from "../assets/logos/AkuaipaLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Contactenos",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <AkuaipaLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  I.P.S. Anas Akuaipa
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Eslogan de la IPS
              </p>
              {/* <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="#"
                >
                  <InstagramIcon />
                </a>
              </div> */}
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 text-center">
            Hecho con el ❤️. <a className="text-customGreen2" href="http://www.jasoftwaresas.com/" target="_blank">Jasoftware SAS</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
