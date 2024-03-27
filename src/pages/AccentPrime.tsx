import React from "react";
import MainLayout from "../layouts/MainLayout";
import { AccentPrimeHero } from "../components/AccentPrime/AccentPrimeHero";
import { AccentPrimeFaceCard } from "../components/AccentPrime/AccentPrimeFaceCard";
import { AccentPrimeCard } from "../components/AccentPrime/AccentPrimeCard";
import ultrasound from "../images/ultrasound.png";
import skin from "../images/skin.png";
import { Cellulite } from "../components/AccentPrime/Cellulite";
import { Benefits } from "../components/AccentPrime/Benefits";
import { Treatment } from "../components/AccentPrime/Treatment";
import { How } from "../components/AccentPrime/How";
import { Question } from "../components/AccentPrime/Question";
import { SubQuestions } from "../components/AccentPrime/SubQuestions";
import Partners from "../components/shared/Partners";

type Props = {};

const AccentPrime = (props: Props) => {
  return (
    <MainLayout>
      <AccentPrimeHero />
      <AccentPrimeFaceCard />
      <AccentPrimeCard
        heading="Integrative wellness face & body contouring"
        desc="Treatments effectively remove stubborn fat deposits, reduce the
            appearance of cellulite, tighten loose skin and visibly improve the
            shape and contours of the face and body.A combination of ultrasound
            and RF technologies achieves superior results, giving you a
            naturally sculpted appearance without the pain and downtime of more
            invasive procedures. Look thinner, feel better and reveal the beauty
            of your natural contours."
        img={ultrasound}
      />
      <Cellulite />
      <AccentPrimeCard
        heading="Skin rejuvenation"
        desc="As we age, the tone and texture of our skin changes. Accent Prime uses microplasma RF technology to smooth out and balance the skin- improving overall skin tone and texture, improving the appearance of stretch marks and reducing superficial pigmentation, while helping to bolster the skin against future aging."
        img={skin}
        reverse
      />
      <Benefits />
      <Treatment />
      <How />
      <Question />
      <SubQuestions />
      <Partners />
    </MainLayout>
  );
};

export default AccentPrime;
