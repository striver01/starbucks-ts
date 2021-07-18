import React from 'react';
import RoundLink from './RoundLink'
interface Props{
 
}

 const Header: React.FC<Props> = (props) => {
  return(
    <div className="lg:sticky lg:top-24 sticky top-0 w-full z-10 flex justify-between items-center px-2 py-4 bg-Primary-600 text-xxl">
        <h1 className="font-bold text-white">STARBUCKS® REWARDS</h1>
        <div className="lg:hidden flex-shrink-0">
        <RoundLink href="https://facebook.com" theme="white" bg="trans">Join in the app</RoundLink>
        </div>
    </div>
  );
}
Header.defaultProps = {}
export default Header;