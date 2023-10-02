import { BackgroundImg } from '@Components/common/Layout/style';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@Styles/GlobalStyle';
import { theme } from '@Styles/theme';
import { PersistentStorage } from '@Utils/persistentStorage';
import Routers from './router';

export const persistentStorage = new PersistentStorage('JWTToken');

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BackgroundImg src="https://user-images.githubusercontent.com/81420856/271770176-7f68943d-1d14-488a-b424-44dd9082f6e6.png" />
    <Routers />
  </ThemeProvider>
);

export default App;
