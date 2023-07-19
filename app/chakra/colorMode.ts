import { cookieStorageManagerSSR } from "@chakra-ui/react";
import { useMemo } from "react";
import { useCookie } from "~/hooks/useCookie";

const DEFAULT_COLOR_MODE: "dark" | "light" = "dark";

const CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode";

const getColorMode = (cookies: string) => {
  const match = cookies.match(
    new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`)
  );

  return match == null ? void 0 : match[2];
};

export const useColorModeManager = () => {
  const cookie = useCookie();

  return useMemo(() => {
    const parsedColor = getColorMode(cookie);

    const cookieWithDefault = parsedColor
      ? cookie
      : `${cookie}; ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`;

    return {
      manager: cookieStorageManagerSSR(cookieWithDefault),
      colorMode: parsedColor ?? DEFAULT_COLOR_MODE,
    };
  }, [cookie]);
};
