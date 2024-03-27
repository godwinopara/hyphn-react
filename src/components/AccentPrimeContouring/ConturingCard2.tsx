import React from "react";


type Props = {
  img1: string;
  img2: string;
  title: string;
  desc1?: string;
  desc2?: string;
};

export const ConturingCard2 = ({ img1, img2, title, desc1, desc2 }: Props) => {
  return (
    <section className={`bg-white py-14`}>
      <div className="w-5/6 mx-auto flex flex-col text-center gap-16">
        <div
          className={`
          flex flex-col gap-4 text-dark3`}
        >
          <h2 className="text-3xl font-medium ">{title}</h2>
          <div className="flex items-center gap-5">
            <div className="flex-1">
              <img src={img1} alt="" />
            </div>
            <div className="flex-1">
              <img src={img2} alt="" />
            </div>
          </div>
          <p className="text-base text-left">{desc1}</p>
          {desc2 && <p className="text-base text-left">{desc2}</p>}
        </div>
      </div>
    </section>
  );
};
