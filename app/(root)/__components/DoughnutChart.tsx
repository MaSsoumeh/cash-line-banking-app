"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { options } from "joi";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  accounts: Account[];
}

const DoughnutChart: React.FC<Props> = ({ accounts }) => {
  const data = {
    datasets: [
      {
        label: "Balance",
        data: accounts.map((acc) => acc.currentBalance),
        backgroundColor: [
          "#0179FE",
          "#4893FF",
          "#85B7FF",
          "#BED9FF",
          "#E9F2FF",
        ],
      },
    ],
    labels: accounts.map((acc) => acc.officialName),
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "65%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
