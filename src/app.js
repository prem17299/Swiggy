import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { UserContext } from "./utils/UserContext";

const Grocery = lazy(() =>
  import("./components/Grocery").then((module) => ({ default: module.Grocery }))
);
const About = lazy(() =>
  import("./components/About").then((module) => ({ default: module.About }))
);
const Contact = lazy(() =>
  import("./components/Contact").then((module) => ({ default: module.Contact }))
);

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = { name: "Prem Anand" };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
