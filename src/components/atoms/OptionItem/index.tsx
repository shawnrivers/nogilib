import * as React from "react";
import styles from "./optionitem.module.scss";
import { Link } from "gatsby";
import { animated, useSpring, config } from "react-spring";

interface OptionItemProps {
  to: string;
  children: React.ReactNode;
  handleClick?(): void;
}

export const OptionItem = ({ to, children, handleClick }: OptionItemProps) => {
  const [isMouseHovered, setMouseHover] = React.useState(false);

  const fade = useSpring({
    borderBottomWidth: isMouseHovered ? "2px" : "0px",
    borderBottomColor: isMouseHovered
      ? "rgba(89, 89, 89, 1)"
      : "rgba(89, 89, 89, 0)",
    config: config.gentle,
  });

  const liProps = React.useMemo(
    () =>
      handleClick
        ? {
            onClick: handleClick,
            onMouseEnter: () => setMouseHover(true),
            onMouseLeave: () => setMouseHover(false),
          }
        : {
            onMouseEnter: () => setMouseHover(true),
            onMouseLeave: () => setMouseHover(false),
          },
    [handleClick]
  );

  return (
    <li {...liProps}>
      <Link to={to}>
        <animated.span style={fade} className={styles.text}>
          {children}
        </animated.span>
      </Link>
    </li>
  );
};
