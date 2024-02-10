import MentalWeightLossHero from "../components/mentalweightloss/MentalWeightLossHero";
import MentalWeightRecognition from "../components/mentalweightloss/MetalWeightRecognition";
import Card from "../components/shared/Card";
import Card2 from "../components/shared/Card2";
import Partners from "../components/shared/Partners";
import MainLayout from "../layouts/MainLayout";

export default function MentalWeightLoss() {
	return (
		<MainLayout>
			<MentalWeightLossHero />
			<Card />
			<Card2 title="MEDICAL WEIGHT LOSS" />
			<MentalWeightRecognition />
			<Partners />
		</MainLayout>
	);
}
