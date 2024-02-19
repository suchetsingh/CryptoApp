import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homee from "../components/Homee.jsx";
import Coins from "../components/Coins.jsx";
import CoinDetails from "../components/CoinDetails.jsx";
import Exchanges from "../components/Exchanges.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {path: "/", element: <Homee/>},
      {path: "/coins", element: <Coins/>},
      {path: "/coin/:id", element: <CoinDetails/>},
      {path: "/exchanges", element: <Exchanges/>},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
export const server= `https://api.coingecko.com/api/v3`;
