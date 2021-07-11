import React from 'react';

interface Props{
 
}

 const GreenLink: React.FC<Props> = (props) => {
  return(
    <a href="https://google.com" className="text-Primary-500 underline hover:no-underline">{props.children}</a>
  );
}
GreenLink.defaultProps = {}
export default GreenLink;