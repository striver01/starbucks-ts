import React from 'react';
import RoundLink from './RoundLink';

interface Props{
 
}

 const Herosection: React.FC<Props> = (props) => {
  return(
    <div className="md:hidden bg-hero1 w-full aspect-w-3 aspect-h-4 bg-cover">
      <div className="px-4 py-5 text-center">
                <h1 className="text-2xxl font-semibold pb-4">FREE COFFEE <br></br> IS A TAP AWAY </h1>
                <p className="pb-8 text-base">Join now to start earning Rewards.</p>
                <RoundLink href="https://google.com" bg="green" theme="white">Join in the app</RoundLink>
                <div className="py-8 text-base"><a href="https://google.com" className="text-base underline hover:no-underline">Or join online</a></div>
            </div>
    </div>
  );
}
Herosection.defaultProps = {}
export default Herosection;