import React from "react";
import CustomButton from "../ui/CustomButton";

type Props = {};

export const FinancingQuestion = (props: Props) => {
  return (
    <section className="bg-secondary2 py-14">
      <div className="w-5/6 mx-auto flex flex-col gap-4 text-dark3">
        <h2 className="text-3xl font-medium text-center ">
          Have Questions About Financing? We Have Answers! 
        </h2>
        <p className="text-base text-left ">
          We understand that financing may be critical to moving forward with
          treatment, and we’ll help you choose among your best options. We
          invite you to call us at (614) 300-5209 to get in touch with our team
          and to schedule your personal consultation.
        </p>
        
        <div className="mx-auto">
          <CustomButton>Let’s Talk Today</CustomButton>
        </div>
      </div>
    </section>
  );
};
