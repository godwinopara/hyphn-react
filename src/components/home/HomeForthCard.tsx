import Card from "../ui/Card";
import img from "../../images/img4.png";

export default function HomeForthCard() {
	return (
		<Card img={img} heading="Aesthetics Treatments" reverse>
			<p className="mb-3">
				Our highly skilled providers appreciate each person's individuality, acknowledging that we
				are not all meant to have the same appearance. What sets us apart is our unique approach,
				aimed at highlighting and bringing out the true beauty that makes you distinct.
			</p>
			<ul className="list-disc list-inside">
				<li>Botox</li>
				<li>Lip Fillers</li>
				<li>Body contouring</li>
				<li>Skin tightening with radiofrequency and Ultrasound</li>
			</ul>
		</Card>
	);
}
