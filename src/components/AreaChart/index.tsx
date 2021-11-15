import dynamic from 'next/dynamic';

import { ApexOptions } from 'apexcharts';

import { theme } from '@chakra-ui/react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type AreaChartProps = {
  categories: string[];
  series: number[];
};

export const AreaChart: React.FC<AreaChartProps> = ({ categories, series }) => {
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
      categories,
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

  const seriesData = [
    { name: 'Quantidade de Ração', data: series },
  ];

  return (
    <Chart
      options={options}
      series={seriesData}
      type="area"
      height={250}
      width={450}
    />
  );
};
