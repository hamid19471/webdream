import InteractiveIcons from "../../interactive-icons/iteractive-icons";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "jestjs",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];
export const AboutSection: React.FC = () => {
  return (
    <div className="mb-32 px-4">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-4 flex-1 w-full">
          <div>
            <h3 className="font-light text-xl uppercase leading-9 text-center lg:text-left">
              Webdream Studio
            </h3>
            <h2 className="font-bold text-4xl text-primary tracking-wide uppercase text-center lg:text-left">
              Who We Are?
            </h2>
          </div>
          <p className="leading-7 tracking-wide text-lg font-light lg:text-justify text-center pr-0 lg:pr-24 ">
            At Webdream Studio, we specialize in delivering top-tier technology
            solutions tailored to your business needs. With over a decade of
            experience, we have partnered with companies and individuals
            worldwide, providing exceptional website design, web development,
            UI/UX design, and digital marketing services.
            <br /> Our team is committed to enhancing your digital presence with
            creativity and precision. Whether you’re a small business or a large
            corporation, we offer high-quality services that ensure performance
            and scalability.
            <br /> Contact us today to learn more about our services and how we
            can help you achieve your goals.
            <br />
            We are here to use our experiences and skills to help you succeed.
          </p>
        </div>
        <div className="flex flex-1 w-full">
          <InteractiveIcons iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
};
