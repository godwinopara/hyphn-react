import React from "react";

type Props = {};

export const DarmalFillerCTA = (props: Props) => {
  return (
    <section className="min-h-[80vh] relative bg-dermal bg-cover bg-no-repeat flex items-center justify-center ">
      <div className="flex flex-col gap-6">
        <h2 className="text-secondary2 text-6xl">Better Shaped Lips</h2>
        <p className="text-32 font-medium text-green-200">
          With Juvederm Volbella XC Filler
        </p>
        <div className="mx-auto ">
          <button
            className={`w-fit  px-8 flex items-center justify-center h-14 bg-primary-btn text-white text-base`}
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
