import React from "react";
import Coffee from "./Coffee.webp";

interface Props {
    title: string;
}

const Favsection: React.FC<Props> = (props) => {
  return (
    <div className="md:block hidden w-full h-72  bg-Primary-400">
      <div className="w-full flex justify-center items-center">
        <div className="w-2/5 flex justify-end">
          <img className="w-96 h-56" src={Coffee} alt="none" />
        </div>
        <div className="flex flex-col w-2/5 space-y-4 justify-center items-start">
          <div className="text-2xl font-bold">{props.title}</div>
          <div className="text-base font-medium">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
Favsection.defaultProps = {};
export default Favsection;
