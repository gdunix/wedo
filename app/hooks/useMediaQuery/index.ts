import useMediaQuery from "./useMediaQuery";
const useIsMobile = (): Boolean => {
  return useMediaQuery("(max-width: 640px)");
};

export { useIsMobile };
