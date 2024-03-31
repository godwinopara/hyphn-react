import React from "react";
import MainLayout from "../layouts/MainLayout";
import { MedicalWeightHero } from "../components/medicalweightloss/MedicalWeightHero";
import { Description } from "../components/medicalweightloss/Description";
import { Experience } from "../components/medicalweightloss/Experience";
import { Services } from "../components/medicalweightloss/Services";
import Partners from "../components/shared/Partners";
import { CTA } from "../components/medicalweightloss/CTA";

type Props = {};

const MedicalWeightLoss = (props: Props) => {
  return (
    <MainLayout>
      <MedicalWeightHero />
      <Description />
      <Experience />
      <Services />
      <CTA />
      <Partners />
    </MainLayout>
  );
};

export default MedicalWeightLoss;
