import React from "react";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const PyschatricMedicationHero = (props: Props) => {
  return (
    <section className="min-h-[80vh] relative bg-pyscha bg-cover bg-no-repeat  flex items-center justify-center ">
      <div className="flex flex-col gap-5 justify-center ">
        <h1 className="text-dark3 text-6xl max-w-[678px] text-center leading-[64px] ">
          Psychiatric Medication Management
        </h1>
        <p className="text-xl leading-10 font-medium max-w-[776px] text-center">
          Serving Ohio through the convenience of online appointments and a
          growing network of locations
        </p>
        <div className="mx-auto">
          <CustomButton>Schedule Your Consultation</CustomButton>
        </div>
      </div>
    </section>
  );
};
