import MainLayout from "../layouts/MainLayout";
import FaceContouringHero from "../components/faceContouring/FaceContouringHero";
import DeepTreatment from "../components/faceContouring/DeepTreatment";
import BandA from "../components/faceContouring/BandA";
import Indicator from "../components/faceContouring/Indicator";
import Partners from "../components/shared/Partners";

export default function FaceContouring() {
	return (
		<MainLayout>
			<FaceContouringHero />
			<DeepTreatment />
			<BandA />
			<Indicator />
			<Partners />
		</MainLayout>
	);
}
