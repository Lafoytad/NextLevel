"use client";

import React, { useState, useEffect } from "react";

// Хук для проверки media
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Проверяем доступность window
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      setMatches(media.matches);

      const handleChange = () => setMatches(media.matches);

      media.addEventListener("change", handleChange);

      return () => media.removeEventListener("change", handleChange);
    }
  }, [query]);

  return matches;
};
