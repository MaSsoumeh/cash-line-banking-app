"use client";

import CountUp from "react-countup";

interface Props {
  amount: number;
  prefix?: string;
  decimal?: string;
  decimals?: number;
}

const AnimatedCounter: React.FC<Props> = (props) => {
  const { amount, prefix, decimals = 2, decimal = "." } = props;

  return (
    <CountUp
      end={amount}
      duration={1}
      prefix={prefix}
      decimal={decimal}
      decimals={decimals}
    />
  );
};

export default AnimatedCounter;
