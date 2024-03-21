import MentalWeightRecognition from "../components/mentalweightloss/MetalWeightRecognition";
import Card from "../components/shared/Card";
import Partners from "../components/shared/Partners";
import HeroCard from "../components/ui/HeroCard";
import MainLayout from "../layouts/MainLayout";
import heroImg from "../images/weight-loss.png";
import Description from "../components/mentalweightloss/Description";
// import WeightLossForm from "../components/mentalweightloss/WeightLossForm";

export default function MentalWeightLoss() {
	return (
		<MainLayout>
			<HeroCard heading="Weight Loss" img={heroImg} />
			<Card />
			<Description />
			<MentalWeightRecognition />
			{/* <WeightLossForm /> */}
			<Partners />
		</MainLayout>
	);
}
