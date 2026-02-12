import React, { useRef, useEffect, useState } from 'react';

const LazyBlogCard = ({ children, minHeight = '400px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px' // Load slightly before entering viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (observer && cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={cardRef} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? (
        children
      ) : (
        <div 
          className="blog-card-skeleton" 
          style={{ 
            height: minHeight,
            background: '#f5f1ed',
            borderRadius: '4px',
            border: '1px solid #e8e5e0',
            animation: 'pulse 1.5s ease-in-out infinite'
          }}
        />
      )}
    </div>
  );
};

export default LazyBlogCard;
