import img1 from "../../images/ken1.png";
import Card from "../ui/Card";

export default function DrKenCard1() {
	return (
		<Card img={img1}>
			<p className="xl:max-w-3xl mx-auto">
				I specialize in holistic care, emphasizing integrative mental wellness, addressing
				functional issues including anxiety, depressive, and mood disorders as well as improving
				overall health, and lifestyle. I can recommend, prescribe, and monitor medications and
				psychotherapy. I can meet with clients through telemedicine/telepsychiatry or in person.
			</p>
			<br />
			<p className="xl:max-w-3xl mx-auto">
				My approach to mental health is interactive, holistic, compassionate, and collaborative. I
				maximize empathy. I integrate and appreciate cultural and belief systems to treatment as
				needed.{" "}
			</p>
			<br />
			<p className="max-w-3xl mx-auto">
				I employ mindfulness, meditation, conventional medicine, environmental, nutritional, and
				genetic considerations in holistic care. Just know that you are enough.{" "}
			</p>
		</Card>
	);
}
