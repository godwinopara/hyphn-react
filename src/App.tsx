import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import loader from "./images/loader.svg";
import { PyschatricMedication } from "./pages/PyschatricMedication";
import FaceContouring from "./pages/FaceContouring";

const Home = lazy(() => import("./pages/Home"));
const DrKenProfile = lazy(() => import("./pages/DrKenProfile"));
const DrLoliyaProfile = lazy(() => import("./pages/DrLoliyaProfile"));
const WomensHealth = lazy(() => import("./pages/WomensHealth"));
const Asthetics = lazy(() => import("./pages/Asthetics"));
const MentalHealth = lazy(() => import("./pages/MentalHealth"));
const MentalWeightLoss = lazy(() => import("./pages/MentalWeightLoss"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const PatientsResult = lazy(() => import("./pages/PatientsResult"));
const AcccentPrime = lazy(() => import("./pages/AccentPrime"));
const AccentPrimeContouring = lazy(() => import("./pages/AccentPrimeContouring"));
const LipFiller = lazy(() => import("./pages/LipFiller"));
const DermalFiller = lazy(() => import("./pages/DermalFiller"));
const MedicalWeightLoss = lazy(() => import("./pages/MedicalWeightLoss"));
const Financial = lazy(() => import("./pages/Financial"));

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
		path: "/medical-weight-loss",
		element: <MedicalWeightLoss />,
	},
	{
		path: "/our-team",
		element: <OurTeam />,
	},
	{
		path: "/patients",
		element: <PatientsResult />,
	},
	{
		path: "/accent-prime",
		element: <AcccentPrime />,
	},
	{
		path: "/accent-prime-contouring",
		element: <AccentPrimeContouring />,
	},
	{
		path: "/lip-filler",
		element: <LipFiller />,
	},
	{
		path: "/dermal-filler",
		element: <DermalFiller />,
	},
	{
		path: "/pyschatric-medication-management",
		element: <PyschatricMedication />,
	},
	{
		path: "/financial",
		element: <Financial />,
	},
	{
		path: "/face-contouring",
		element: <FaceContouring />,
	},
]);

const Loader = () => {
	return (
		<div className="flex items-center justify-center h-screen ">
			<img src={loader} alt="" className="w-[5%]" />
		</div>
	);
};

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<RouterProvider router={router} />
		</Suspense>
	);
}

export default App;
