import AestheticsHero from "../components/aesthetics/AestheticsHero";
import AestheticsRecognition from "../components/aesthetics/AestheticsRecognition";
import AestheticConsulation from "../components/aesthetics/BookConsulation";
import BookConsulation from "../components/shared/BookConsulation";
import Card from "../components/shared/Card";
import Card2 from "../components/shared/Card2";
import MainLayout from "../layouts/MainLayout";

export default function Asthetics() {
	return (
		<MainLayout>
			<AestheticsHero />
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
