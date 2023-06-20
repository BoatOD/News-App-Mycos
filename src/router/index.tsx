import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import News from "../views/News";
import Home from "../views/Home";
import Search from "../views/Search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: ":category",
                element: <News />,
            },
            {
                path: "search",
                element: <Search />,
            },
        ]
    },
]);

export default router