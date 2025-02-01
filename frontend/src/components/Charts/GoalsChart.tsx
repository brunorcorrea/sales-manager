import Chart from "react-apexcharts";

function GoalsChart() {
  const options = {
    chart: {
      type: "radialBar",
    },
    fill: {
      type: "solid",
      colors: ["#e187bc"],
    },
    labels: ["Goals"],
  } as ApexCharts.ApexOptions;

  const series = [56];

  return (
    <div id="goals-chart-container">
      <h2>Goals Chart</h2>
      <Chart options={options} series={series} type="radialBar" height={350} />
    </div>
  );
}

export default GoalsChart;
