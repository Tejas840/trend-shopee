import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/productContext.jsx";
import { FilterContextProvider } from "./context/filterContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-dzfrr5e5chm4c5tk.us.auth0.com"
      clientId="U8ptmmioAyLzAHjgaaQ2z7AxqNwif1cR"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);
