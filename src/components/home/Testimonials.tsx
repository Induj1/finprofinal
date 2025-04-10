
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Star } from "lucide-react";
import { FadeIn, FadeInUp } from '@/components/ui/Animation';

const testimonials = [
  {
    quote: "The Financial Empowerment Hub has completely transformed my approach to personal finance. The resources are incredible!",
    author: "Anonymous",
    role: "Small Business Owner"
  },
  {
    quote: "As someone who always struggled with money management, this platform gave me the confidence to take control of my finances.",
    author: "Anonymous",
    role: "Teacher"
  },
  {
    quote: "The workshops and events have connected me with like-minded professionals and opened new opportunities in my career.",
    author: "Anonymous",
    role: "Marketing Executive"
  },
  {
    quote: "I've attended many financial workshops, but none as engaging and practical as the ones offered through this platform.",
    author: "Anonymous",
    role: "Healthcare Professional"
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their financial journey with our resources and community.
            </p>
          </div>
        </FadeInUp>

        <FadeIn>
          <Tabs defaultValue="tab1" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {testimonials.map((_, index) => (
                <TabsTrigger key={`trigger-${index + 1}`} value={`tab${index + 1}`}>
                  Testimonial {index + 1}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {testimonials.map((testimonial, index) => (
              <TabsContent 
                key={`tab${index + 1}`} 
                value={`tab${index + 1}`}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-lg font-medium">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
