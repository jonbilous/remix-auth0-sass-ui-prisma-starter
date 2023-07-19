import type { DataFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { SaasProvider } from "@saas-ui/react";
import { theme } from "@saas-ui/theme";
import brand from "brand";
import { useColorModeManager } from "./chakra/colorMode";
import EmotionDocumentWrapper from "./chakra/components/EmotionDocumentWrapper";
import { getUserProfile } from "./utils/auth/profile.server";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: brand.name,
  viewport: "width=device-width,initial-scale=1",
});

export const loader = async (ctx: DataFunctionArgs) => {
  const profile = await getUserProfile(ctx);

  const cookie = ctx.request.headers.get("Cookie") ?? "";

  return json({ profile, cookie });
};

export default function App() {
  const { manager, colorMode } = useColorModeManager();

  return (
    <EmotionDocumentWrapper colorMode={colorMode}>
      <SaasProvider colorModeManager={manager} theme={theme}>
        <Outlet />
      </SaasProvider>
    </EmotionDocumentWrapper>
  );
}
