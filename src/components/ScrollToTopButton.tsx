import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
  }, []);

  //função para rolar a página até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        // biome-ignore lint/a11y/useButtonType: <explanation>
        <button
          onClick={scrollToTop}
          className="fixed bottom-14 bg-blue-300 right-8 p-3 rounded-full shadow-lg hover:bg-blue-500 transition-all duration-500" 
        >
          <KeyboardDoubleArrowUpIcon />
        </button>
      )}
    </div>
  );
};
