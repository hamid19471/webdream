import Image from "next/image";
import { Button } from "../../button";
import Particles from "../../particles/particles";

export const HeroSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-left bg-home-image h-screen -translate-y-24 bg-no-repeat bg-cover lg:bg-contain bg-center lg:bg-right">
        <div className="lg:container h-full flex flex-col justify-center lg:items-start items-center bg-black/60 xl:bg-black/30">
          <Particles className="absolute inset-0 opacity-55" />
          <div className="relative flex flex-col gap-4 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
              Webdream Studio
            </h1>
            <p className="lg:text-xl tracking-wide font-light text-white leading-7 text-justify lg:w-[600px] w-full px-4 lg:px-0">
              Stand out from your competition. We are the digital agency partner
              you need, and will deliver the results you deserve. Webdream with
              over 10 years in the market and helping brands with digital
              marketing and web development services.
            </p>
            <Image
              src={"/images/glasses.png"}
              alt="webdream studio"
              width={60}
              height={300}
              className="absolute -top-12 right-0"
            />
            <div className="flex gap-3 mt-8 items-center justify-center lg:justify-start">
              <Button variant="primary" size="large">
                Our Portfolio
              </Button>
              <Button variant="base" size="large">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
