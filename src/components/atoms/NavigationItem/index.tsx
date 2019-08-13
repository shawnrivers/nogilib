import * as React from "react";
import styles from "./navigationitem.module.scss";
import { animated, useSpring } from "react-spring";
import { LocalizedLink } from "components/atoms/LocalizedLink";

interface NavigationItemProps {
  type: "link" | "button";
  children: React.ReactNode;
  to?: string;
  className?: string;
  handleClick?(): void;
}

export const NavigationItem = ({
  type,
  children,
  to,
  handleClick,
  className,
}: NavigationItemProps) => {
  const [isMouseHovered, setMouseHover] = React.useState(false);

  const fade = useSpring({
    backgroundColor: isMouseHovered ? "rgba(89,89,89,1)" : "rgba(89,89,89,0)",
    color: isMouseHovered ? "#ffffff" : "#595959",
  });

  const mouseEventProps = {
    onMouseEnter: () => setMouseHover(true),
    onMouseLeave: () => setMouseHover(false),
  };

  if (type === "link") {
    return to ? (
      <LocalizedLink to={to} className={className ? className : undefined}>
        <animated.div
          {...mouseEventProps}
          style={fade}
          className={styles.container}
        >
          {children}
        </animated.div>
      </LocalizedLink>
    ) : (
      <animated.span
        {...mouseEventProps}
        style={fade}
        className={`${styles.container}${className ? " " + className : ""}`}
      >
        {children}
      </animated.span>
    );
  }

  return handleClick ? (
    <animated.button
      {...mouseEventProps}
      onClick={handleClick}
      style={fade}
      className={`${styles.container}${className ? " " + className : ""}`}
    >
      {children}
    </animated.button>
  ) : (
    <animated.span
      {...mouseEventProps}
      style={fade}
      className={`${styles.container}${className ? " " + className : ""}`}
    >
      {children}
    </animated.span>
  );
};
