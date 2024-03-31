import React from "react";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const CTA = (props: Props) => {
  return (
    <section className="w-5/6 mx-auto py-14 flex flex-col gap-10">
      <p className="text-base text-dark3 text-left">
        We all have to start somewhere. To get you on the right track to
        achieving your weight loss goals, we offer a free metabolic analysis and
        complimentary consultation to assess where you are and where you want to
        be. We’ll review your weight loss goals, medical history, current
        nutrition, and goal timeline. From there, we can customize a plan
        tailored to your individual needs, aspirations, and lifestyle.
        Our licensed medical providers are trained and certified in obesity
        medicine (OMA) and weight management. Your medical provider will manage
        your prescriptions and our weight loss health
        coaches will provide guidance on your diet and support you every step
        along the way. Submit the form above to get your free consultation. 
      </p>
      <div className="flex justify-between items-center w-4/6 mx-auto">
        <CustomButton>Ready To Get Started?</CustomButton>
        <CustomButton className="!bg-white border border-dark3 !text-dark3">BMI Calculator</CustomButton>
      </div>
    </section>
  );
};
