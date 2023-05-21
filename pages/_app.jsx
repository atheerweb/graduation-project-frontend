// CSS
import '@/styles/globals.css';
// Layouts
import MultipageLayout from '@/components/layouts/MultipageLayout/MultipageLayout';
// Providers
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
// Provider Values
import theme from '@/styles/theme';
import store from '@/redux/store';
// Hooks
import { useRouter } from 'next/router';
// MUI Components
import Box from '@mui/material/Box';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const isSignUp = router.pathname.includes("sign");

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box dir="rtl">
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
        </Box>
      </ThemeProvider>
    </Provider>
  )
}

export default App;