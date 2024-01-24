import img2 from "../../images/img4.png";

export default function Card4() {
	return (
		<section className="max-w-desktop mx-auto px-8 xl:px-0 lg:flex lg:items-center lg:justify-center mb-10">
			<div className="rounded-md flex items-center lg:shadow-custom lg:px-10 lg:w-1/2 lg:py-14">
				<div>
					<h2 className="text-26 lg:text-32 text-center mb-2 font-medium leading-10">
						Aesthetics Treatments
					</h2>
					<hr />
					<p className="mt-4">
						Our highly skilled providers appreciate each person's individuality, acknowledging that
						we are not all meant to have the same appearance. What sets us apart is our unique
						approach, aimed at highlighting and bringing out the true beauty that makes you
						distinct.
					</p>
					<ul className="list-disc pl-3 mt-2">
						<li>Botox</li>
						<li>Lip Fillers</li>
						<li>Body contouring</li>
						<li>Skin tightening with radiofrequency and Ultrasound</li>
					</ul>
				</div>
			</div>

			<div className="py-24 md:flex">
				<img src={img2} alt="" className="mx-auto" />
			</div>
		</section>
	);
}
