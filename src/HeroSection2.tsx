import React from "react";
import BigStar from "./BigStar.png";
import RoundLink from "./RoundLink";

interface Props {}

const Herosection2: React.FC<Props> = (props) => {
  return (
    <div className="hidden md:block tracking-wide leading-8">
      <div className="flex bg-Primary-400">
        <div className="w-1/2 aspect-h-7 aspect-w-13">
          <div className="mx-10 flex flex-col justify-center">
            <h1 className="text-4xl font-semibold text-wide">
              FREE COFFEE <br /> IS A TAP AWAY
            </h1>
            <h3 className="text-xl text-wide mt-8 font-medium">
              Join now to start earning Rewards.
            </h3>
            <div className="pt-6">
              <RoundLink theme="white" bg="green">
                Join now
              </RoundLink>
            </div>
            <p className="text-xl text-medium mt-4">
              Or{" "}
              <span className="underline hover:no-underline text-xl text-medium">
                join in the app
              </span>{" "}
              for the best experience
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover object-left"
            src={BigStar}
            alt="none"
          />
        </div>
      </div>
    </div>
  );
};
Herosection2.defaultProps = {};
export default Herosection2;
