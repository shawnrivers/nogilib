import * as React from "react";
import { motion } from "framer-motion";
import { LocalizedLink } from "components/atoms/locales/LocalizedLink";
import { Message } from "components/atoms/Message";

const fade = {
  hovered: {
    color: "#595959",
    fontWeight: 700,
    borderBottomColor: "rgba(89,89,89,1)",
    borderBottomWidth: "3px",
  },
  selected: {
    color: "#e887a3",
    fontWeight: 700,
    borderBottomColor: "rgba(89,89,89,0)",
    borderBottomWidth: "0px",
  },
  normal: {
    color: "#595959",
    fontWeight: 500,
    borderBottomColor: "rgba(89,89,89,0)",
    borderBottomWidth: "0px",
  },
};

interface PageTabProps {
  text: string;
  to: string;
  isSelected: boolean;
  className?: string;
}

export const PageTab = ({ text, to, isSelected, className }: PageTabProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.li
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={isSelected ? "selected" : isHovered ? "hovered" : "normal"}
      variants={fade}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      className={className}
    >
      <LocalizedLink to={to}>
        <Message text={text} />
      </LocalizedLink>
    </motion.li>
  );
};
