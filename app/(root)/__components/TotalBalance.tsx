import AnimatedCounter from "@/components/animatedCounter";
import DoughnutChart from "@/app/(root)/__components/DoughnutChart";
import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";

interface Props {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}

const TotalBalance: React.FC<Props> = (props) => {
  const { accounts, totalBanks, totalCurrentBalance } = props;

  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6">
      <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          {totalBanks} {`Bank ${totalBanks > 1 ? "Accounts" : "Account"}`}
        </h2>

        <div className="flex flex-col gap-2">
          <p className="text-14 font-medium text-gray-600">
            Total Current Balance
          </p>
          <div className="text-24 lg:text-30 flex-1 font-semibold text-gray-900 flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} prefix="$" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalance;
