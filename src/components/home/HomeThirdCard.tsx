import Card from "../ui/Card";
import img from "../../images/img2.png";
import loliya from "../../images/loliya1.png";
import ken from "../../images/ken.png";
import { Link } from "react-router-dom";

export default function HomeThirdCard() {
	return (
		<section>
			<div className="lg:flex lg:gap-x-8 items-center max-w-desktop mx-auto py-20">
				<div className="w-[40%] border-e-4 border-black pr-11">
					<img src={loliya} alt="" className="mx-auto" />
				</div>

				<div className="w-[55%] ml-5">
					<h2 className="font-medium text-xl leading-8 mb-1">Meet</h2>
					<h3 className="text-3xl leading-10 font-medium mb-1">Dr. Loliya Idoniboye, D.O., MPH</h3>
					<p className="mb-3">
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

			<div className="lg:flex lg:gap-x-8 items-center max-w-desktop mx-auto py-20">
				<div className="w-[40%] border-e-4 border-black pr-11">
					<img src={ken} alt="" className="mx-auto" />
				</div>

				<div className="w-[55%] ml-5">
					<h2 className="font-medium text-xl leading-8 mb-1">Meet</h2>
					<h3 className="text-3xl leading-10 font-medium mb-1">
						Kenneth Nwogu MSN, APRN, FNP-C, PMHNP-BC
					</h3>
					<p className="mb-3">
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
