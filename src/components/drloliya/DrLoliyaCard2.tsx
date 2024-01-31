import img from "../../images/dr-loliya2.png";

export default function DrLoliyaCard2() {
	return (
		<section className="px-6 pt-16 max-w-desktop mx-auto rounded-md flex flex-col-reverse lg:flex-row xl:px-0 lg:py-20">
			<div className="bg-white flex items-center justify-center lg:shadow-custom lg:w-1/2 lg:px-10 xl:px-20">
				<div className="pb-10 xl:pb-0">
					<p className="max-w-3xl mx-auto">
						She firmly believes that addressing women's health issues is integral to promoting
						overall well-being and fostering healthier life choices, especially in the context of
						obesity. Her personal journey has played a significant role in shaping her professional
						outlook.
					</p>
					<br />
					<p className="max-w-3xl mx-auto">
						Dr. Idoniboye has faced her own challenges with weight management and wellness, allowing
						her to deeply empathize with the struggles her patients may encounter. This personal
						connection enables her to approach patient care with a unique understanding and
						compassion.
					</p>
				</div>
			</div>
			<div className="lg:w-1/2 mb-8 lg:mb-0">
				<img src={img} alt="" className="mx-auto xl:m-0" />
			</div>
		</section>
	);
}
