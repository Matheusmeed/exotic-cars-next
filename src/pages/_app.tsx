import { GlobalStyle } from "shared";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  );
}

export default MyApp;
