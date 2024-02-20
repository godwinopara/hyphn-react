import img from "../../images/img2.png";
import Card from "../ui/Card";

export default function HomeSecondCard() {
	return (
		<Card img={img} heading="Mental health" reverse dark>
			<h3 className="my-4 leading-8 font-medium">Metal Health is a wealth.</h3>
			<p className="mb-3">
				Whether it's uncovering a diagnosis or engaging in psychotherapy, Ken dedicates time to
				understand your needs. He emphasizes that we eagerly await your progress towards being your
				best self, so we can celebrate your achievements together. Explore what sets us apart at
				Integrative Wellness.
			</p>
			<ul className="list-disc pl-3 mt-2">
				<li>Psychotherapy</li>
				<li>Psychiatric medication management</li>
				<li>Anxiety</li>
				<li>Depression</li>
				<li>ADHD testing</li>
			</ul>
		</Card>
	);
}
