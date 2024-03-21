import Partners from "../components/shared/Partners";
import HeroCard from "../components/ui/HeroCard";
import WomensHealthCard from "../components/womenshealth/WomensHealthCard";
import WomensHealthCard2 from "../components/womenshealth/WomensHealthCard2";
import WomensHealthRecognition from "../components/womenshealth/WomensHealthRecognition";
import MainLayout from "../layouts/MainLayout";
import heroImg from "../images/weight-loss.png";

export default function WomensHealth() {
	return (
		<MainLayout>
			<HeroCard heading="Women's Health" img={heroImg} />
			<WomensHealthCard />
			<WomensHealthCard2 />
			<WomensHealthRecognition />
			<Partners />
		</MainLayout>
	);
}
