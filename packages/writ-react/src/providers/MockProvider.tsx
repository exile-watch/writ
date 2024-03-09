import React from 'react'
import {HeadlessMantineProvider, HeadlessMantineProviderProps} from "@mantine/core";
import {theme} from "../theme";

const MockWritProvider = ({children, ...props}: HeadlessMantineProviderProps) => {
  return (
    <HeadlessMantineProvider theme={theme} {...props}>
      {children}
    </HeadlessMantineProvider>
  );
};

export {MockWritProvider};