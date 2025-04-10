
// Event data types
export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface PastEvent {
  title: string;
  date: string;
  location: string;
  image: string;
}

// Upcoming FINMEET events
export const finmeetEvents: Event[] = [
  {
    id: 1,
    title: 'FINMEET',
    date: 'February 8, 2025',
    location: 'Delhi',
    description: 'Professional Networking & Knowledge Exchange',
    image: '/lovable-uploads/delhi.jpg'
  },
  {
    id: 2,
    title: 'FINMEET',
    date: 'April 12, 2025',
    location: 'Delhi',
    description: 'Industry Insights & Collaboration',
    image: '/lovable-uploads/delhi.jpg'
  },
  {
    id: 3,
    title: 'FINMEET',
    date: 'June 14, 2025',
    location: 'Bangalore',
    description: 'National Conference & Workshops',
    image: '/lovable-uploads/blr.jpg'
  },
  {
    id: 4,
    title: 'FINMEET - Family Outing',
    date: 'August 15-17, 2025',
    location: 'Hyderabad',
    description: 'Family Outing & Networking',
    image: '/lovable-uploads/hyderabad.jpg'
  },
  {
    id: 5,
    title: 'FINMEET',
    date: 'October 11, 2025',
    location: 'Mumbai',
    description: 'National Conference',
    image: '/lovable-uploads/bombay.jpg'
  },
  {
    id: 6,
    title: 'FINMEET',
    date: 'December 13, 2025',
    location: 'Indore',
    description: 'Professional Meet',
    image: '/lovable-uploads/indore.jpg'
  }
];

// Upcoming FINFLIX events
export const finflixEvents: Event[] = [
  {
    id: 7,
    title: 'FINFLIX',
    date: 'January 18, 2025',
    location: 'Online',
    description: 'Virtual Insights Session',
    image: '/lovable-uploads/79fc5afc-d83b-4e95-b069-2626e8e2e0ff.png'
  },
  {
    id: 8,
    title: 'FINFLIX',
    date: 'March 8, 2025',
    location: 'Online',
    description: 'Financial Analysis & Trends',
    image: '/lovable-uploads/139c2ef1-41be-4d70-a9cc-38103ffc547a.png'
  },
  {
    id: 9,
    title: 'FINFLIX',
    date: 'May 10, 2025',
    location: 'Online',
    description: 'Financial Planning Workshop',
    image: '/lovable-uploads/0a591c00-b9af-49fb-ad48-2625800bd6c3.png'
  },
  {
    id: 10,
    title: 'FINFLIX',
    date: 'July 12, 2025',
    location: 'Online',
    description: 'Market Analysis & Predictions',
    image: '/lovable-uploads/79fc5afc-d83b-4e95-b069-2626e8e2e0ff.png'
  },
  {
    id: 11,
    title: 'FINFLIX',
    date: 'November 8, 2025',
    location: 'Online',
    description: 'Financial Case Studies',
    image: '/lovable-uploads/0a591c00-b9af-49fb-ad48-2625800bd6c3.png'
  }
];

// Special events
export const specialEvents: Event[] = [
  {
    id: 12,
    title: 'FINNOTSAV',
    date: 'January 9-11, 2026',
    location: 'Lonavala',
    description: 'Annual Grand Event',
    image: '/lovable-uploads/139c2ef1-41be-4d70-a9cc-38103ffc547a.png'
  }
];

// Past events
export const pastEvents: PastEvent[] = [
  {
    title: 'FINMEET',
    date: 'June 2023',
    location: 'Pune',
    image: '/lovable-uploads/42e4b216-1597-4926-bb1b-86e890cbeeeb.png'
  },
  {
    title: 'FINMEET',
    date: 'July 2023',
    location: 'Raipur',
    image: '/lovable-uploads/79fc5afc-d83b-4e95-b069-2626e8e2e0ff.png'
  },
  {
    title: 'FINMEET',
    date: 'August 2023',
    location: 'Surat',
    image: '/lovable-uploads/0a591c00-b9af-49fb-ad48-2625800bd6c3.png'
  },
  {
    title: 'FINMEET',
    date: 'September 2023',
    location: 'Hyderabad',
    image: '/lovable-uploads/e57c76a9-d8d2-4e59-8883-e68fa520eecb.png'
  },
  {
    title: 'FINMEET',
    date: 'October 2023',
    location: 'Mumbai',
    image: '/lovable-uploads/d66f8199-f0e9-4091-9af2-db766ac646c0.png'
  },
  {
    title: 'FINMEET',
    date: 'December 2023',
    location: 'Bangalore',
    image: '/lovable-uploads/4e084f73-1940-48ad-b228-a15028189d9f.png'
  },
  {
    title: 'FINMEET',
    date: 'January 2024',
    location: 'Delhi',
    image: '/lovable-uploads/009eb2bd-d27e-4631-a492-dddd019da8d9.png'
  },
  {
    title: 'FINNOTSAV',
    date: 'February 2024',
    location: 'Lonavala',
    image: '/lovable-uploads/139c2ef1-41be-4d70-a9cc-38103ffc547a.png'
  },
  {
    title: 'FINMEET',
    date: 'April 2024',
    location: 'Mumbai',
    image: '/lovable-uploads/cd3ea0f7-6032-42c9-8194-b97305243880.png'
  }
];
