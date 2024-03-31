import React from "react";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const DermalfillerOverview = (props: Props) => {
  return (
    <section className="bg-white py-14">
      <div className="w-5/6 mx-auto flex flex-col gap-4 text-dark3">
        <h2 className="text-3xl font-medium text-center ">Overview</h2>
        <p className="text-base text-left ">
          Dermal fillers have long been the go-to solution for enhancing lips,
          reducing wrinkles and adding volume to the face for a more youthful,
          radiant look. At Coastal Aesthetics, we are pleased to offer our
          clients dermal fillers from trusted brands like Revanesse and
          Juvederm.
        </p>
        <p className="text-base text-left ">
          Both brands offer a range of dermal filler options to meet diverse
          patient needs with natural, lasting results. For a more rested and
          ageless look, fillers might be the perfect solution for you.
        </p>
        <div className="mx-auto">
          <CustomButton>Book Your Consultation</CustomButton>
        </div>
      </div>
    </section>
  );
};
