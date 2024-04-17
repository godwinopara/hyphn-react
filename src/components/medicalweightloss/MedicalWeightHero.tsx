import React from "react";
import medicalHero from "../../images/medicalhero.png";
import medicalHeroMobile from "../../images/medical-weight-loss-mobile.png";

type Props = {};

export const MedicalWeightHero = (props: Props) => {
	return (
		<section>
			<div className="min-h-[20vh] lg:min-h-[35vh] xl:min-h-[70vh] relative flex justify-end">
				<div className="hidden lg:block">
					<img src={medicalHero} alt="" className="hidden lg:block" />
				</div>
				<div className="lg:hidden">
					<img src={medicalHeroMobile} alt="lg:hidden h-[320px]" />
				</div>
				<div className="absolute right-5 lg:right-[24%] xl:right-[22%] top-[30%]">
					<h1 className="text-dark3 text-2xl lg:text-4xl xl:text-6xl ">
						Options Medical <br /> Weight Loss™ <br />
						SERVICES
					</h1>
				</div>
			</div>
		</section>
	);
};
