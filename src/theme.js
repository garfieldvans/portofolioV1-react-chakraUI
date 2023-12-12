// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light', // Set the initial color mode
    useSystemColorMode: false, // Optionally, use the system color mode
  },
  colors: {
    // Define your color modes here
    light: {
      background: '#ffffff',
      text: '#333333',
      // Add more colors as needed
    },
    dark: {
      background: '#1441a3',
      text: '#ffffff',
      // Add more colors as needed
    },
  },
});

export default theme;