import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import axios from "axios";
import { useEffect, useState } from "react";

const RevenueChart = () => {
  const [data, setData] = useState([{ id: 0, month: "", year: "", revenue: 0 }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = "http://localhost:3001";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/revenues`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar os dados da receita.");
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
      name: "Receita",
      data: data.map((item) => item.revenue),
    },
  ];

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id="revenue-chart-container">
      <h2>Revenue Chart</h2>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default RevenueChart;
