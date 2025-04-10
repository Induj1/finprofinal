
import React from 'react';
import { Mail } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const RefundPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-8 text-center">Refund Policy</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="mb-4 text-lg">Thank you for shopping at www.finprointernational.com</p>
            
            <h2 className="text-xl font-bold mb-3 text-finpro-red">Non-tangible irrevocable goods ("Digital products")</h2>
            <p className="mb-4">We do not issue refunds for non-tangible irrevocable goods ("digital products") once the order is confirmed and the product is sent.</p>
            
            <p className="mb-6">We recommend contacting us for assistance if you experience any issues receiving or downloading our products.</p>
            
            <div className="bg-gray-50 p-6 rounded-md mb-6">
              <h3 className="font-bold mb-2">Contact us for any issues:</h3>
              <a href="mailto:indiafinpro@gmail.com" className="text-finpro-red hover:underline flex items-center gap-2">
                <Mail className="w-5 h-5" />
                indiafinpro@gmail.com
              </a>
            </div>
            
            <p>If you have any questions about our Returns and Refunds Policy, please contact us at: <a href="mailto:indiafinpro@gmail.com" className="text-finpro-red hover:underline">indiafinpro@gmail.com</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
