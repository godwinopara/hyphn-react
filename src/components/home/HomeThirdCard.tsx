import Card from "../ui/Card";
import img from "../../images/img2.png";

export default function HomeThirdCard() {
	return (
		<Card img={img} heading="Enhance your well-being">
			<p className="mb-3">
				Embarking on the journey to become the best version of yourself often begins with self-care
				and wellness. Elements such as mood, age changes, energy levels, general discomfort, and
				weight management can impact these aspects. Discover how Integrative Wellness can assist you
				in prioritizing self-care and focusing on becoming your best self.
			</p>
			<ul className="list-disc ml-3 mt-2">
				<li>Medical Weight loss</li>
				<li>Hormone replacement therapy for women and Men</li>
				<li>Women's Wellness visit</li>
			</ul>
		</Card>
	);
}
