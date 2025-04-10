
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Calendar, Tag } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch the blog post by ID
  // For now, we'll use a dummy blog post
  const blogPost = {
    title: "Understanding Financial Literacy: A Comprehensive Guide",
    author: "Anonymous",
    date: "April 3, 2023",
    categories: ["Financial Education", "Personal Finance"],
    content: `
      <p class="mb-4">Financial literacy is the possession of skills and knowledge that allows an individual to make informed and effective decisions with all of their financial resources. It encompasses a variety of financial topics, including personal finance management, budgeting, investing, insurance, retirement planning, and tax management.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Why Financial Literacy Matters</h2>
      
      <p class="mb-4">Financial literacy is essential for several reasons:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">It enables individuals to make wise financial decisions and avoid costly mistakes.</li>
        <li class="mb-2">It helps people prepare for financial emergencies and build long-term wealth.</li>
        <li class="mb-2">It reduces the risk of falling victim to financial fraud and predatory lending practices.</li>
        <li class="mb-2">It contributes to overall financial well-being and reduces financial stress.</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Key Components of Financial Literacy</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Budgeting</h3>
      <p class="mb-4">A budget is a financial plan that outlines estimated income and expenses for a specified period. Effective budgeting allows individuals to allocate their resources efficiently, prioritize spending, and save for future goals.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Saving and Investing</h3>
      <p class="mb-4">Saving involves setting aside money for future use, while investing is the act of committing money to an endeavor with the expectation of generating a profit. Both are crucial aspects of financial planning and wealth building.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Debt Management</h3>
      <p class="mb-4">Understanding different types of debt, interest rates, and repayment strategies is essential for maintaining financial health. Responsible debt management includes avoiding high-interest debt, making timely payments, and having a plan to reduce and eventually eliminate debt.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Insurance</h3>
      <p class="mb-4">Insurance protects individuals and their assets from financial loss due to unexpected events. Common types of insurance include health, life, auto, and homeowners or renters insurance.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Retirement Planning</h3>
      <p class="mb-4">Planning for retirement involves setting retirement goals, estimating future expenses, and implementing a savings and investment strategy to achieve those goals. It often includes utilizing retirement accounts such as 401(k)s and IRAs.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">How to Improve Financial Literacy</h2>
      
      <p class="mb-4">Improving financial literacy is a lifelong journey. Here are some strategies to enhance your financial knowledge:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Read books, articles, and blogs about personal finance.</li>
        <li class="mb-2">Take courses or attend workshops on financial topics.</li>
        <li class="mb-2">Follow financial experts and thought leaders on social media.</li>
        <li class="mb-2">Use financial management apps and tools.</li>
        <li class="mb-2">Consult with financial advisors or planners.</li>
        <li class="mb-2">Practice managing your finances and learn from experience.</li>
      </ul>
      
      <p class="mb-4">Remember, financial literacy is not about knowing everything but about continuously learning and making informed decisions based on your knowledge and understanding.</p>
    `,
    image: "/placeholder.svg"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <Link to="/blogs">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          <img 
            src={blogPost.image} 
            alt={blogPost.title} 
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-4xl font-bold mb-6">{blogPost.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                <User className="h-4 w-4" />
              </div>
              <span>{blogPost.author}</span>
            </div>
            
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{blogPost.date}</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {blogPost.categories.map((category, index) => (
                <span key={index} className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {category}
                </span>
              ))}
            </div>
          </div>
          
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
