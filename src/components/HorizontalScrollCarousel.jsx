import { motion, useTransform, useScroll } from "framer-motion";
import { MoveDown, MoveUp } from "lucide-react";
import { Caveat } from "next/font/google";
import { useRef } from "react";

const caveat = Caveat({ subsets: ["latin"] });

const ScrollCarousel = () => {
  return (
    <div className="">
      <div className="flex h-32 items-center justify-center bg-neutral-100 dark:bg-neutral-800">
        <span className="font-semibold uppercase grid grid-cols-1 gap-y-2 place-items-center">
          Scroll down <MoveDown size={15} className="animate-bounce" />
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-32 items-center justify-center bg-neutral-100 dark:bg-neutral-800">
        <span className="font-semibold uppercase grid grid-cols-1 gap-y-2 place-items-center">
          <MoveUp size={15} className="animate-bounce" /> Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[350px] lg:h-[450px] lg:w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 flex justify-center w-full h-full items-end p-10 ">
        <div className="rounded-xl bg-white dark:bg-accent w-full h-1/2 p-4 shadow-xl">
          <h3 className="font-bold text-xl">{card.title}</h3>
          <h4 className={`font-semibold ${caveat.className}`}>
            {card.subTitle}
          </h4>
          <p className="mt-2 text-xs lg:text-lg tracking-tighter">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollCarousel;

const cards = [
  {
    url: "/about/Pic1.jpg",
    title: "Sandaldeep",
    subTitle: "Software Engineer",
    description:
      "Enthusiastic professional dedicated to delivering quality service, ensuring customer satisfaction, and driving business success.",
    id: 1,
  },
  {
    url: "/about/Pic2.jpg",
    title: "Shabnam",
    subTitle: "Co-Worker",
    description:
      " Co-worker skilled in collaboration and support, consistently contributing to team success with dedication and efficiency.",
    id: 2,
  },
  {
    url: "/about/Pic3.jpg",
    title: "Ashok Choudhary",
    subTitle: "Businessman",
    description:
      "Block Congress Sevadal Adhyaksh and businessman, expertly managing import-export operations with strategic insight and leadership.",
    id: 3,
  },
];
