import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
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
