import React, { useEffect, useState } from "react";

export default function ToTopButton() {
  const [visible, setVisible] = useState(false);

  const handleVisibilityChange = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibilityChange);
    return () => {
      window.removeEventListener("scroll", handleVisibilityChange);
    };
  }, []);

  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={clickHandler}
      className={`${
        visible ? " visible" : "hidden"
      } fixed bottom-8 right-8 z-50 rounded-full text-zinc-800 p-3 bg-zinc-200 shadow-lg transition-opacity hover:text-zinc-200 hover:bg-zinc-800`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
      </svg>
    </button>
  );
}
