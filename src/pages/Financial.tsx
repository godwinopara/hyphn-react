import React from "react";
import MainLayout from "../layouts/MainLayout";
import Partners from "../components/shared/Partners";
import { FinancingQuestion } from "../components/Financial/FinancingQuestion";
import { FinacialCard } from "../components/Financial/LipfillerCard";
import financeImg from "../images/financial.png";

type Props = {};

const Financial = (props: Props) => {
  return (
    <MainLayout>
      <FinacialCard
        reverse
        title="Applying For Financing With CareCredit"
        desc1="If you choose a payment plan with CareCredit, you could pay for a procedure in 6 months with 0% interest. Longer terms have an equal pay APR % depending on their length. "
        desc2="CareCredit is the preferred lender of the American Society of Plastic Surgery for elective medical/surgical loans. The application process only takes a few minutes until you know whether you’re approved. CareCredit works to help you get treated sooner, with no up-front costs and no pre-payment penalties. "
        desc3="Learn about CareCredit, apply directly for the CareCredit credit card or even pay your invoices online here. "
        img={financeImg}
        white
      />
      <FinancingQuestion />
      <Partners />
    </MainLayout>
  );
};

export default Financial;
