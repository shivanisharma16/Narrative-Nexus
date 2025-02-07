import { Button } from '@/components/ui/button';
import React from 'react';

function Billing() {
  return (
    <div className="container mx-auto py-16 my-5">
      <h1 className="text-3xl font-bold mb-8 text-center">Upgrade With Monthly Plan</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 ml-20">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Free</h2>
          <p className="text-lg font-bold mb-2">$0/month</p>
          <ul className="list-disc pl-6">
            <li>10,000 Words/Month</li>
            <li>50+ Content Templates</li>
            <li>Unlimited Downloads & Copy</li>
            <li>1 Month of History</li>
          </ul>
          <Button className="text-center mt-4">Currently Active Plan</Button>
        </div>

        <div className="mr-20 bg-primary text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Monthly</h2>
          <p className="text-lg font-bold mb-2">$9.99/month</p>
          <ul className="list-disc pl-6">
            <li>100,000 Words/Month</li>
            <li>50+ Template Access</li>
            <li>Unlimited Downloads & Copy</li>
            <li>1 Year of History</li>
          </ul>
          <Button className="mt-4 bg-white hover:bg-purple-200 text-primary font-semibold py-2 px-4 rounded">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
