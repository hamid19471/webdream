import { TabsItems } from "@/types/tabs.types";
import { Tabs } from "../../tabs/tabs";
import Image from "next/image";
const tabs: TabsItems[] = [
  {
    title: "CMS",
    value: "CMS",
    content: (
      <div className="w-full overflow-hidden relative h-max xl:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-black to-black border border-primary/40">
        <h3>Most Popular CMS</h3>
        <p className="font-light text-lg text-content my-8">
          Our company specializes in the design and development of
          high-performance websites using popular CMS platforms such as
          WordPress, Drupal, and WooCommerce and etc. We are dedicated to
          delivering exceptional quality, ensuring that each site is not only
          visually stunning but also optimized for speed and functionality. Our
          expert team customizes solutions to meet your unique business needs,
          providing seamless user experiences and robust security features.
          Trust us to bring your digital vision to life with the latest
          technology and best practices in the industry.
        </p>
        <div className="flex gap-5 items-center justify-between mt-12 px-28">
          <Image
            src={"/icons/wordpress.svg"}
            alt="WordPress"
            width={50}
            height={50}
          />
          <Image
            src={"/icons/drupal.svg"}
            alt="WordPress"
            width={50}
            height={50}
          />
          <Image
            src={"/icons/woocommerce.svg"}
            alt="WordPress"
            width={50}
            height={50}
          />
          <Image
            src={"/icons/magento.svg"}
            alt="WordPress"
            width={50}
            height={50}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Front end",
    value: "Front end",
    content: (
      <div className="w-full overflow-hidden relative h-max xl:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-black to-black border border-primary/40">
        <h3>Front end</h3>
        <p className="font-light text-lg text-content my-8">
          Our front-end development services focus on creating dynamic,
          responsive, and visually appealing user interfaces using cutting-edge
          technologies. We leverage the power of HTML, CSS, and JavaScript
          frameworks like React, Angular, and etc to build interactive and
          engaging web applications. Our team ensures cross-browser
          compatibility and mobile optimization, delivering seamless experiences
          across all devices. With a commitment to innovation and quality, we
          bring your ideas to life, enhancing user engagement and driving
          business success.
        </p>
        <div className="flex gap-5 items-center justify-between mt-12 px-28">
          <Image src={"/icons/html.svg"} alt="HTML" width={50} height={50} />
          <Image src={"/icons/css.svg"} alt="HTML" width={50} height={50} />
          <Image
            src={"/icons/javascript.svg"}
            alt="HTML"
            width={50}
            height={50}
          />
          <Image src={"/icons/react.svg"} alt="HTML" width={50} height={50} />
          <Image src={"/icons/vue.svg"} alt="HTML" width={50} height={50} />
          <Image src={"/icons/angular.svg"} alt="HTML" width={50} height={50} />
        </div>
      </div>
    ),
  },
  {
    title: "Backend",
    value: "Backend",
    content: (
      <div className="w-full overflow-hidden relative h-max xl:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-black to-black border border-primary/40">
        <h3>Back end</h3>
        <p className="font-light text-lg text-content my-8">
          Our back-end development services are designed to build robust,
          scalable, and secure server-side solutions. We utilize powerful
          technologies such as Node.js, Python, Ruby on Rails and PHP to create
          efficient APIs and manage databases. Our team focuses on ensuring high
          performance and seamless integration with front-end interfaces,
          providing a solid foundation for your applications. With expertise in
          cloud services and microservices architecture, we deliver tailored
          solutions that support your business growth and enhance operational
          efficiency.
        </p>
        <div className="flex gap-5 items-center justify-between mt-12 px-28">
          <Image src={"/icons/nodejs.svg"} alt="HTML" width={50} height={50} />
          <Image src={"/icons/php.svg"} alt="HTML" width={50} height={50} />
          <Image src={"/icons/laravel.svg"} alt="HTML" width={50} height={50} />
          <Image src={"/icons/ruby.svg"} alt="HTML" width={50} height={50} />
        </div>
      </div>
    ),
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="mb-12">
          <p className="font-light text-xl uppercase leading-9">Technologies</p>
          <h2 className="font-bold text-4xl text-primary tracking-wide uppercase">
            we work with
          </h2>
        </div>
        <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-16 mb-48">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
};
