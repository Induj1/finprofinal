
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EventRegistration from "./pages/EventRegistration";
import MemberGallery from "./pages/MemberGallery";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import UpcomingEvents from "./pages/UpcomingEvents";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import RefundPolicy from "./pages/RefundPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<UpcomingEvents />} />
        <Route path="/events/:eventId" element={<EventRegistration />} />
        <Route path="/gallery" element={<MemberGallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
