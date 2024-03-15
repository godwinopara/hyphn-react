import { Link } from "react-router-dom";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";

export default function Featured() {
	return (
		<section className="max-w-desktop mx-auto py-20">
			<div className="text-center mb-16">
				<h3 className="text-xl leading-8 mb-6 font-medium">Our Featured</h3>
				<h2 className="text-32 leading-10 mb-6 font-medium">Technology and Treatments</h2>
				<p>
					At Integrative Wellness, we provide personalized services for mental health, weight loss,
					and aesthetic care. We also proudly feature Alma Accent Prime technology, which utilizes a
					combination of ultrasound and radiofrequency energies to reduce fat, improve laxity, and
					resurface the skin. View our entire menu of services below to learn more.
				</p>
			</div>
			<div className="grid grid-cols-2 gap-8 mb-16">
				<div>
					<div className="relative border">
						<img src={img1} alt="" className="" />
						<div className="absolute inset-0 bg-dark5 flex items-center pl-5">
							<p className="text-lime text-2xl leading-10">Integrative Medicine In Columbus Ohio</p>
						</div>
					</div>
				</div>
				<div className="pt-16">
					<div className="relative border">
						<img src={img2} alt="" className="" />
						<div className="absolute inset-0 bg-dark5 flex items-center pl-5">
							<p className="text-lime text-2xl leading-10">Mental health</p>
						</div>
					</div>
				</div>
				<div>
					<div className="relative border">
						<img src={img3} alt="" />
						<div className="absolute inset-0 bg-dark5 flex items-center px-5">
							<p className="text-lime text-2xl leading-10">
								Enhance your well-being both internally and externally
							</p>
						</div>
					</div>
				</div>
				<div className="mt-16">
					<div className="relative border">
						<img src={img4} alt="" />
						<div className="absolute inset-0 bg-dark5 flex items-center px-5">
							<p className="text-lime text-2xl leading-10">Aesthetics Treatments</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center">
				<Link to="/services" className="bg-dark3 py-4 px-8 text-white leading-6 inline-block">
					All Services
				</Link>
			</div>
		</section>
	);
}
