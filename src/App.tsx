import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const DrKenProfile = lazy(() => import("./pages/DrKenProfile"));
const DrLoliyaProfile = lazy(() => import("./pages/DrLoliyaProfile"));
const WomensHealth = lazy(() => import("./pages/WomensHealth"));
const Asthetics = lazy(() => import("./pages/Asthetics"));
const MentalHealth = lazy(() => import("./pages/MentalHealth"));
const MentalWeightLoss = lazy(() => import("./pages/MentalWeightLoss"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const PatientsResult = lazy(() => import("./pages/PatientsResult"));

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
	{
		path: "/patients",
		element: <PatientsResult />,
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
