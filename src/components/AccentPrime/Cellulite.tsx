import React from "react";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const Cellulite = (props: Props) => {
  return (
    <section className="bg-white py-14">
      <div className="w-5/6 mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-4 text-dark3">
          <h2 className="text-3xl font-medium">Cellulite</h2>
          <p className="text-base">
            The dimpled, lumpy skin associated with cellulite is a challenging
            concern that plagues many women today. Numerous remedies are
            available, but ultimately, most are ineffective. Accent Prime offers
            a clinically-proven solution that effectively reduces the appearance
            of cellulite.
          </p>
        </div>
        <div className="mx-auto">
          <CustomButton>Book Your Appointment</CustomButton>
        </div>
      </div>
    </section>
  );
};
