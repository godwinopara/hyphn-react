import React from "react";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const DermalFillerHero = (props: Props) => {
	return (
		<section className="min-h-[30vh] xl:min-h-[80vh] relative bg-dermalHero bg-contain xl:bg-dermalfiller xl:bg-cover bg-no-repeat  xl:flex justify-center ">
			<div className="flex flex-col gap-2 ml-36 pt-12 xl:gap-5 justify-center  xl:ml-72">
				<h1 className="text-dark3 text-2xl xl:text-6xl">Dermal Fillers</h1>
				<CustomButton>Book Your Consultation</CustomButton>
			</div>
		</section>
	);
};
