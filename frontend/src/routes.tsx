import { createBrowserRouter } from "react-router";
import { SignIn } from "./pages/auth/sign-in";
import { AuthLayout } from "./pages/_layouts/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />
      }
    ]
  },
]);
