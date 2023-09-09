
//project imports
import AdvertisementPage from './Pages/AdvertisementPage'

import { createTheme , responsiveFontSizes} from "@mui/material/styles";

import { ThemeProvider } from 'styled-components';

function App() {

  let theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
  });

  theme = responsiveFontSizes(theme)




  return (
    <ThemeProvider theme={theme}>
      <AdvertisementPage />
    </ThemeProvider>
  );
}

export default App;
