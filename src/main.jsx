import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CashbackHistory from "./pages/CashbackHistory.jsx";
import EarningsOverview from "./pages/EarningsOverview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cashbackHistory",
    element: <CashbackHistory />,
  },
  {
    path: "earningsOverview",
    element: <EarningsOverview />,
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
