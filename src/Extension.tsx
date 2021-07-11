import React from 'react';

interface Props{
    
}

 const Extension: React.FC<Props> = (props) => {
  return(
    <>
    <div className="lg:hidden px-3 flex justify-between my-14 mx-5 font-semibold">
      <h1 className="text-xl">{props.children}</h1>
      <svg className="w-8 h-8" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" ><path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path><circle fill="transparent" cx="50%" cy="50%" r="75%"></circle></svg>
    </div>
    </>
  );
}
Extension.defaultProps = {}
export default Extension;