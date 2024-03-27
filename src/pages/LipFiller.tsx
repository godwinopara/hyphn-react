import React from "react";
import MainLayout from "../layouts/MainLayout";
import { LipfillerHeading } from "../components/LipFiller/LipfillerHeading";
import { LipfillerHero } from "../components/LipFiller/LipfillerHero";
import { NaturalLipfiller } from "../components/LipFiller/NaturalLipfiller";
import { LipfillerCard } from "../components/LipFiller/LipfillerCard";
import lip1 from "../images/lip1.png";
import lip2 from "../images/lip2.png";
import lip3 from "../images/lip3.png";
import Partners from "../components/shared/Partners";
import { Offers } from "../components/LipFiller/Offers";

type Props = {};

const LipFiller = (props: Props) => {
  return (
    <MainLayout>
      <LipfillerHeading />
      <LipfillerHero />
      <NaturalLipfiller />
      <LipfillerCard
        title="What Is A Lip Augmentation?"
        desc1="The main purpose of a lip augmentation is to gain more voluminous, plump lips. In the field of plastic surgery, the word “augmentation” means an increase in volume, which is ultimately what lip filler helps us to achieve."
        desc2="When you receive a lip filler treatment, your lips will become more noticeable and defined in terms of both size and projection, and the results are seen immediately. After, patients often their lips make them feel more confident, desirable and beautiful than before!"
        img={lip1}
      />
      <LipfillerCard
        title="Never Over-Done: Our Approach To Lip Injections"
        desc1="Our experts take an artful approach to fill the lips and restoring lost volume. We use precise injection techniques that enhance beauty while maintaining facial identity and elevating your face’s natural beauty. There is no one-size-fits-all approach to lip filler, which is why this customized approach to each patient’s anatomy is so important."
        img={lip2}
        white
        reverse
      />
      <LipfillerCard
        title="Building Subtle, Natural Volume"
        desc1="Enhancing the lips gradually is the most common technique that we employ. If you are looking to add significant volume, your treatment plan may involve more than one session. We may address adding the underlying structure of your lips first, and then employ a series of several different techniques to build the lips up over time. This gradual method results in very beautiful volume — lips that look natural and not “overdone.”"
        img={lip3}
        desc2="A common misconception about lip filler is that it invariably leads to artificial, “duck”-like, or inflated lips. While this look is achievable, the techniques used by an experienced injector can enhance and manipulate the natural shape of the lips without distorting your natural features."
      />
      <Offers />
      <Partners />
    </MainLayout>
  );
};

export default LipFiller;
