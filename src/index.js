import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

//Create a Management API to get JWT tokens

ReactDOM.render(
    <Auth0Provider
        domain="eseuri.eu.auth0.com"
        clientId="2LvukLbgNsBz3l4lmvQkLNnpfDZkQEgC"
        redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>,
    document.getElementById("root")
);
