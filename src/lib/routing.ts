/**
 * Utility functions for handling language-prefixed routes
 */

type Language = "en" | "pt" | "es";

/**
 * Extract language from URL path
 * Returns the language code if found, or null if not
 */
export const getLanguageFromPath = (pathname: string): Language | null => {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === "en" || firstSegment === "pt" || firstSegment === "es") {
    return firstSegment as Language;
  }
  
  return null;
};

/**
 * Get the path without language prefix
 * e.g., "/en/about" -> "/about", "/pt/services" -> "/services"
 */
export const getPathWithoutLanguage = (pathname: string): string => {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === "en" || firstSegment === "pt" || firstSegment === "es") {
    return "/" + segments.slice(1).join("/") || "/";
  }
  
  return pathname;
};

/**
 * Build a language-prefixed path
 * e.g., buildPath("en", "/about") -> "/en/about"
 */
export const buildPath = (language: Language, path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  // Handle root path
  if (cleanPath === "" || cleanPath === "/") {
    return `/${language}`;
  }
  
  return `/${language}/${cleanPath}`;
};

