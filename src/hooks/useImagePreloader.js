'use client'

import { useState, useEffect } from 'react';

const useImagePreloader = (src) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsLoaded(false);
  }, [src]);

  return isLoaded;
};

export default useImagePreloader;
