import img2 from "../../images/img2.png";

export default function Card2() {
	return (
		<section className="max-w-desktop mx-auto px-8 xl:px-0 lg:flex lg:items-center lg:justify-center my-12">
			<div className="rounded-md flex items-center lg:shadow-custom lg:px-10 lg:w-1/2 lg:py-14">
				<div>
					<h2 className="text-26 lg:text-32 text-center mb-2 font-medium leading-10">
						Mental health
					</h2>
					<hr />
					<h3 className="my-4 leading-8 font-medium">Metal Health is a wealth.</h3>
					<p>
						Whether it's uncovering a diagnosis or engaging in psychotherapy, Ken dedicates time to
						understand your needs. He emphasizes that we eagerly await your progress towards being
						your best self, so we can celebrate your achievements together. Explore what sets us
						apart at Integrative Wellness.
					</p>
					<ul className="list-disc pl-3 mt-2">
						<li>Psychotherapy</li>
						<li>Psychiatric medication management</li>
						<li>Anxiety</li>
						<li>Depression</li>
						<li>ADHD testing</li>
					</ul>
				</div>
			</div>

			<div className="py-24 md:flex">
				<img src={img2} alt="" className="mx-auto" />
			</div>
		</section>
	);
}
