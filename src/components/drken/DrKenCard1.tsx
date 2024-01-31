import img1 from "../../images/ken1.png";

export default function DrKenCard1() {
	return (
		<section className="px-6 pt-16 max-w-desktop mx-auto rounded-md lg:mb-20 xl:mb-0 xl:px-0 lg:flex xl:py-20">
			<div className="lg:w-1/2 mb-8 lg:mb-0">
				<img src={img1} alt="" className="mx-auto lg:m-0 w-full" />
			</div>
			<div className="bg-white flex items-center justify-center lg:shadow-custom lg:w-1/2 lg:px-10 xl:px-20">
				<div className="pb-10 lg:pb-0 ">
					<p className="xl:max-w-3xl mx-auto">
						My approach to mental health is interactive, holistic, compassionate, and collaborative.
						I maximize empathy. I integrate and appreciate cultural and belief systems to treatment
						as needed.
					</p>
					<br />
					<p className="max-w-3xl mx-auto">
						I employ mindfulness, meditation, conventional medicine, environmental, nutritional, and
						genetic considerations in holistic care. Just know that you are enough.
					</p>
				</div>
			</div>
		</section>
	);
}
