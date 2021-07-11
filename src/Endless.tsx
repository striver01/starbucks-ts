import React from 'react';

interface Props{
    link: string;
    title: string;
}

 const Endless: React.FC<Props> = (props) => {
  return(
    <div className="flex items-center">
      <div className="w-28">
        <div
          className={"w-28 h-28 bg-cover " + props.link}
        ></div>
      </div>
      <div className="ml-5 mt-5 tracking-wide md:w-60 lg:w-72">
        <p className="text-base xl:text-xl font-semibold">{props.title}</p>
        <h5 className="text-xxl xl:text-base py-2">{props.children}</h5>
      </div>
    </div>
  );
}
Endless.defaultProps = {}
export default Endless;