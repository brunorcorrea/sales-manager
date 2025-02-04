import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { getAllRevenues } from "../../api/Api";
import { useTranslation } from "react-i18next";

const RevenueChart = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([{ id: 0, month: "", year: "", revenue: 0 }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllRevenues();
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(t("error.loading.revenue"));
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options: ApexOptions = {
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
      categories: data.map((item) => item.month + "/" + item.year),
    },
  };

  const series = [
    {
      name: t("revenue.title"),
      data: data.map((item) => item.revenue),
    },
  ];

  if (loading) return <p>{t("loading.data")}</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id="revenue-chart-container">
      <h2>{t("revenue.chart.title")}</h2>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default RevenueChart;
