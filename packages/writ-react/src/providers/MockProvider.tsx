import {
  HeadlessMantineProvider,
  type HeadlessMantineProviderProps,
} from "@mantine/core";
import React from "react";
import { theme } from "../theme";

const MockWritProvider = ({
  children,
  ...props
}: HeadlessMantineProviderProps) => {
  return (
    <HeadlessMantineProvider theme={theme} {...props}>
      {children}
    </HeadlessMantineProvider>
  );
};

export { MockWritProvider };
