import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import News from "../views/News";
import Home from "../views/Home";
import Search from "../views/Search";
import NotFound from "../views/NotFound";
import { Suspense } from "react";
import { Loader, Center } from "@mantine/core";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: ":category",
                element: <Suspense fallback={<Center><Loader color="gray" size="lg" /></Center> }><News /></Suspense>,
            },
            {
                path: "search/:query?",
                element: <Search />,
            },
        ]
    },
]);

export default router