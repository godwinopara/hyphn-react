import React from "react";
import MainLayout from "../layouts/MainLayout";
import { DermalFillerHero } from "../components/DermalFiller/DermalFillerHero";
import { DermalfillerOverview } from "../components/DermalFiller/DermalfillerOverview";
import { LipfillerCard } from "../components/LipFiller/LipfillerCard";
import img1 from "../images/dermal2.png";
import img2 from "../images/dermal3.png";
import { Filler } from "../components/DermalFiller/Filler";
import Partners from "../components/shared/Partners";
import { DermalQuestion } from "../components/DermalFiller/DermalQuestion";
import { DarmalFillerCTA } from "../components/DermalFiller/DarmalFillerCTA";

type Props = {};

const DermalFiller = (props: Props) => {
  return (
    <MainLayout>
      <DermalFillerHero />
      <DermalfillerOverview />
      <LipfillerCard
        title="What Are Dermal Fillers?"
        desc1="Dermal fillers are injectable substances designed to add volume, smooth lines and restore contours to the face. They are commonly used for facial rejuvenation and can address areas like nasolabial folds, cheeks, lips and under-eye hollows."
        desc2="They work by adding volume to the treated areas, typically with ingredients like hyaluronic acid. This helps plump up the skin, reduce the appearance of wrinkles, and restore a more youthful and refreshed look."
        img={img1}
        white
      />
      <Filler />
      <DarmalFillerCTA />
      <LipfillerCard
        title="Do Results From Fillers Look Natural?"
        desc1="Coastal Aesthetics emphasizes a natural-looking approach when utilizing dermal fillers. Our philosophy centers on creating customized treatment plans for each client, taking into account individual facial anatomy, features, and cosmetic goals."
        desc2="We prioritize a conservative approach to avoid overfilling and aim for subtle enhancements that complement our client’s natural beauty. Through a thorough understanding of facial anatomy and precise filler placement, we strive to achieve balanced and symmetrical results that refresh the appearance without creating an artificial or exaggerated look."
        desc3="Using high-quality, hyaluronic fillers from brands like Revanesse and Juvederm work well because both are known for their natural feel and compatibility with the skin."
        img={img2}
        white
        reverse
      />
      <DermalQuestion />
      <Partners />
    </MainLayout>
  );
};

export default DermalFiller;
