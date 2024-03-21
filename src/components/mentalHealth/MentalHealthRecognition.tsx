import Recognition from "../shared/Recognition";

export default function MentalHealthRecognition() {
	return (
		<section className="bg-secondary2 py-20">
			<div className="max-w-desktop mx-auto px-6 grid lg:grid-cols-2 gap-6">
				<Recognition recognition="Anxiety, ADHD and Depression">
					<p>
						If you're seeking assistance with themanagement of anxiety, ADHD, or depression, or if
						you're uncertain aboutwhether you may be experiencing any of these conditions, we offer
						diagnostictesting, as well as options such as medications and behavioral therapy
						toalleviate symptoms.
					</p>
				</Recognition>
				<Recognition recognition="Behavioral Health">
					<p>
						Ourguiding principle, embodied in the belief that "You are enough," reflectsour profound
						belief that you inherently possess all the valuable resourcesneeded to elevate your
						quality of life and find happiness. Let us support youin unlocking your full potential
						through personalized one-on-one therapy andmedication management, available either
						in-person or online, to help youachieve success.
					</p>
				</Recognition>
				<Recognition recognition="Hormone Replacement Therapy">
					<p>
						Numerousfactors can influence how you feel, and at Integrative Wellness, our goal is
						tooptimize your overall health while addressing your behavioral well-being. Wetake a
						holistic approach, tailoring each therapy to your specific needs.Consider visiting us to
						explore whether hormone replacement therapy is asuitable option for you.
					</p>
				</Recognition>
				<Recognition recognition="Psychiatric Medication Management">
					<p>
						Psychiatric Medication Management is the process of working with a provider to ensure
						that your psychiatric medications are effective and safe. This may include changing
						doses, switching medications, or adding new drugs to help patients achieve the optimal
						outcomes and reduce symptoms associated with mental health conditions such as anxiety,
						depression and others.
					</p>
				</Recognition>
			</div>
		</section>
	);
}
