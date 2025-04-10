import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Calendar, Search, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Understanding Financial Literacy: A Comprehensive Guide",
    excerpt: "Explore the fundamentals of financial literacy and learn how to make informed financial decisions for a secure future.",
    author: "Anonymous",
    date: "April 3, 2023",
    category: "Financial Education",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Investment Strategies for Beginners",
    excerpt: "Discover simple investment strategies that can help beginners build wealth and achieve financial goals over time.",
    author: "Anonymous",
    date: "March 21, 2023",
    category: "Investing",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Building an Emergency Fund: Why and How",
    excerpt: "Learn the importance of having an emergency fund and practical steps to build one that provides financial security.",
    author: "Anonymous",
    date: "March 15, 2023",
    category: "Saving",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Debt Management: Strategies for Becoming Debt-Free",
    excerpt: "Explore effective strategies for managing and eliminating debt to achieve financial freedom and peace of mind.",
    author: "Anonymous",
    date: "March 5, 2023",
    category: "Debt Management",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Retirement Planning 101: Start Early, Retire Comfortably",
    excerpt: "Understand the basics of retirement planning and why starting early can make a significant difference in your retirement lifestyle.",
    author: "Anonymous",
    date: "February 28, 2023",
    category: "Retirement",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Mastering the Art of Budgeting",
    excerpt: "Discover practical budgeting techniques that can help you take control of your finances and achieve your financial goals.",
    author: "Anonymous",
    date: "February 20, 2023",
    category: "Budgeting",
    image: "/placeholder.svg"
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Financial Empowerment Blog</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Insights, tips, and strategies to help you navigate your financial journey with confidence.
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Input 
                type="text" 
                placeholder="Search for articles..."
                className="pl-10 py-6 bg-white/10 text-white placeholder:text-white/70 border-white/20 focus-visible:ring-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
            </div>
          </div>
        </section>
        
        {/* Blog Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex justify-center mb-8 flex-wrap gap-2">
                <TabsTrigger value="all">All Posts</TabsTrigger>
                <TabsTrigger value="financial-education">Financial Education</TabsTrigger>
                <TabsTrigger value="investing">Investing</TabsTrigger>
                <TabsTrigger value="saving">Saving</TabsTrigger>
                <TabsTrigger value="debt">Debt Management</TabsTrigger>
                <TabsTrigger value="retirement">Retirement</TabsTrigger>
                <TabsTrigger value="budgeting">Budgeting</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Other tab contents would filter posts by category */}
              <TabsContent value="financial-education" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts
                    .filter(post => post.category === "Financial Education")
                    .map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                </div>
              </TabsContent>
              
              {/* Similar filter for other categories */}
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-1">
              <User className="h-3 w-3" />
            </div>
            <span>{post.author}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        <Link to={`/blogs/${post.id}`}>
          <Button variant="link" className="p-0 h-auto font-semibold text-blue-600">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
