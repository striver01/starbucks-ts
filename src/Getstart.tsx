import React from "react";

interface Props {
    title: string;
    children: string;
}

const Getstart: React.FC<Props> = (props) => {
  return (
    <div className="text-center mt-16 tracking-tight">
      <h1 className="text-2xl font-semibold">{props.title}</h1>
      <p className="text-xxl tracking-normal pt-4 font-normal">
        {props.children}
      </p>
    </div>
  );
};
Getstart.defaultProps = {};
export default Getstart;
