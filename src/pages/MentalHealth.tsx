import MentalHealthCard from "../components/mentalHealth/MentalHealthCard";
import MentalHealthCard2 from "../components/mentalHealth/MentalHealthCard2";
import MentalHealthHero from "../components/mentalHealth/MentalHealthHero";
import MentalHealthRecognition from "../components/mentalHealth/MentalHealthRecognition";
import Partners from "../components/shared/Partners";
import MainLayout from "../layouts/MainLayout";

export default function MentalHealth() {
	return (
		<MainLayout>
			<MentalHealthHero />
			<MentalHealthCard />
			<MentalHealthCard2 />
			<MentalHealthRecognition />
			<Partners />
		</MainLayout>
	);
}
