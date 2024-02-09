import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DrKenProfile from "./pages/DrKenProfile";
import DrLoliyaProfile from "./pages/DrLoliyaProfile";
import WomensHealth from "./pages/WomensHealth";

const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/dr-ken",
		element: <DrKenProfile />,
	},
	{
		path: "/dr-loliya",
		element: <DrLoliyaProfile />,
	},
	{
		path: "/womens-health",
		element: <WomensHealth />,
	},
]);

function App() {
	return (
		<Suspense fallback={"loading...."}>
			<RouterProvider router={router} />
		</Suspense>
	);
}

export default App;
