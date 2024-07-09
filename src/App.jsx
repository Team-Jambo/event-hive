import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import College from "./pages/College";
import CreateEvent from "./pages/CreateEvent";
import SignIn from "./pages/SignIn";
import SingUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Event from "./pages/Event";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "signIn",
      element: <SignIn />,
    },
    {
      path: "signUp",
      element: <SingUp />,
    },
    {
      path: "event",
      element: <Event />,
    },
    {
      path: "college",
      element: <College />,
    },
    {
      path: "createEvent",
      element: <CreateEvent />,
    },

    {
      path: "notFound",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
