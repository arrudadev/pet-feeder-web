import dynamic from 'next/dynamic';

import { ApexOptions } from 'apexcharts';

import { theme } from '@chakra-ui/react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type AreaChartProps = {
  labels?: string[];
  series?: number[];
};

export const AreaChart: React.FC<AreaChartProps> = ({ labels, series }) => {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        '2021-11-10T10:00:00.000z',
        '2021-11-10T11:00:00.000z',
        '2021-11-10T12:00:00.000z',
        '2021-11-10T13:00:00.000z',
        '2021-11-10T14:00:00.000z',
        '2021-11-10T15:00:00.000z',
        '2021-11-10T16:00:00.000z',
      ],
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };

  const series2 = [
    { name: 'series1', data: [31, 120, 10, 28, 58, 60, 22, 50] },
  ];

  return (
    <Chart
      options={options}
      series={series2}
      type="area"
      height={250}
      width={450}
    />
  );
};
