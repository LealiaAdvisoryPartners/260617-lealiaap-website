import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Scroll to the element with ID = hash without the '#'
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        const offset = 100; // adjust if you have a fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    } else {
      // Scroll to top smoothly if no hash
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
