import React from "react";
import Card from "../ui/Card";

type Props = {
  title: string;
  desc1: string;
  desc2?: string;
  desc3?: string;
  img: string;
  white?: boolean;
  reverse?: boolean;
};

export const LipfillerCard = ({
  title,
  desc1,
  desc2,
  desc3,
  img,
  white,
  reverse,
}: Props) => {
  return (
    <div className={`${white ? "bg-white" : "bg-secondary2"} `}>
      <Card reverse={reverse ? reverse : false} img={img}>
        <div className="flex flex-col gap-5 text-dark3 max-w-[464px] mx-auto">
          <h1 className="text-[32px] font-medium">{title}</h1>
          <p className="text-base ">{desc1} </p>
          {desc2 && <p className="text-base">{desc2}</p>}
          {desc3 && <p className="text-base">{desc3}</p>}
        </div>
      </Card>
    </div>
  );
};
