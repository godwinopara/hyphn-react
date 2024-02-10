import AestheticsCard from "../components/aesthetics/AestheticsCard";
import AestheticsCard2 from "../components/aesthetics/AestheticsCard2";
import AestheticsCard3 from "../components/aesthetics/AestheticsCard3";
import AestheticsCard4 from "../components/aesthetics/AestheticsCard4";
import AestheticsHero from "../components/aesthetics/AestheticsHero";
import AestheticsRecognition from "../components/aesthetics/AestheticsRecognition";
import AestheticConsulation from "../components/aesthetics/BookConsulation";
import BookConsulation from "../components/shared/BookConsulation";
import MainLayout from "../layouts/MainLayout";

export default function Asthetics() {
	return (
		<MainLayout>
			<AestheticsHero />
			<AestheticsCard />
			<AestheticsCard2 />
			<AestheticConsulation />
			<AestheticsCard3 />
			<AestheticsCard4 />
			<AestheticsRecognition />
			<BookConsulation />
		</MainLayout>
	);
}
