import React from "react";

type Props = {};
const data = [
  {
    id: 1,
    title: "Revanesse Fillers",
    desc1:
      "Revanesse is a brand of dermal fillers known for its commitment to providing natural-looking and long-lasting results. The formulations within the Revanesse range are crafted with precision to address various facial concerns.",
    desc2:
      "These fillers often contain hyaluronic acid, a naturally occurring substance in the body that contributes to skin hydration and elasticity. Revanesse products are designed to be versatile, catering to different treatment areas and individual needs.",
  },
  {
    id: 2,
    title: "Juvederm Fillers",
    desc1:
      "Juvederm is a well-established and widely recognized brand in the field of dermal fillers. Known for its comprehensive range of products, Juvederm utilizes hyaluronic acid-based formulations to target specific aesthetic goals.",
    desc2:
      "Juvederm fillers are often categorized into different product lines, each tailored to address particular concerns such as fine lines, volume loss, or lip enhancement.",
  },
];

export const Filler = (props: Props) => {
  return (
    <section className="bg-secondary2   py-28">
      <div className="w-5/6 mx-auto flex items-center justify-between md:px-14 py-16 xl:px-24 xl:py-14">
        {data.map((item: any) => (
          <div key={item.id} className="flex flex-col gap-5 text-dark3 max-w-md">
            <h1 className="text-32 font-medium">{item.title}</h1>
            <p className="text-base ">{item.desc1} </p>
            <p className="text-base ">{item.desc2} </p>
          </div>
        ))}
      </div>
    </section>
  );
};
