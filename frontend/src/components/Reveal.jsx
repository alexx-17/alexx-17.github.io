import React from "react";
import useInView from "../hooks/useInView";

// Wrapper that applies a fade-in-up effect once an element scrolls into view.
const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...rest }) => {
  const [ref, inView] = useInView();
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={ref}
      style={style}
      className={`fade-up ${inView ? "is-visible" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
