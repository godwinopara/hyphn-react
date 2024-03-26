import React from "react";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const AccentPrimeHero = (props: Props) => {
  return (
    <section className="min-h-[640px] relative bg-accentp bg-cover bg-no-repeat flex justify-end py-10 lg:-ml-10 2xl:px-20">
      <div className="flex flex-col justify-between gap-5  max-w-[560px] text-dark3">
        <h1 className="text-40 font-medium max-w-[560px] ">
          ACCENT PRIME ULTRASOUND & RADIOFREQUENCY
        </h1>
        <p className="text-base">
          Integrative Wellness is Alma Laser's most advanced non-surgical
          treatment for skin tightening, Fat reduction and body contouring
          without invasive surgery, (slimming and aesthetic enhancement.) can be
          used on a range of skin conditions like stretch marks, scars and
          melasma, also lightening and rejuvenation the skin.
        </p>
        <p className="text-base">
          This technology combines the latest innovations of ultrasound (US) and
          radio frequency (RF) technologies to deliver effective, highly
          treatments with natural, long lasting results.
        </p>
        <CustomButton>Book you appointment</CustomButton>
      </div>
    </section>
  );
};
