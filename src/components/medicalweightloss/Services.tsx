import React from "react";
import CustomButton from "../ui/CustomButton";
import { MedicationIcon, PhysicianIcon, WeightLossIcon } from "../../icons/MedicalIcon";

type Props = {};

const data = [
  {
    id: 1,
    title: "Physician Supervised Programs",
    desc: "No two bodies are the same; so no two weight loss programs should be the same either. At Options Medical Weight Loss, our board-certified obesity doctors design custom-tailored programs for each individual that walks through our doors. Using the patient’s unique biomarkers and medical history…",
    icon: <PhysicianIcon />,
  },
  {
    id: 2,
    title: "Prescription Weight Loss Medications",
    desc: "Options Medical Weight loss is proud to prescribe a variety of FDA approved medications for appetite suppression. With 2 out of 3 adults overweight and 1 out of 3 adults obese, the need for weight loss intervention is great. FDA approved medication for weight loss works by suppressing appetite…",
    icon: <MedicationIcon />,
  },
  {
    id: 3,
    title: "GLP-1s for Weight Loss",
    desc: "GLP-1 medications (glucagon-like peptide 1s) are one of the most effective drug classes for long-term weight loss on the market. Research has shown that patients using GLP-1s can lose between 15% and 20% of their bodyweight. ",
    icon: <WeightLossIcon />,

  },
  {
    id: 4,
    title: "Lipotropic Fat Burners",
    desc: "Do you need something to help burn fat faster along with your well-balanced diet and exercise? Try our Lipotropic fat burning injections at Options Medical Weight loss. Lipotropic (lipo) shots are fat burning injections of vitamins and amino acids that encourage the body to burn fat. These compounds help accelerate…",
    icon: <MedicationIcon />,

  },
  {
    id: 5,
    title: "B12 Injections",
    desc: "B12 (Cobalamin), is one of the eight B vitamins that is needed to ensure the proper functioning and health of nerve tissue, brain function and the production of red blood cells. (Basically, an energy booster with vitamins.)…",
    icon: <MedicationIcon />,

  },
  {
    id: 6,
    title: "One-on-One Health Coaching",
    desc: "Weight loss is a journey. And it’s not always easy. It helps to have someone in your corner. A coach. A friend. A fan. At Options, we’re all of these things. Our weekly one-on-one weight loss health coaching sessions keep you on track to reach your goals. We listen to your struggles and cheer on your successes. Every step the way…",
    icon: <MedicationIcon />,

  },
];

export const Services = (props: Props) => {
  return (
    <section className="w-5/6 mx-auto py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
      {data.map((item: any) => (
        <div
          key={item.id}
          className="bg-secondary2 px-2 py-6 flex flex-col justify-between gap-5 text-center"
        >
          <div className="mx-auto mt-4">{item.icon}</div>
          <div className="flex flex-col gap-3 text-dark3">
            <p className="text-2xl font-medium text-center">{item.title} </p>
            <span className="text-base text-left">{item.desc} </span>
          </div>
          <div className="mx-auto">
            <CustomButton className="!bg-[#60605F]">View Service</CustomButton>
          </div>
        </div>
      ))}
    </section>
  );
};
