import MainLayout from "../layouts/MainLayout";
import FaceContouringHero from "../components/faceContouring/FaceContouringHero";
import DeepTreatment from "../components/faceContouring/DeepTreatment";
import BandA from "../components/faceContouring/BandA";

export default function FaceContouring() {
	return (
		<MainLayout>
			<FaceContouringHero />
			<DeepTreatment />
			<BandA />
		</MainLayout>
	);
}
