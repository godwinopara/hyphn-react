import Diagnosis from "../components/TRT/Diagnosis";
import Question from "../components/TRT/Question";
import SignAndSymptoms from "../components/TRT/SignAndSymptoms";
import Steps from "../components/TRT/Steps";
import TRTHero from "../components/TRT/TRTHero";
import Partners from "../components/shared/Partners";
import MainLayout from "../layouts/MainLayout";

export default function Trt() {
	return (
		<MainLayout>
			<TRTHero />
			<SignAndSymptoms />
			<Diagnosis />
			<Question />
			<Steps />
			<Partners />
		</MainLayout>
	);
}
