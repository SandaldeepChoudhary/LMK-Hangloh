import { Description } from "@radix-ui/react-dialog";
import { motion, useTransform, useScroll } from "framer-motion";
import { Caveat } from "next/font/google";
import { useRef } from "react";

const caveat = Caveat({ subsets: ["latin"] });

const ScrollCarousel = () => {
  return (
    <div>
      <div className="flex h-10 items-center justify-center">
        <span className="font-bold text-4xl ">About Us</span>
      </div>
      <HorizontalScrollCarousel />
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
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
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
          <p className="mt-2">{card.description}</p>
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
    subTitle: "Shop Owner",
    description:
      "Block Congress Sevadal Adhyaksh and businessman, expertly managing import-export operations with strategic insight and leadership.",
    id: 3,
  },
];
