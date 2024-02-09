import Card1 from "../components/home/Card1";
import Card2 from "../components/home/Card2";
import Card3 from "../components/home/Card3";
import Card4 from "../components/home/Card4";
import Hero from "../components/home/Hero";
import Partners from "../components/shared/Partners";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
	return (
		<MainLayout>
			<Hero />
			<Card1 />
			<Card2 />
			<Card3 />
			<Card4 />
			<Partners />
		</MainLayout>
	);
}
