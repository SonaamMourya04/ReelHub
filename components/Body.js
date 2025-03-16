import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />, // Fix here
    },
    {
        path: "/browse",
        element: <Browse />,
    },
]);

const Body = () => {
    return <RouterProvider router={appRouter} />;
};

export default Body;
