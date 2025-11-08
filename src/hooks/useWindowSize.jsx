import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 744) {
        setDevice("mobile");
      } else if (width <= 1236) {
        setDevice("tablet");
      } else {
        setDevice("pc");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}
