import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { getAllGoals } from "../../api/Api";

function GoalsChart() {
  const [data, setData] = useState([{ current: 0, target: 0, type: "" }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllGoals();
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar os dados da meta.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const firstGoal = data[0];

  const options: ApexOptions = {
    chart: {
      type: "radialBar",
    },
    fill: {
      type: "solid",
      colors: ["#e187bc"],
    },
    labels: [firstGoal.type],
  } as ApexCharts.ApexOptions;

  const series = [(100 * firstGoal.current) / firstGoal.target];

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id="goals-chart-container">
      <h2>Goals Chart</h2>
      <Chart options={options} series={series} type="radialBar" height={350} />
      <div>
        <div>
          <strong>Current: </strong>
          <span>{firstGoal.current}</span>
        </div>
        <div>
          <strong>Target: </strong>
          <span>{firstGoal.target}</span>
        </div>
      </div>
    </div>
  );
}

export default GoalsChart;
