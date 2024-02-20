import MentalHealthFirstCard from "../components/mentalHealth/MentalHealthFirstCard";
import MentalHealthHero from "../components/mentalHealth/MentalHealthHero";
import MentalHealthRecognition from "../components/mentalHealth/MentalHealthRecognition";
import Partners from "../components/shared/Partners";
import MainLayout from "../layouts/MainLayout";

export default function MentalHealth() {
	return (
		<MainLayout>
			<MentalHealthHero />
			<MentalHealthFirstCard />
			<MentalHealthRecognition />
			<Partners />
		</MainLayout>
	);
}
