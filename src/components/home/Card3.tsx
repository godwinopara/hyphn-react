import img3 from "../../images/img2.png";

export default function Card3() {
	return (
		<section className="max-w-desktop mx-auto px-8 xl:px-0 lg:flex lg:items-center lg:justify-center my-12">
			<div className="py-28 md:flex">
				<img src={img3} alt="" className="mx-auto" />
			</div>

			<div className="rounded-md flex items-center lg:shadow-custom lg:px-10 lg:w-1/2 lg:py-10">
				<div>
					<h2 className="text-26 lg:text-32 text-center mb-2 font-medium leading-10">
						Enhance your well-being both internally and externally
					</h2>
					<hr />
					<p className="pt-5">
						Embarking on the journey to become the best version of yourself often begins with
						self-care and wellness. Elements such as mood, age changes, energy levels, general
						discomfort, and weight management can impact these aspects. Discover how Integrative
						Wellness can assist you in prioritizing self-care and focusing on becoming your best
						self.
					</p>
					<ul className="list-disc ml-3 mt-2">
						<li>Medical Weight loss</li>
						<li>Hormone replacement therapy for women and Men</li>
						<li>Women's Wellness visit</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
