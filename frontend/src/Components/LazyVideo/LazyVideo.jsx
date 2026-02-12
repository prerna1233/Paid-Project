import React, { useRef, useEffect, useState } from 'react';
import './LazyVideo.css';

const LazyVideo = ({ 
  src, 
  poster, 
  className, 
  autoPlay = false, 
  muted = true, 
  loop = false, 
  playsInline = true, 
  preload = "none",
  style = {},
  ...props 
}) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Delay initial load to allow critical content to render first
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' 
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (observer && videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [shouldLoad]);

  // Detect mobile and connection speed
  const [videoSrc, setVideoSrc] = useState(src);
  const [canAutoplay, setCanAutoplay] = useState(autoPlay);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection?.effectiveType === '2g' || connection?.effectiveType === '3g';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Disable autoplay on slow connections or reduced motion
    if (isSlowConnection || prefersReducedMotion) {
      setCanAutoplay(false);
    }

    // Use mobile-optimized version if available
    if (isMobile && src.includes('home-hero')) {
      // For now, keep same source, but structure is ready for mobile versions
      setVideoSrc(src);
    }
  }, [src, autoPlay]);

  if (!shouldLoad) {
    return (
      <div 
        className={`video-placeholder ${className || ''}`}
        style={{ 
          backgroundImage: poster ? `url(${poster})` : 'none',
          ...style 
        }}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay={isInView && canAutoplay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={preload}
      style={style}
      aria-label={props['aria-label'] || 'Background video'}
      {...props}
    >
      {isInView && <source src={videoSrc} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
};

export default LazyVideo;
