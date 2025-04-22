'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StudyGuides({ unitNumber, guides }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLevel, setActiveLevel] = useState('all');
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [filteredGuides, setFilteredGuides] = useState(guides);

  // Filter guides based on search term and level
  const filterGuides = (term, level) => {
    let results = guides;
    
    // Apply search filter
    if (term) {
      const searchLower = term.toLowerCase();
      results = results.filter(guide => 
        guide.title.toLowerCase().includes(searchLower) || 
        guide.description.toLowerCase().includes(searchLower) ||
        guide.topics.some(topic => topic.toLowerCase().includes(searchLower))
      );
    }
    
    // Apply level filter
    if (level !== 'all') {
      results = results.filter(guide => guide.level === level);
    }
    
    setFilteredGuides(results);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterGuides(term, activeLevel);
  };

  // Handle level change
  const handleLevelChange = (level) => {
    setActiveLevel(level);
    filterGuides(searchTerm, level);
  };

  // Download guide as PDF
  const downloadGuide = (guide) => {
    // In a real implementation, this would generate or fetch a PDF
    alert(`Downloading "${guide.title}" as PDF...`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">Study Guides</h2>
        <Link href={`/units/${unitNumber}`} className="text-primary hover:text-primary-dark">
          Back to Unit {unitNumber}
        </Link>
      </div>
      
      {!selectedGuide ? (
        <>
          <div className="mb-6">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search study guides..."
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
            
            <div>
              <h3 className="text-sm font-medium mb-2">Filter by Level:</h3>
              <div className="flex flex-wrap gap-2">
                {['all', 'basic', 'intermediate', 'advanced'].map(level => (
                  <button
                    key={level}
                    onClick={() => handleLevelChange(level)}
                    className={`px-3 py-1 rounded-md text-sm ${
                      activeLevel === level 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {filteredGuides.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No study guides match your search. Try different keywords or filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredGuides.map((guide, index) => (
                <div 
                  key={index}
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className={`h-2 ${
                    guide.level === 'basic' ? 'bg-green-500' :
                    guide.level === 'intermediate' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}></div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{guide.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                        guide.level === 'basic' ? 'bg-green-100 text-green-800' :
                        guide.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {guide.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">{guide.description}</p>
                    <div className="text-sm text-gray-500 mb-3">
                      {guide.pages} pages • {guide.estimatedTime} reading time
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {guide.topics.slice(0, 3).map((topic, topicIndex) => (
                        <span key={topicIndex} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {topic}
                        </span>
                      ))}
                      {guide.topics.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          +{guide.topics.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <button 
                        onClick={() => setSelectedGuide(guide)}
                        className="text-sm px-3 py-1 bg-primary text-white rounded-md hover:bg-primary-dark"
                      >
                        View Guide
                      </button>
                      <button 
                        onClick={() => downloadGuide(guide)}
                        className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center gap-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        PDF
                      </button>
                    </div>
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
              onClick={() => setSelectedGuide(null)}
              className="flex items-center gap-1 text-primary hover:text-primary-dark"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Study Guides
            </button>
            
            <button 
              onClick={() => downloadGuide(selectedGuide)}
              className="flex items-center gap-1 text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold">{selectedGuide.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                selectedGuide.level === 'basic' ? 'bg-green-100 text-green-800' :
                selectedGuide.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {selectedGuide.level}
              </span>
            </div>
            
            <div className="text-sm text-gray-500 mb-4">
              {selectedGuide.pages} pages • {selectedGuide.estimatedTime} reading time
            </div>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {selectedGuide.topics.map((topic, topicIndex) => (
                <span key={topicIndex} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                  {topic}
                </span>
              ))}
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Description:</h4>
              <p className="text-gray-700">{selectedGuide.description}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Contents:</h4>
              <div className="space-y-2">
                {selectedGuide.contents.map((section, index) => (
                  <div key={index} className="p-3 border rounded-md">
                    <div className="font-medium">{section.title}</div>
                    {section.subsections && (
                      <ul className="mt-2 pl-5 text-sm text-gray-600 space-y-1">
                        {section.subsections.map((subsection, subIndex) => (
                          <li key={subIndex}>{subsection}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {selectedGuide.keyPoints && (
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Points:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedGuide.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {selectedGuide.preview && (
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Preview:</h4>
                <div className="p-4 bg-gray-50 rounded-md border border-gray-200 prose max-w-none">
                  {selectedGuide.preview.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
            
            {selectedGuide.relatedGuides && (
              <div>
                <h4 className="font-semibold mb-2">Related Study Guides:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedGuide.relatedGuides.map((related, index) => (
                    <div key={index} className="p-3 border rounded-md hover:bg-gray-50">
                      <h5 className="font-medium">{related.title}</h5>
                      <div className="text-sm text-gray-500">{related.level} • {related.pages} pages</div>
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
