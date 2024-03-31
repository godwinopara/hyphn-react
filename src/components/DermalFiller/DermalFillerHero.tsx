import React from "react";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const DermalFillerHero = (props: Props) => {
  return (
    <section className="min-h-[80vh] relative bg-dermalfiller bg-cover bg-no-repeat  flex justify-center ">
      <div className="flex flex-col gap-5 justify-center ml-72">
        <h1 className="text-dark3 text-6xl">Dermal Fillers</h1>
        <CustomButton>Schedule Your Consultation</CustomButton>
      </div>
    </section>
  );
};
