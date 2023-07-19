import { useRootLoaderData } from "./useRootLoaderData";

export const useCookie = () => {
  const { cookie } = useRootLoaderData();

  return cookie;
};
