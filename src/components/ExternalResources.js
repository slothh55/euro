'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ExternalResources({ unitNumber, resources }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredResources, setFilteredResources] = useState(resources);

  // Filter resources based on search term and category
  const filterResources = (term, category) => {
    let results = resources;
    
    // Apply search filter
    if (term) {
      const searchLower = term.toLowerCase();
      results = results.filter(resource => 
        resource.title.toLowerCase().includes(searchLower) || 
        resource.description.toLowerCase().includes(searchLower) ||
        resource.source.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply category filter
    if (category !== 'all') {
      results = results.filter(resource => resource.category === category);
    }
    
    setFilteredResources(results);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterResources(term, activeCategory);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    filterResources(searchTerm, category);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">External Resources</h2>
        <Link href={`/units/${unitNumber}`} className="text-primary hover:text-primary-dark">
          Back to Unit {unitNumber}
        </Link>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search resources..."
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
            {['all', 'article', 'book', 'podcast', 'website', 'primary source'].map(category => (
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
      </div>
      
      {filteredResources.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No resources match your search. Try different keywords or categories.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredResources.map((resource, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold">{resource.title}</h3>
                <div className="flex items-center">
                  <span className="text-sm px-2 py-1 bg-gray-100 rounded-full capitalize">
                    {resource.category}
                  </span>
                </div>
              </div>
              
              <div className="text-sm text-gray-500 mb-2">
                Source: {resource.source}
              </div>
              
              <p className="text-gray-700 mb-3">{resource.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {resource.tags && resource.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-3 pt-3 border-t flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {resource.difficulty && (
                    <span className="mr-3">
                      Difficulty: 
                      <span className={`ml-1 font-medium ${
                        resource.difficulty === 'beginner' ? 'text-green-600' :
                        resource.difficulty === 'intermediate' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {resource.difficulty.charAt(0).toUpperCase() + resource.difficulty.slice(1)}
                      </span>
                    </span>
                  )}
                  
                  {resource.readingTime && (
                    <span>
                      Reading time: {resource.readingTime}
                    </span>
                  )}
                </div>
                
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-1 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                >
                  View Resource
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
