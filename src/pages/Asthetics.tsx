import AestheticsRecognition from "../components/aesthetics/AestheticsRecognition";
import AestheticConsulation from "../components/aesthetics/BookConsulation";
import BookConsulation from "../components/shared/BookConsulation";
// import Card from "../components/shared/Card";
import Card2 from "../components/shared/SharedCard";
import HeroCard from "../components/ui/HeroCard";
import MainLayout from "../layouts/MainLayout";
import heroImg from "../images/aesthetics-hero.png";
import AestheticsFirstCard from "../components/aesthetics/AestheticsFirstCard";
import Card from "../components/ui/Card";
import img from "../images/book-consulation.png";

export default function Asthetics() {
	return (
		<MainLayout>
			<HeroCard heading="Asthetics" img={heroImg} />
			<AestheticsFirstCard />
			<Card heading="EMBODY YOUR AUTHENTICITY" img={img}>
				<p>
					Aesthetic body procedures balance anatomic realities with aspirational goals. At
					Donaldson, we bring together surgical and nonsurgical expertise to offer a comprehensive
					approach to body contouring. We focus on proportion, harmony, silhouettes and curves. We
					minimize scars and reduce downtime. We work with you to understand your goals, and to
					create a customized plan for your unique circumstances.
				</p>
				<a
					href="https://book.mypatientnow.com/practice/LBShyy"
					target="_blank"
					className="border-2 border-dark w-full block mt-10 py-3 px-4 text-xl font-semibold text-dark leading-10 text-center hover:bg-dark hover:text-white"
				>
					Book Consultation
				</a>
			</Card>
			<Card2 title="IMAGINE YOUR IDEAL LOOK" dark>
				<p>
					In the realm of modern aesthetics, the pursuit of beauty has taken a fascinating turn —
					one toward all-natural everything. Natural-looking results by using organically-rooted
					treatments and products. We can safely enhance our beauty using nonsurgical treatments
					that harness the body’s organic growth factors while also integrating medical-grade
					supplements into our daily routine to replenish what we need
				</p>
			</Card2>
			<AestheticsRecognition />
			<BookConsulation />
		</MainLayout>
	);
}
