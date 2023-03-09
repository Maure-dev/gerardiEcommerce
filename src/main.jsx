import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZqg_7d7eX8ugDNaXoUpXLnqKQPT6oQnA",
  authDomain: "ecommerce-coderhouse-1412.firebaseapp.com",
  projectId: "ecommerce-coderhouse-1412",
  storageBucket: "ecommerce-coderhouse-1412.appspot.com",
  messagingSenderId: "801971290728",
  appId: "1:801971290728:web:b1010acb5abe9ac29bb1dd",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
