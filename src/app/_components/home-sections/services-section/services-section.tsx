import { Tabs } from "../../tabs/tabs";

const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-black to-black border border-primary/40">
        <p>Product Tab</p>
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-black to-black border border-primary/40">
        <p>Services tab</p>
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-black to-black border border-primary/40">
        <p>Playground tab</p>
      </div>
    ),
  },
  {
    title: "Content",
    value: "content",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-black to-black border border-primary/40">
        <p>Content tab</p>
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-b from-black to-black border border-primary/40">
        <p>Random tab</p>
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
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-16 mb-48">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
};
