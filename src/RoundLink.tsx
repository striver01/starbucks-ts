import React from "react";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    theme: 'white' | 'black';
    bg: string;
}

const RoundLink: React.FC<Props> = (props) => {
  const themeClasses =
    props.theme === "white"
      ? "text-white border-white border"
      : "text-black border-black border";
  let bg = "trans";
  if (props.bg === "trans") bg = "";
  else if (props.bg === "green") bg = "bg-green-600";
  else bg = "bg-black";
  return (
    <div className="flex-shrink-0">
      <a
        className={
          bg +
          " text-sm md:text-base tracking-wide flex-shrink-0 px-4 py-1.5 lg:py-2 font-bold rounded-full " +
          themeClasses
        }
        {...props}
      >
        {props.children}
      </a>
    </div>
  );
};
RoundLink.defaultProps = {};
export default RoundLink;
