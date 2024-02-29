import '@mantine/core/styles.css'
import React from 'react'
import {MantineProvider, MantineProviderProps} from "@mantine/core";
import {theme} from "../theme";

const WritProvider = ({children, ...props}: MantineProviderProps) => {
  return (
    <MantineProvider forceColorScheme="dark" theme={theme} {...props}>
      {children}
    </MantineProvider>
  );
};

export {WritProvider};