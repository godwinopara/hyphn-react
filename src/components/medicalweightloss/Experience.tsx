import React from "react";
import dr1 from "../../images/dr1.png";
import dr2 from "../../images/dr2.png";

type Props = {};

export const Experience = (props: Props) => {
  return (
    <section className="w-5/6 mx-auto py-10 flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <div className="flex-1 ">
          <img src={dr1} alt="" className="rounded-[26px] object-cover" />
        </div>
        <div className="flex-1">
          <img src={dr2} alt="" className="rounded-[26px] object-cover" />
        </div>
      </div>
      <h2 className="text-32 text-center text-dark3">
        Dr. Loliya’s Experience
      </h2>
      <p className="text-base text-dark3">
        I've faced challenges with weight loss throughout my life, and I want to
        emphasize that there's no quick fix or easy solution. However, with a
        positive mindset and consistent effort, you can reach and sustain your
        weight loss objectives. At Integrative Wellness, you'll have a dedicated
        supporter and coach accompanying you on every part of your journey.
        While I playfully refer to myself as I joke about being the captain of
        the weight loss struggle bus be confident we will work with you to make
        it less of a struggle.{" "}
      </p>
    </section>
  );
};
