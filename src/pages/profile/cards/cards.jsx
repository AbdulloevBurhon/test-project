import { motion } from "framer-motion";

import CardList from "./cardList";
import { cards } from "./cardsData";
import { container, item } from "./cardsMotion";
import { Link } from "react-router-dom";
function Cards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 gap-3 sm:gap-4"
    >
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div key={index} variants={item}>
            <Link to={card.path}>
              <CardList
                title={card.title}
                icon={<Icon size={26} />}
                color={card.color}
              />
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default Cards;
