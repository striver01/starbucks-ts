import React from 'react';

interface Props{
    link: string;
    title: string;
}

 const Funsection: React.FC<Props> = (props) => {
  return(
    <div className="flex md:justify-between md:flex-col md:w-1/3">
      <div className="w-20 md:w-full md:m-auto">
        <div
          className={"w-28 h-28 mx-5 my-6 md:m-auto bg-cover object-cover " + props.link}
        ></div>
      </div>
      <div className="mt-5 mx-16 md:mx-10 tracking-wide">
        <p className="text-base md:text-xl md:font-bold font-semibold">{props.title}</p>
        <h5 className="text-xxl md:text-base py-2">{props.children}</h5>
      </div>
    </div>
  );
}
Funsection.defaultProps = {}
export default Funsection;