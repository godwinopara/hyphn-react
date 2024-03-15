import loliya from "../../images/loliya1.png";
import ken from "../../images/ken.png";
import loliya1 from "../../images/loliya-mobile.png";
import ken1 from "../../images/ken-mobile.png";
import { Link } from "react-router-dom";

export default function HomeThirdCard() {
	return (
		<section className="px-6">
			<div className="lg:flex lg:gap-x-8 items-center max-w-desktop mx-auto py-20">
				<div className="pb-8 lg:w-[45%] border-b-4 lg:border-b-0 lg:border-e-4 border-black pr-11">
					<img src={loliya} alt="" className="mx-auto hidden lg:block" />
					<img src={loliya1} alt="" className="mx-auto  lg:hidden" />
				</div>

				<div className="pt-10 lg:w-[55%] lg:ml-5">
					<h2 className="font-medium text-xl leading-8 mb-1">Meet</h2>
					<h3 className="text-xl lg:text-3xl leading-10 font-medium mb-4">
						Dr. Loliya Idoniboye, D.O., MPH
					</h3>
					<p className="mb-5">
						Dr. Loliya Idoniboye is a board-certified family care physician who is passionate about
						preventive care, women's wellness, and helping individuals reach their weight loss
						goals. She studied at the Philadelphia College of Osteopathic Medicine and completed a
						fellowship in women's health through Cornell University. Dr. Idoniboye believes in
						taking a total-body approach to care to deliver the best outcomes for all of her
						patients. She looks forward to meeting with you.
					</p>
					<Link to="/drloliya" className="bg-dark3 py-4 px-8 text-white leading-6 inline-block">
						Learn More
					</Link>
				</div>
			</div>

			<div className="px-6 lg:px-0 lg:flex lg:gap-x-8 items-center max-w-desktop mx-auto py-20">
				<div className="pb-8 lg:w-[45%]  border-b-4 lg:border-b-0 lg:border-e-4 border-black pr-11">
					<img src={ken} alt="" className="mx-auto hidden lg:block" />
					<img src={ken1} alt="" className="mx-auto  lg:hidden" />
				</div>

				<div className="pt-10 lg:w-[55%] lg:ml-5">
					<h2 className="font-medium text-xl leading-8 mb-1">Meet</h2>
					<h3 className="text-xl lg:text-3xl leading-10 font-medium mb-4">
						Kenneth Nwogu MSN, APRN, FNP-C, PMHNP-BC
					</h3>
					<p className="mb-5">
						As a board-certified family and psychiatric-mental health nurse practitioner, Kenneth
						Nwogu is highly skilled in treating individuals with anxiety, depression, ADHD,
						substance use disorders, and other psychiatric conditions. Having earned his master's
						degree from the University of Cincinnati and his Psychiatric Mental Health Nurse
						Practitioner certificate from Liberty University, he is ready to deliver the
						distinguished level of care that you are seeking.
					</p>
					<Link to="/drloliya" className="bg-dark3 py-4 px-8 text-white leading-6 inline-block">
						Learn More
					</Link>
				</div>
			</div>
		</section>
	);
}
