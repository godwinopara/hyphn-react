import MentalHealthFirstCard from "../components/mentalHealth/MentalHealthFirstCard";
import MentalHealthHero from "../components/mentalHealth/MentalHealthHero";
import MentalHealthRecognition from "../components/mentalHealth/MentalHealthRecognition";
import Partners from "../components/shared/Partners";
import MainLayout from "../layouts/MainLayout";

export default function MentalHealth() {
	return (
		<MainLayout>
			<MentalHealthHero />
			<section className="bg-primary py-10 text-white px-6 xl:px-0">
				<div className="max-w-desktop grid place-items-center mx-auto">
					<div className="text-center">
						<h2 className="text-xl md:text-32 leading-10 font-medium">ONE ON ONE MEETING</h2>
					</div>
				</div>
			</section>
			<MentalHealthFirstCard />
			<MentalHealthRecognition />
			<Partners />
		</MainLayout>
	);
}
