'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PrimarySourceLibrary({ unitNumber, sources }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePeriod, setActivePeriod] = useState('all');
  const [selectedSource, setSelectedSource] = useState(null);
  const [filteredSources, setFilteredSources] = useState(sources);

  // Filter sources based on search term, category, and period
  const filterSources = (term, category, period) => {
    let results = sources;
    
    // Apply search filter
    if (term) {
      const searchLower = term.toLowerCase();
      results = results.filter(source => 
        source.title.toLowerCase().includes(searchLower) || 
        source.author.toLowerCase().includes(searchLower) ||
        source.description.toLowerCase().includes(searchLower) ||
        (source.content && source.content.toLowerCase().includes(searchLower))
      );
    }
    
    // Apply category filter
    if (category !== 'all') {
      results = results.filter(source => source.category === category);
    }
    
    // Apply period filter
    if (period !== 'all') {
      results = results.filter(source => source.period === period);
    }
    
    setFilteredSources(results);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterSources(term, activeCategory, activePeriod);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    filterSources(searchTerm, category, activePeriod);
  };

  // Handle period change
  const handlePeriodChange = (period) => {
    setActivePeriod(period);
    filterSources(searchTerm, activeCategory, period);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">Primary Source Library</h2>
        <Link href={`/units/${unitNumber}`} className="text-primary hover:text-primary-dark">
          Back to Unit {unitNumber}
        </Link>
      </div>
      
      {!selectedSource ? (
        <>
          <div className="mb-6">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search primary sources..."
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
            
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Filter by Type:</h3>
                <div className="flex flex-wrap gap-2">
                  {['all', 'text', 'image', 'map', 'letter', 'speech', 'treaty', 'law'].map(category => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-3 py-1 rounded-md text-sm ${
                        activeCategory === category 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Filter by Period:</h3>
                <div className="flex flex-wrap gap-2">
                  {['all', 'renaissance', 'reformation', 'absolutism', 'enlightenment', 'revolution', 'industrial', 'modern'].map(period => (
                    <button
                      key={period}
                      onClick={() => handlePeriodChange(period)}
                      className={`px-3 py-1 rounded-md text-sm ${
                        activePeriod === period 
                          ? 'bg-secondary text-white' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {filteredSources.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No primary sources match your search. Try different keywords or filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSources.map((source, index) => (
                <div 
                  key={index}
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedSource(source)}
                >
                  {source.thumbnail && (
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={source.thumbnail} 
                        alt={source.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{source.title}</h3>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full capitalize">
                        {source.category}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">
                      {source.author}, {source.year}
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-2">{source.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={() => setSelectedSource(null)}
              className="flex items-center gap-1 text-primary hover:text-primary-dark"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Library
            </button>
            
            {selectedSource.url && (
              <a 
                href={selectedSource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm px-3 py-1 bg-primary text-white rounded-md hover:bg-primary-dark"
              >
                View Original Source
              </a>
            )}
          </div>
          
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-1">{selectedSource.title}</h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
              <span>By {selectedSource.author}</span>
              <span>•</span>
              <span>{selectedSource.year}</span>
              <span>•</span>
              <span className="capitalize">{selectedSource.category}</span>
              {selectedSource.period && (
                <>
                  <span>•</span>
                  <span className="capitalize">{selectedSource.period} Period</span>
                </>
              )}
            </div>
            
            {selectedSource.image && (
              <div className="mb-6">
                <img 
                  src={selectedSource.image} 
                  alt={selectedSource.title}
                  className="max-w-full h-auto rounded-md border border-gray-200"
                />
                {selectedSource.imageCaption && (
                  <div className="text-sm text-gray-500 mt-2">{selectedSource.imageCaption}</div>
                )}
              </div>
            )}
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Description:</h4>
              <p className="text-gray-700">{selectedSource.description}</p>
            </div>
            
            {selectedSource.content && (
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Content:</h4>
                <div className="p-4 bg-gray-50 rounded-md border border-gray-200 prose max-w-none">
                  {selectedSource.content.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Historical Context:</h4>
              <p className="text-gray-700">{selectedSource.context}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Significance:</h4>
              <p className="text-gray-700">{selectedSource.significance}</p>
            </div>
            
            {selectedSource.questions && (
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Discussion Questions:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedSource.questions.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {selectedSource.relatedSources && (
              <div>
                <h4 className="font-semibold mb-2">Related Primary Sources:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedSource.relatedSources.map((related, index) => (
                    <div key={index} className="p-3 border rounded-md hover:bg-gray-50">
                      <h5 className="font-medium">{related.title}</h5>
                      <div className="text-sm text-gray-500">{related.author}, {related.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
