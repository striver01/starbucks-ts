import React from 'react';

interface Props{
 
}

 const Form: React.FC<Props> = (props) => {
  return(
    <div className="my-24">
        <div className="w-11/12 md:w-2/4 m-auto">
            <h1 className="font-semibold text-2xl md:text-3xl text-gray-900 py-5">Star Codes</h1>
            <p className="text-base md:text-lg">Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.</p>
            <input className="border border-gray-500 rounded-md w-full mt-5 h-12 text-gray-900 p-4 text-xl" type="text" value="Enter Your Star Code"/>
            <a href="https://google.com"className="border text-sm font-semibold py-1.5  px-4 rounded-3xl mt-5 float-right">Submit</a>
            <div className="mt-24">
                <p className="text-sm">Have a receipt but don't have a code?</p>
                <p className="text-sm">Go to <span className="text-Primary-500 underline">starbucks-stars.com</span> opens in new window to upload your receipt and collect your Stars.</p>
            </div>
            <div className="mt-24 space-y-3">
                <h1 className="text-2xl font-semibold text-gray-800">Questions?</h1>
                <p className="text-sm font-normal tracking-wide">We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <span className="text-primary-old-800 underline">right over here</span>.</p>
            </div>
        </div>
    </div>
  );
}
Form.defaultProps = {}
export default Form;