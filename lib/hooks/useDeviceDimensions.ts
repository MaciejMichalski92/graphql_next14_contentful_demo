import { screens } from "@/src/constants";
import { useEffect, useState } from "react";

/**
 * I'm using dimensions calculated on client side, not to trigger SSR on every request (opt out from user agent middleware to see user device).
 * Additionally, I'm setting the dimentions only once, this approach, has it's limitations (it's not dynamic), but it's more  performant.
 */
export const useDeviceDimensions = (): {
  isMobile: boolean;
  width: number;
  height: number;
} => {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [deviceDimentions, setDeviceDimentions] = useState<{
    width: number;
    height: number;
  }>({ width: window.innerWidth, height: window.innerHeight });

  const calculateDimentions = () => {
    setDeviceDimentions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    setIsMobile(deviceDimentions.width <= screens.tablet);
    window.addEventListener("resize", calculateDimentions);

    return window.removeEventListener("resize", calculateDimentions);
  }, []);

  return {
    isMobile,
    width: deviceDimentions.width,
    height: deviceDimentions.height,
  };
};
