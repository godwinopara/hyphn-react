import TRTCard from "./TRTCard";
import img from "../../images/discovery-call.png";
import img2 from "../../images/victory.png";
import img3 from "../../images/review.png";

export default function Steps() {
	return (
		<section className="px-6 xl:px-0 xl:grid xl:grid-cols-3 xl:gap-x-10 max-w-desktop mx-auto">
			<TRTCard
				title="Step 1: Book a discovery call with you patient advocate"
				img={img}
				btn
				description="Book a convenient time to speak with one of our patient advocates. They’ll let you know if testosterone treatment is right for you, and will answer any questions you might have."
			/>
			<TRTCard
				title="Step 2: Receive your at home blood test"
				img={img2}
				btn={false}
				description="We will send you a full hormone profile blood test that you can do from the convenience from your home.  Just mail it back with the self addressed stamped envelope and we will call you when the results are in."
			/>
			<TRTCard
				title="Step 3: Review the results of your blood work with the physician"
				img={img3}
				btn={false}
				description="When you blood work is completed we will book a consultation with the physician to review your hormone levels and order your testosterone and supporting supplementation"
			/>
		</section>
	);
}
