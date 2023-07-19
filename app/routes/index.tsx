import { Box, Flex } from "@chakra-ui/react";
import { AppShell, NavItem, Sidebar, SidebarSection } from "@saas-ui/react";
import brand from "brand";

import { ColorModeSwitcher } from "~/components/ColorModeSwitcher";

export default function Page() {
  return (
    <AppShell
      height={"100vh"}
      navbar={
        <Flex
          alignItems={"center"}
          borderBottomWidth="1px"
          py="2"
          px="4"
          as="header"
        >
          <Box mr={"auto"}>{brand.name}</Box>

          <ColorModeSwitcher />
        </Flex>
      }
      sidebar={
        <Sidebar>
          <SidebarSection>
            <NavItem>Home</NavItem>
          </SidebarSection>
        </Sidebar>
      }
    >
      <Box as="main" flex="1" py="2" px="4" overflowY="auto">
        Your application content
      </Box>
    </AppShell>
  );
}
