import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MultipageLayout from '@/components/layouts/MultipageLayout/MultipageLayout';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import theme from '@/styles/theme';
import store from '@/redux/store';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const isSignUp = router.pathname.includes("sign");

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {
          isSignUp ?
            <>
              <Component {...pageProps} />
            </>
          :
            <MultipageLayout>
              <Component {...pageProps} />
            </MultipageLayout> 
        }
      </ThemeProvider>
    </Provider>
  )
}

export default App;