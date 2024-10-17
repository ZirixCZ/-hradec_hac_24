import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/home";
import ErrorRoute from "./routes/error";
import { LeafletProvider } from "./components/Leaflet/context/LeafletContext";
import MapRoute from "./routes/map";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
        errorElement: <ErrorRoute />,
      },
      {
        path: "map",
        element: <MapRoute />,
        errorElement: <ErrorRoute />,
      },
    ],
  },
]);

function App() {
  return (
    <LeafletProvider>
      <RouterProvider router={router} />
    </LeafletProvider>
  );
}

export default App;
