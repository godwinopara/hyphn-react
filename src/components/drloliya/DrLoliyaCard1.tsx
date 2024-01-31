import img1 from "../../images/dr-loliya1.png";

export default function Card() {
	return (
		<section className="px-6 pt-16 max-w-desktop mx-auto rounded-md lg:mb-20 xl:mb-0 xl:px-0 lg:flex xl:py-20">
			<div className="lg:w-1/2 mb-8 lg:mb-0">
				<img src={img1} alt="" className="mx-auto lg:m-0 w-full" />
			</div>
			<div className="bg-white flex items-center justify-center lg:shadow-custom lg:w-1/2 lg:px-10 xl:px-20">
				<div className="pb-10 lg:pb-0 ">
					<p className="xl:max-w-3xl mx-auto">
						She completed her residency at Niagara Falls Memorial in NY, and pursued further
						specialization through a fellowship in women's health at Cornell Weill/Lincoln Hospital
						NY, . This comprehensive training equipped her with the skills and knowledge needed to
						address a wide range of medical concerns, with a particular focus on the unique
						healthcare needs of women
					</p>
					<br />
					<p className="max-w-3xl mx-auto">
						Dr. Idoniboye's dedication to women's health and obesity medicine stems from her belief
						in the interconnectedness of the two.
					</p>
				</div>
			</div>
		</section>
	);
}
