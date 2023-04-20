import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MultipageLayout from '@/components/layouts/MultipageLayout/MultipageLayout';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import theme from '@/styles/theme';
import store from '@/redux/store';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MultipageLayout>
          <Component {...pageProps} />
        </MultipageLayout>
      </ThemeProvider>
    </Provider>
  )
}

export default App;