import Hero from "../components/home/Hero";
import HomeFirstCard from "../components/home/HomeFirstCard";
import HomeForthCard from "../components/home/HomeForthCard";
import HomeSecondCard from "../components/home/HomeSecondCard";
import HomeThirdCard from "../components/home/HomeThirdCard";
import Partners from "../components/shared/Partners";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
	return (
		<MainLayout>
			<Hero />
			<HomeFirstCard />
			<HomeSecondCard />
			<HomeThirdCard />
			<HomeForthCard />
			<Partners />
		</MainLayout>
	);
}
