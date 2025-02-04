import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { getAllGoals } from "../../api/Api";
import { useTranslation } from "react-i18next";

function GoalsChart() {
  const { t } = useTranslation();
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
        setError(t("error.loading.goals"));
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

  if (loading) return <p>{t("loading.data")}</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id="goals-chart-container">
      <h2>{t("goals.chart.title")}</h2>
      <Chart options={options} series={series} type="radialBar" height={350} />
      <div>
        <div>
          <strong>{t("goal.chart.legend.current")}: </strong>
          <span>{firstGoal.current}</span>
        </div>
        <div>
          <strong>{t("goal.chart.legend.target")}: </strong>
          <span>{firstGoal.target}</span>
        </div>
      </div>
    </div>
  );
}

export default GoalsChart;
