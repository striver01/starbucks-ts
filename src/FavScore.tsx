import React from 'react';

interface Props{
    act: "green" | "";
}

 const FavScore: React.FC<Props> = (props) => {
    const active = props.act === "green"? "border-b-4 border-Primary-500":"";
  return(
    
    <div className={"text-mlg text-center font-semibold pb-4 px-2 w-full "+active}>{props.children}<span className="text-Primary-gold">★</span></div>
    
  );
}
FavScore.defaultProps = {}
export default FavScore;