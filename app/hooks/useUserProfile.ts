import { useRootLoaderData } from "./useRootLoaderData";

export const useUserProfile = () => {
  const { profile } = useRootLoaderData();

  return profile;
};
