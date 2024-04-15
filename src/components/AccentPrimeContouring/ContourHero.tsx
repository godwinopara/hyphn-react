import React from "react";
import logo from "../../images/accent-prime-logo-white.png";
import google from "../../images/Google-Top-Rated.png";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const ContourHero = (props: Props) => {
	return (
		<section className="min-h-[640px] relative bg-accentC bg- bg-cover bg-no-repeat flex justify-end py-10 -ml-10 2xl:px-40">
			<div className="flex flex-col justify-end gap-5  max-w-[560px] text-dark3">
				<img src={logo} alt="" className="w-[262px]" />
				<h1 className="text-5xl leading-[64px]">Contour Attractive, Sleek Curves</h1>
				<CustomButton>Book Now</CustomButton>
				<img src={google} alt="" className="w-[148px] h-[148px]" />
			</div>
		</section>
	);
};
