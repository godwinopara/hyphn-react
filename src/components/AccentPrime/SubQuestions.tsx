import React from "react";
import fatReduce from "../../images/fatreduce.png";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const SubQuestions = (props: Props) => {
  return (
    <section className="bg-secondary2 py-14 ">
      <div className="w-5/6 mx-auto flex  items-center gap-10">
        <div className="flex-1 flex flex-col gap-4 text-dark3">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-medium">
              Is accent prime ultrasonic cavitation effective?
            </h1>
            <span className="text-base">
              Ultrasound cavitation is a promising and safe technology for
              localized reduction of fat and provides experimental evidence for
              its specific mechanism of action on the adipocytes.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-medium">
              Are there any side effects?
            </h1>
            <span className="text-base">
              Accent Prime is safe and effective with no side effects or
              downtime. You can return to your normal activities immediately
              after treatment.
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-medium">
              Is Accent Prime treatment safe?
            </h1>
            <span className="text-base">
              Treatments with Accent Prime Ultrasound & Radiofrequency are safe
              and effective for all skin types (I-VI) as well as for thin and
              delicate areas of the face, neck and décolleté.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-medium">Is the treatment painful?</h1>
            <span className="text-base">
              Gradual heating and an integrated cooling system prevent pain and
              a more comfortable treatment.
            </span>
          </div>
        </div>
        <div className="flex-1 ">
          <img src={fatReduce} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center my-10 ">
        <CustomButton>Book Your Appointment</CustomButton>
      </div>
    </section>
  );
};
