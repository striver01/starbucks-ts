import React from 'react';

interface Props{
    title: string;
}

 const FootContent: React.FC<Props> = (props) => {
  return(
    <div className="flex-1 pr-3 py-5">
      <p className="font-bold py-2 text-gray-400">{props.title}</p>
      <p className="text-sm">{props.children}</p>
    </div>
  );
}
FootContent.defaultProps = {}
export default FootContent;