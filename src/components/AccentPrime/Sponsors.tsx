import React from "react";
import { Sponsor1, Sponsor2, Sponsor3 } from "../../icons/AccentPrimeIcons";

type Props = {};

export const Sponsors = (props: Props) => {
  return (
    <section className="bg-white h-28 flex items-center justify-center gap-7">
      <Sponsor1 />
      <Sponsor2 />
      <Sponsor3 />
    </section>
  );
};
