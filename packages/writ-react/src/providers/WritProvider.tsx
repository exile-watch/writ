import { MantineProvider, type MantineProviderProps } from "@mantine/core";
import React from "react";
import { theme } from "../theme";

const WritProvider = ({ children, ...props }: MantineProviderProps) => {
  return (
    <MantineProvider forceColorScheme="dark" theme={theme} {...props}>
      {children}
    </MantineProvider>
  );
};

export { WritProvider };
