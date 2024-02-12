import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DrKenProfile from "./pages/DrKenProfile";
import DrLoliyaProfile from "./pages/DrLoliyaProfile";
import WomensHealth from "./pages/WomensHealth";
import Asthetics from "./pages/Asthetics";
import MentalHealth from "./pages/MentalHealth";
import MentalWeightLoss from "./pages/MentalWeightLoss";
import OurTeam from "./pages/OurTeam";

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
	{
		path: "/aesthetics",
		element: <Asthetics />,
	},
	{
		path: "/mental-health",
		element: <MentalHealth />,
	},
	{
		path: "/mental-weight-loss",
		element: <MentalWeightLoss />,
	},
	{
		path: "/our-team",
		element: <OurTeam />,
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
