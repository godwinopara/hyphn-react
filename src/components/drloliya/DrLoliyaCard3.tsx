import img from "../../images/dr-loliya3.png";

export default function DrLoliyaCard3() {
	return (
		<section className="px-6 pt-16 max-w-desktop mx-auto rounded-md xl:px-0 lg:flex lg:py-20">
			<div className="lg:w-1/2">
				<img src={img} alt="" className="mx-auto mb-8 lg:mb-0 xl:m-0 w-full " />
			</div>
			<div className="bg-white flex items-center justify-center lg:shadow-custom lg:w-1/2 lg:px-10 xl:px-20">
				<div className="pb-10 xl:pb-0">
					<p className="max-w-3xl mx-auto">
						Driven by a desire to make a positive impact on the lives of others, Dr. Idoniboye
						tirelessly works to guide her patients towards better health outcomes.
					</p>
					<br />
					<p className="max-w-3xl mx-auto">
						Her holistic approach involves not only addressing medical issues but also helping
						individuals discover their passions and expand their horizons. Through her expertise,
						empathy, and commitment, Dr. Idoniboye strives to empower her patients to achieve
						optimal health and lead fulfilling lives.
					</p>
				</div>
			</div>
		</section>
	);
}
