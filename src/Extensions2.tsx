import React from 'react';

interface Props{
 
}

 const Extensions2: React.FC<Props> = (props) => {
  return(
    <div className="hidden lg:block">
      <div className="flex m-10 tracking-wide space-x-8">
        <div className="space-y-5 w-48">
          <h1 className="font-semibold text-xl">About Us</h1>
          <ul className="space-y-5">
            <li className="hover:text-gray-900 text-gray-500">Our Heritage</li>
            <li className="hover:text-gray-900 text-gray-500">Our Coffee</li>
            <li className="hover:text-gray-900 text-gray-500">Stories and News</li>
            <li className="hover:text-gray-900 text-gray-500">Investor Relations</li>
            <li className="hover:text-gray-900 text-gray-500">Policies and Standards</li>
            <li className="hover:text-gray-900 text-gray-500">Customer Service</li>
          </ul>
        </div>
        <div className="space-y-5 w-48">
          <h1 className="font-semibold text-xl">Careers</h1>
          <ul className="space-y-5">
            <li className="hover:text-gray-900 text-gray-500">Culture and Values</li>
            <li className="hover:text-gray-900 text-gray-500">Inclusion, Diversity and Equity</li>
            <li className="hover:text-gray-900 text-gray-500">College Achievement Plan</li>
            <li className="hover:text-gray-900 text-gray-500">U.S.Careers</li>
            <li className="hover:text-gray-900 text-gray-500">International Careers</li>
          </ul>
        </div>
        <div className="space-y-5 w-48">
          <h1 className="font-semibold text-xl">Social Impact</h1>
          <ul className="space-y-5">
            <li className="hover:text-gray-900 text-gray-500">Ethical Sourcing</li>
            <li className="hover:text-gray-900 text-gray-500">Leading in Sustainability</li>
            <li className="hover:text-gray-900 text-gray-500">Strenghtening Communities</li>
            <li className="hover:text-gray-900 text-gray-500">Creating Opportunities</li>
            <li className="hover:text-gray-900 text-gray-500">Global Social Impact Report</li>
          </ul>
        </div>
        <div className="space-y-5 w-48">
          <h1 className="font-semibold text-xl">For Business Partners</h1>
          <ul className="space-y-5">
            <li className="hover:text-gray-900 text-gray-500">Landlord Support Center</li>
            <li className="hover:text-gray-900 text-gray-500">Suppliers</li>
            <li className="hover:text-gray-900 text-gray-500">Corporate Gift Card Sales</li>
            <li className="hover:text-gray-900 text-gray-500">Office and Foodservice Coffee</li>
          </ul>
        </div>
        <div className="space-y-5 w-48">
          <h1 className="font-semibold text-xl">Order ans Pickup</h1>
          <ul className="space-y-5">
            <li className="hover:text-gray-900 text-gray-500">Order on the App</li>
            <li className="hover:text-gray-900 text-gray-500">Order on the Web</li>
            <li className="hover:text-gray-900 text-gray-500">Delivery</li>
            <li className="hover:text-gray-900 text-gray-500">Order and Pickup options</li>
            <li className="hover:text-gray-900 text-gray-500">Explore and Find Coffee for Home</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
Extensions2.defaultProps = {}
export default Extensions2;