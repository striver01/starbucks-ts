import React from "react";

interface Props {
  link: string;
  title: string;
}

const GetStartStep: React.FC<Props> = (props) => {
  return (
    <div className="flex md:flex-col md:w-1/3 md:mx-8 md:justify-between">
      <div className="w-20 md:m-auto">
        <div
          className={"w-12 h-12 mx-4 my-6 bg-cover object-cover " + props.link}
        ></div>
      </div>
      <div className="mt-5 tracking-wide">
        <p className="text-base lg:text-xl pb-4 font-semibold">{props.title}</p>
        <h5 className="text-xxl lg:text-base py-2">{props.children}</h5>
      </div>
    </div>
  );
};
GetStartStep.defaultProps = {};
export default GetStartStep;
