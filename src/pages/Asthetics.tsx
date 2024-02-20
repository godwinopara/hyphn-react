import AestheticsRecognition from "../components/aesthetics/AestheticsRecognition";
import AestheticConsulation from "../components/aesthetics/BookConsulation";
import BookConsulation from "../components/shared/BookConsulation";
import Card from "../components/shared/Card";
import Card2 from "../components/shared/Card2";
import HeroCard from "../components/ui/HeroCard";
import MainLayout from "../layouts/MainLayout";
import heroImg from "../images/aesthetics-hero.png";

export default function Asthetics() {
	return (
		<MainLayout>
			<HeroCard heading="Asthetics" img={heroImg} />
			<Card />
			<Card2 title="ASTHETICS" />
			<AestheticConsulation />
			<Card />
			<Card2 title="Lorem ipsum dolor sit amet consectetur." />
			<AestheticsRecognition />
			<BookConsulation />
		</MainLayout>
	);
}
