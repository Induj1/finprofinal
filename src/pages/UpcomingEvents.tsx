
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Import data
import { 
  finmeetEvents, 
  finflixEvents, 
  specialEvents, 
  Event 
} from '@/data/eventsData';

// Import components
import EventHero from '@/components/events/EventHero';
import EventTabs from '@/components/events/EventTabs';
import EventCalendar from '@/components/events/EventCalendar';
import EventsTable from '@/components/events/EventsTable';
import CTASection from '@/components/events/CTASection';

const UpcomingEvents = () => {
  const [activeTab, setActiveTab] = useState('finmeet');
  
  // Determine which events to display based on the active tab
  let activeEvents: Event[];
  switch(activeTab) {
    case 'finmeet':
      activeEvents = finmeetEvents;
      break;
    case 'finflix':
      activeEvents = finflixEvents;
      break;
    case 'special':
      activeEvents = specialEvents;
      break;
    default:
      activeEvents = finmeetEvents;
  }

  // All events for the table
  const allEvents = [...finmeetEvents, ...finflixEvents, ...specialEvents];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <EventHero />
      
      {/* Event Categories */}
      <EventTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Events Calendar */}
      <EventCalendar activeEvents={activeEvents} />
      
      {/* Events Table */}
      <EventsTable events={allEvents} />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default UpcomingEvents;
