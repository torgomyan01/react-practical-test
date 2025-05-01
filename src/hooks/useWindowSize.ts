import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { detectDevice } from "../store/utilsSlice";
import { devices } from "../utils/constant";

export const useWindowSize = () => {
  const dispatch = useDispatch();

  const handleResize = () => {
    const width = window.innerWidth;

    const findDevices = devices.find((item) => width >= item.size);

    if (findDevices) {
      dispatch(
        detectDevice({
          width,
          height: window.innerHeight,
          mode: findDevices.name,
        }),
      );
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
};
