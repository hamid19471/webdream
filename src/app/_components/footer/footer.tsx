import Image from "next/image";
import { Button } from "../button";
import { BorderAnimation } from "../border-animation/border-animation";

export const Footer: React.FC = () => {
  return (
    <div className="w-full px-2 overflow-hidden">
      <div className="relative container bg-black border border-primary/20 rounded-xl py-12 px-8 grid grid-cols-1 xl:grid-cols-3 items-start gap-4 mb-8">
        <BorderAnimation size={190} duration={18} />
        <div className=" lg:w-[300px] flex flex-col gap-6">
          <Image
            src={"/images/logo.png"}
            alt="webdream studio"
            width={160}
            height={120}
          />
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Webdream Studio
            </h2>
            <p className="font-light text-lg">
              Provice high-quality digital marketing and web development
              services to grow your business.
            </p>
            <Button variant="primary" isOutline={true} className="mt-6">
              Book Free Consultation
            </Button>
          </div>
          <div></div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
            Services
          </h3>
          <ul className="flex flex-col items-start gap-2">
            <li className="hover:text-primary cursor-pointer transition-all duration-300">
              Digital Marketing
            </li>
            <li className="hover:text-primary cursor-pointer transition-all duration-300">
              Web Development
            </li>
            <li className="hover:text-primary cursor-pointer transition-all duration-300">
              App Development
            </li>
            <li className="hover:text-primary cursor-pointer transition-all duration-300">
              Mobile App Development
            </li>
            <li className="hover:text-primary cursor-pointer transition-all duration-300">
              Search Engine Optimization
            </li>
            <li className="hover:text-primary cursor-pointer transition-all duration-300">
              UI/UX Design
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
            Contact
          </h3>
          <ul className="flex flex-col items-start gap-6">
            <li>
              <h4 className="font-bold text-primary text-lg flex gap-2 items-center">
                <span>
                  <Image
                    src={"/images/canada-flag.svg"}
                    alt=""
                    width={20}
                    height={20}
                  />
                </span>
                Canada
              </h4>
              <div>Address: 123 Fake Street,Toronto, Canada</div>
              <div>Phone Number: 123-456-7890</div>
            </li>
            <li>
              <h4 className="font-bold text-primary text-lg flex items-center gap-2">
                <span>
                  <Image
                    src={"/images/australia-flag.svg"}
                    alt=""
                    width={20}
                    height={20}
                  />
                </span>
                Australia
              </h4>
              <div>Address: 123 Fake Street,Melburn, Australia</div>
              <div>Phone Number: 123-456-7890</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
