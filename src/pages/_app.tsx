import { GlobalStyle } from "shared";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "store";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;
