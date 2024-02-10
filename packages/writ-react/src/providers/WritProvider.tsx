import React from 'react'
import {MantineProvider} from "@mantine/core";

const WritProvider = ({children}) => {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  );
};

export {WritProvider};