import Chart from "react-apexcharts";

const RevenueChart = () => {
  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "solid",
      colors: ["#e187bc"],
    },
    xaxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 100, 150, 200],
    },
  ];

  return (
    <div id="revenue-chart-container">
      <h2>Revenue Chart</h2>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default RevenueChart;
