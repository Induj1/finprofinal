
import React from 'react';

interface EventTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const EventTabs: React.FC<EventTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <section className="py-8 bg-white sticky top-0 z-20 shadow-sm border-b border-gray-100">
      <div className="container-custom">
        <div className="flex overflow-x-auto scrollbar-hidden space-x-2 pb-2">
          <button
            onClick={() => setActiveTab('finmeet')}
            className={`px-5 py-2.5 rounded-full font-montserrat font-medium whitespace-nowrap transition-colors ${
              activeTab === 'finmeet' 
                ? 'bg-finpro-red text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            FINMEET Events
          </button>
          <button
            onClick={() => setActiveTab('finflix')}
            className={`px-5 py-2.5 rounded-full font-montserrat font-medium whitespace-nowrap transition-colors ${
              activeTab === 'finflix' 
                ? 'bg-finpro-red text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            FINFLIX Online Events
          </button>
          <button
            onClick={() => setActiveTab('special')}
            className={`px-5 py-2.5 rounded-full font-montserrat font-medium whitespace-nowrap transition-colors ${
              activeTab === 'special' 
                ? 'bg-finpro-red text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Special Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventTabs;
