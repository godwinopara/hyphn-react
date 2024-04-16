import React from "react";
import logo from "../../images/accent-prime-logo-white.png";
import google from "../../images/Google-Top-Rated.png";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const ContourHero = (props: Props) => {
	return (
		<section className="xl:min-h-[640px] relative bg-accentCMobile xl:bg-accentC bg-cover bg-no-repeat flex justify-center xl:justify-end py-10 xl:-ml-10 2xl:px-40">
			<div className="px-6 xl:px-0 flex flex-col justify-center xl:justify-end gap-4 xl:gap-5  max-w-[560px] text-dark3">
				<img src={logo} alt="" className="w-[230px] xl:w-[262px] mx-auto xl:mx-0" />
				<div className="flex justify-center w-full xl:block">
					<h1 className="text-2xl text-center xl:text-left xl:text-5xl xl:leading-[64px]">
						Contour Attractive, Sleek Curves
					</h1>
				</div>
				<div className="flex justify-center xl:block">
					<CustomButton>Book Now</CustomButton>
				</div>
				<div className="flex justify-center xl:block">
					<img src={google} alt="" className="w-[148px] h-[148px] mx-auto xl:mx-0" />
				</div>
			</div>
		</section>
	);
};
