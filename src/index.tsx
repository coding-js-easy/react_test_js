import * as React from "react";

import { Auth0Provider } from "@auth0/auth0-react";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import { theme } from "./styles/theme";

const clientId = import.meta.env.VITE_APP_AUTH0_CLIENTID as string;
const auth0Domain = import.meta.env.VITE_DOMAIN as string;
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={auth0Domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
          <App />
        </ChakraProvider>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
