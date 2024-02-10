import Recognition from "../shared/Recognition";

export default function MentalHealthRecognition() {
	return (
		<section className="max-w-desktop mx-auto px-6 grid lg:grid-cols-2 gap-6 my-20">
			<Recognition recognition="Psychiatric Medication Management" />
			<Recognition recognition="Telepsychiatry" />
			<Recognition recognition="Genetic Testing" />
			<Recognition recognition="ADHD Testing" />
			<Recognition recognition="Anxiety and Depression" />
			<Recognition recognition="Psychotherapy" />
		</section>
	);
}
