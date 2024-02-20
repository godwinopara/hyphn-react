import Card from "../ui/Card";
import img from "../../images/img1.png";

export default function HomeFirstCard() {
	return (
		<Card img={img} heading="Integrative Medicine">
			<h3 className="my-4 leading-8 font-medium">Find out what makes us Integrative.</h3>
			<p>
				Through experience, we've discovered that one's outward appearance often mirrors one's inner
				well-being. Dr. Idoniboye, board-certified in obesity medicine, recognizes the impact of
				unhealthy weight on overall health, along with the significance of balanced hormones and
				nurtured mental health. Addressing not just diagnoses but the root causes of conditions,
				Kenneth Nwogu, a board-certified psychiatric nurse, empowers you to overcome challenges. His
				practical and caring approach emphasizes that you are part of a compassionate team genuinely
				interested in your wellness. We consistently affirm, "You are Enough," recognizing that each
				person harbors the internal tools needed to become their best selves. Let us guide you
				towards this realization and support your journey to optimal well-being.
			</p>
		</Card>
	);
}
