'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VideoResources({ unitNumber, videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter videos based on search term and category
  const filterVideos = (term, filter) => {
    let results = videos;
    
    // Apply search filter
    if (term) {
      const searchLower = term.toLowerCase();
      results = results.filter(video => 
        video.title.toLowerCase().includes(searchLower) || 
        video.description.toLowerCase().includes(searchLower) ||
        video.creator.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply category filter
    if (filter !== 'all') {
      results = results.filter(video => video.category === filter);
    }
    
    setFilteredVideos(results);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterVideos(term, activeFilter);
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    filterVideos(searchTerm, filter);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">Video Resources</h2>
        <Link href={`/units/${unitNumber}`} className="text-primary hover:text-primary-dark">
          Back to Unit {unitNumber}
        </Link>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={handleSearchChange}
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
          
          <div className="flex flex-wrap gap-2">
            {['all', 'lecture', 'review', 'documentary'].map(filter => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-3 py-1 rounded-md text-sm ${
                  activeFilter === filter 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {selectedVideo ? (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
            <button 
              onClick={() => setSelectedVideo(null)}
              className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              Back to List
            </button>
          </div>
          
          <div className="aspect-video mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
              title={selectedVideo.title}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <span>{selectedVideo.creator}</span>
              <span>•</span>
              <span>{selectedVideo.duration}</span>
              <span>•</span>
              <span className="capitalize">{selectedVideo.category}</span>
            </div>
            <p className="text-gray-700">{selectedVideo.description}</p>
          </div>
          
          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Key Topics Covered:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {selectedVideo.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
          
          {selectedVideo.notes && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <h4 className="font-semibold mb-2">Study Notes:</h4>
              <p>{selectedVideo.notes}</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          {filteredVideos.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No videos match your search. Try different keywords or filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredVideos.map((video, index) => (
                <div 
                  key={index}
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative">
                    <img 
                      src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium mb-1 line-clamp-2">{video.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{video.creator}</span>
                      <span className="mx-1">•</span>
                      <span className="capitalize">{video.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
