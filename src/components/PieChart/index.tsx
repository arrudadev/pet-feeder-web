import dynamic from 'next/dynamic';

import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type PieChartProps = {
  labels: string[];
  series: number[];
};

export const PieChart: React.FC<PieChartProps> = ({ labels, series }) => {
  const options: ApexOptions = {
    labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <Chart
      options={options}
      series={series}
      type="pie"
      height={250}
      width={500}
    />
  );
};
