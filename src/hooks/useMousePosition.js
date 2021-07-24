// https://gist.github.com/whoisryosuke/99f23c9957d90e8cc3eb7689ffa5757c
import { useState, useEffect } from "react";


const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [mouseSpeed, setMouseSpeed] = useState({ x: 0, y: 0 });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.x, y: ev.y });
    setMouseSpeed({
      x: ev.movementX,
      y: ev.movementY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return { mousePosition, mouseSpeed };
};

export default useMousePosition;