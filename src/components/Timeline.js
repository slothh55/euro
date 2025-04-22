'use client';

import { useState, useEffect } from 'react';

export default function Timeline({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [sortOrder, setSortOrder] = useState('chronological'); // 'chronological' or 'reverse'
  
  useEffect(() => {
    let result = events;
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = events.filter(event => 
        event.year.toLowerCase().includes(term) || 
        event.title.toLowerCase().includes(term) || 
        event.description.toLowerCase().includes(term) ||
        (event.significance && event.significance.toLowerCase().includes(term))
      );
    }
    
    // Apply sorting
    result = [...result].sort((a, b) => {
      // Extract numeric year for comparison
      const yearA = parseInt(a.year.split(' ')[0]);
      const yearB = parseInt(b.year.split(' ')[0]);
      
      if (sortOrder === 'chronological') {
        return yearA - yearB;
      } else {
        return yearB - yearA;
      }
    });
    
    setFilteredEvents(result);
  }, [events, searchTerm, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'chronological' ? 'reverse' : 'chronological');
  };

  return (
    <div className="timeline-container">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <button 
          onClick={toggleSortOrder}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
        >
          <span>{sortOrder === 'chronological' ? 'Oldest to Newest' : 'Newest to Oldest'}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-5 w-5 transition-transform ${sortOrder === 'chronological' ? '' : 'transform rotate-180'}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      {filteredEvents.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No events match your search. Try different keywords.
        </div>
      ) : (
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {/* Timeline events */}
          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <div key={index} className="relative pl-14">
                {/* Timeline dot */}
                <div className="absolute left-5 top-1.5 w-2.5 h-2.5 rounded-full bg-primary transform -translate-x-1/2"></div>
                
                {/* Event content */}
                <div 
                  className={`p-4 border rounded-lg transition-all ${
                    selectedEvent === index 
                      ? 'bg-blue-50 border-blue-200 shadow-md' 
                      : 'bg-white hover:bg-gray-50 cursor-pointer'
                  }`}
                  onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <span className="text-sm font-medium px-2 py-1 bg-gray-100 rounded-full">{event.year}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-2">{event.description}</p>
                  
                  {selectedEvent === index && event.significance && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <h4 className="font-semibold text-sm text-gray-500 mb-1">Historical Significance:</h4>
                      <p className="text-gray-700">{event.significance}</p>
                    </div>
                  )}
                  
                  {selectedEvent !== index && (
                    <button className="text-sm text-primary hover:text-primary-dark mt-1">
                      Show significance
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <style jsx>{`
        .timeline-container {
          position: relative;
          padding: 1rem 0;
        }
      `}</style>
    </div>
  );
}
