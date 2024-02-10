import {createTheme, MantineProvider} from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const WritProvider = ({children}) => {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  );
};

export {WritProvider};