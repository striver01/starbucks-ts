import React from "react";
import Getstart from "./Getstart";
import Cardsec from "./Cardsec";
import GreenLink from "./GreenLink";
import Endless from "./Endless";
interface Props {}

const Cards: React.FC<Props> = (props) => {
  return (
    <div className="bg-Primary-200 py-2">
      <Getstart title="Cash or card, you earn Stars">
        No matter how you pay, you can earn Stars with your morning coffee.
        Those Stars add up to (really delicious) Rewards.
      </Getstart>
      <div className="border-b lg:my-14 border-gray-300 lg:flex xl:px-12 xl:space-x-14 ">
        <Cardsec title="1★ per dollar">Pay as you go</Cardsec>
        <div className="md:flex xl:w-64 md:justify-start md:space-x-10">
            <Endless link="bg-card1" title="Scan and pay separately">
            Use cash or credit/debit card at the register.
            </Endless>
            <Endless link="bg-card2" title="Save payment in the app">
            Check-out faster by saving a credit/debit card or PayPal to your
            account. You’ll be able to order ahead or scan and pay at the register
            in one step.
            </Endless>
        </div>
      </div>
      <div className="border-b lg:my-14 border-gray-300 lg:flex xl:px-12 xl:space-x-14 ">
        <Cardsec title="2★ per dollar">Add funds in the app</Cardsec>
        <div className="md:flex xl:w-64 md:justify-start md:space-x-10">
            <Endless link="bg-card3" title="Preload">
            To save time and earn Stars twice as fast, add money to your digital
            Starbucks Card using any payment option. Scan and pay in one step or
            order ahead in the app.
            </Endless>
            <Endless link="bg-card4" title="Register your gift card">
            Then use it to pay through the app. You can even consolidate balances
            from multiple cards in one place.
            </Endless>
        </div>
      </div>
      <div className="pb-10 lg:my-14 lg:flex xl:px-12 xl:space-x-14">
        <Cardsec title="Up to 3★ per dollar">
          With Starbucks® Rewards Visa® Card
        </Cardsec>
        <div className=" xl:w-64 md:flex md:justify-start md:space-x-10">
        <Endless link="bg-card5" title="Earn Stars even faster">
          Earn Stars on all purchases you make with our
          <GreenLink>credit card</GreenLink> in and outside of Starbucks. Earn 1
          Star per $1 when you digitally preload your Starbucks Card with your
          Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay
          with that preloaded Starbucks Card.
        </Endless>
        </div>
      </div>
    </div>
  );
};
Cards.defaultProps = {};
export default Cards;
