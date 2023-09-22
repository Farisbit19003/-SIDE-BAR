import React from "react";
import Charts from "react-apexcharts"
const BarChart = ({
  widgetTitle,
  series,
  colors,
  categories,
}) => {
  const options = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '65%',
          endingShape: 'flat',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        width: 2,
      },
      grid: {
        borderColor: '#F7F7F7',
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      colors: colors,
      xaxis: {
        labels: {
          show: true,
          style: {
            colors: '#161F6A',
            fontSize: '14px',
            fontFamily: "'Lato', sans-serif",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: categories,
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          style: {
            color: '#161F6A',
            fontSize: '14px',
            fontFamily: "'Lato', sans-serif",
          },
        },
      },
    },
    series: [
      {
        name: 'Sale',
        data: series,
      },
    ],
  };

  return (
    <div className="h-full w-full border border-[#f2f2f2] rounded bg-white shadow-sm">
      <div className="flex items-center justify-between px-3 py-8">
        <h3 className="text-lg font-semibold font-sans ">{widgetTitle}</h3>
      </div>

      <div className="w-full flex-wrap block">
        <Charts
          options={options.options}
          series={options.series}
          height="350"
          width="100%"
          type="bar"
        />
      </div>
    </div>
  );
};

export default BarChart;
