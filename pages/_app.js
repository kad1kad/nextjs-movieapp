import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme, VStack, Box } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#0e1515",
        color: "rgb(209 213 219)",
      },
    }),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
