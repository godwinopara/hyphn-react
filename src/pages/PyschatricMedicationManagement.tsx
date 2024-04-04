import React from "react";
import MainLayout from "../layouts/MainLayout";
import { PyschatricMedicationHero } from "../components/PyschatricMedication/PyschatricMedicationHero";
import { PyschaQuestion } from "../components/PyschatricMedication/PyschaQuestion";
import { Process } from "../components/PyschatricMedication/Process";
import Partners from "../components/shared/Partners";

type Props = {};

export const PyschatricMedication = (props: Props) => {
  return (
    <MainLayout>
      <PyschatricMedicationHero />
      <PyschaQuestion />
      <Process />
      <Partners />
    </MainLayout>
  );
};
