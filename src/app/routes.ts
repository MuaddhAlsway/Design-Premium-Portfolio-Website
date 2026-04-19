import { createBrowserRouter } from "react-router";
import { Portfolio } from "./components/Portfolio";
import { CaseStudy } from "./components/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio
  },
  {
    path: "/case-study",
    Component: CaseStudy
  }
]);
