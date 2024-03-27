import React from "react";
import MainLayout from "../layouts/MainLayout";
import { ContourHero } from "../components/AccentPrimeContouring/ContourHero";
import { AccentPrimeFaceCard } from "../components/AccentPrime/AccentPrimeFaceCard";
import { ConturingCard } from "../components/AccentPrimeContouring/ConturingCard";
import { ConturingCard2 } from "../components/AccentPrimeContouring/ConturingCard2";
import before from "../images/body-contouring-before-and-after.png";
import after from "../images/ACCENT-PRIME-BEFORE-AND-AFTER-e1676916171917.png";
import skinafter from "../images/skin-tightening-before-and-after-Accent-Prime-2.png";
import skinabefore from "../images/skin-tightening-before-and-after-Accent-Prime.png";
import cellulatebefore from "../images/cellulite-treatment-before-and-after-Accent-Prime-2.png";
import cellulateafter from "../images/cellulite-treatment-before-and-after-Accent-Prime.png";
import stretcheafter from "../images/Strech-Mark-Before-and-After-Accent-Prime-2.png";
import stretchebefore from "../images/stretch-mark-before-and-after-Accent-Prime.png";
import Partners from "../components/shared/Partners";
import { AccentPrimeTable } from "../components/AccentPrimeContouring/AccentPrimeTable";

type Props = {};

const AccentPrimeContouring = (props: Props) => {
  return (
    <MainLayout>
      <ContourHero />
      <AccentPrimeFaceCard />
      <ConturingCard
        title="Accent Prime | Reduce Fat + Cellulite and Tighten Skin"
        consult
        desc1="Accent Prime is the latest treatment for non-surgical body contouring and face contouring. The treatment combines Radio Frequency and Ultrasound energy to tighten skin, reduce fat and cellulite, and rejuvenate the skin. Best of all, treatments are fully customized to provide lasting results that reveal your natural beauty."
        desc2="Learn more about the most advanced face and body contouring treatment on the market by contacting the Wellife Center. Conveniently located in Sandy Springs, GA, the Wellife Center is proud to serve people living in and around Atlanta. Find out if Accent Prime is right for you by scheduling a free consultation. Call the Wellife Center at (678) 274-4928 or reach out online today."
      />
      <ConturingCard
        white
        title="How does it work?"
        desc1="Alma Laser, leaders in non-invasive aesthetic tech, delivers their most advanced workstation with Accent Prime. The comprehensive device combines Ultrasound (US) energy with Radio Frequency (RF) technology to rejuvenate the skin and reduce the stubborn fat below. "
      />
      <ConturingCard
        title="Applicators"
        desc1="This comprehensive workstation comes equipped with different applicators. These applicators perform different treatments, including skin tightening, skin rejuvenation, and face and body contouring. There are even applicators for skin resurfacing. During your consultation with the Wellife Center, your specialist will explain which applicators are best suited to meet your aesthetic goals."
      />
      <ConturingCard
        white
        title="Fat Reduction"
        desc1="Accent Prime eliminates fat cells using patented Ultrasound technology called “Cold Shear Wave.” Cold Shear Wave delivers both transverse and longitudinal ultrasound waves. This combination of Ultrasonic energy targets fat cells without affecting the surrounding skin or tissue. The sound waves cause intense vibrations that disrupt the membranes of subcutaneous fat cells. The damaged membranes are unable to store fat. This induces a process known as lipolysis (lipo = fat cell + lysis = cell death.) The destroyed fat cells are collected by the lymphatic system and naturally excreted from the body in the form of waste. This process takes several weeks; however, once fat cells are eliminated, they are gone for good."
      />
      <ConturingCard
        title="Treatment Areas"
        desc1="The Accent Prime workstation comes equipped with different sized applicators to treat different areas of stubborn fat, including submental fat, also known as a double chin. Popular treatment areas include: "
        treatment
      />
      <ConturingCard2
        title="Fat Reduction Before and After*"
        desc1="These before and after images depict real patients. Their impressive results emphasize the importance of selecting a skilled provider to perform this technique-sensitive procedure. As with any aesthetic treatment, results may vary.*"
        img1={after}
        img2={before}
      />
      <ConturingCard
        title="Skin Tightening"
        desc1="Accent Prime tightens skin on both the body and face using advanced Radiofrequency (RF) technology. UniPolar Radio Frequency delivers this energy to a specific skin layer using focused depth control.
        UniPolar RF energy creates dielectric energy, a form of deep thermal heating. The warming mechanism causes the skin to contract, leaving it looking firmer and tighter. Thermal heating also stimulates the production of collagen. This important protein provides a scaffolding for the skin, helping it remain tight, smooth, and youthful-looking.
        Accent Prime can tighten skin anywhere on the body. Popular treatment areas include:
        "
        skin
      />
      <ConturingCard2
        title="Skin Tightening Before and After*"
        desc1="These before and after images depict real patients. Their impressive results emphasize the importance of selecting a skilled provider to perform this technique-sensitive procedure. As with any aesthetic treatment, results may vary.*"
        img1={skinafter}
        img2={skinabefore}
      />
      <ConturingCard
        title="Cellulite Reduction"
        desc1="Accent Prime utilizes advanced UniPolar RF energy to rejuvenate tissue with deep thermal heating. This effect disrupts fat cells and promotes metabolic flow throughout subcutaneous tissue to smooth out the appearance of dimpled skin."
      />
      <ConturingCard2
        title="Cellulite Reduction Before and After*"
        desc1="These before and after images depict real patients. Their impressive results emphasize the importance of selecting a skilled provider to perform this technique-sensitive procedure. As with any aesthetic treatment, results may vary.*"
        img1={cellulatebefore}
        img2={cellulateafter}
      />
      <ConturingCard
        title="Stretch Marks"
        desc1="The same applicators and RF energy that tighten skin can also rejuvenate the appearance of stretch marks. Thermal heating stimulates collagen production, rejuvenating the scars known as striae or stretch marks."
      />
      <ConturingCard2
        title="Stretch Mark Removal Before and After*"
        desc1="These before and after images depict real patients. Their impressive results emphasize the importance of selecting a skilled provider to perform this technique-sensitive procedure. As with any aesthetic treatment, results may vary.*"
        img1={stretcheafter}
        img2={stretchebefore}
      />
      <ConturingCard
        title="How Much Does Accent Prime Cost?"
        desc1="Accent Prime is a customizable treatment, and its price is determined by the specific parameters of each patient’s treatment plan. To get a quote for how much Accent Prime treatments may cost you, schedule a free consultation with the Wellife Center. As the leading provider of non-invasive skin and body treatments, Wellife offers great incentives for new patients. Find out how to save money on your treatment by reaching out online or calling (678) 274-4928 today."
      />
      <ConturingCard
        title="Is It Safe?"
        white
        desc1="This body and face contouring treatment is completely non-invasive. The treatment is safe for all skin types and tones. Additionally, accent prime can gently treat delicate areas of skin around the face, neck, and chest."
      />
      <ConturingCard
        title="Side Effects"
        desc1="No known side effects have been reported. Furthermore, the treatment requires no downtime. You can return to your normal activities immediately after your treatment."
      />
      <ConturingCard
        title="How Many Treatments Will I Need?*"
        desc1="While results may vary, most patients begin to see results after their second treatment. However, we recommend 4 to 6 treatments to obtain the most optimal outcomes possible.*"
        white
      />
      <ConturingCard
        title="Accent Prime Vs. Coolsculpting"
        desc1="Accent Prime holds its own compared to any other non-invasive body contouring treatment. Compared to CoolSculpting, the leading non-surgical fat reduction treatment, Accent Prime offers patients many advantages."
      />
      <AccentPrimeTable />
      <ConturingCard
        title="ACCENT PRIME NEAR ME"
        desc1="Take the first step towards a more confident you by contacting the Wellife Center today. Find out if Accent Prime is right for you by scheduling a free consultation with the Wellife Center online or calling 678-404-5680."
      />
      <Partners />
    </MainLayout>
  );
};

export default AccentPrimeContouring;
