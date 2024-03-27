import React from "react";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const NaturalLipfiller = (props: Props) => {
  return (
    <section className="bg-white py-14">
      <div className="w-4/6 mx-auto flex flex-col gap-5">
        <div className="flex flex-col gap-4 text-dark3">
          <h2 className="text-3xl font-medium max-w-[502px] mx-auto">
            Natural-looking Lip Filler for a Beautiful, Fuller Appearance
          </h2>
          <p className="text-base  text-center">
            Lips are often one of the most important features of the face.
            However, not everyone is born with naturally plump lips, and those
            who are can lose volume and shape over time. Lip filler is a popular
            treatment for those looking to add shape and volume to their lips.
            Our expert injectors are ready to help you achieve your aesthetic
            goals and make your lips your new favorite feature!
          </p>
        </div>
        <div className="mx-auto">
          <CustomButton>Schedule Your Consultation</CustomButton>
        </div>
      </div>
    </section>
  );
};
