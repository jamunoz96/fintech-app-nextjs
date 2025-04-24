"use client";

import styled from "styled-components";
import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Heading } from "../ui/heading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ProductPerformanceProps {
  product: Product;
}

const PerformanceCard = styled.div`
  background-color: white;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 1.5rem;
  height: 100%;
`;

export function ProductPerformance({ product }: ProductPerformanceProps) {
  const getChartTitle = () => {
    const chartTitles: Record<string, string> = {
      Inversión: "Rendimiento histórico",
      Cuenta: "Tasa de interés",
      Tarjeta: "Tasa de interés anual",
      Préstamo: "Tasa de interés fija",
      Hipoteca: "Tasa de interés fija",
    };

    return chartTitles[product.type] || "Rendimiento";
  };

  const chartData: ChartData<"line"> = {
    labels: product.performanceData?.labels || [],
    datasets: [
      {
        label: product.name,
        data: product.performanceData?.values || [],
        borderColor: "#0070f3",
        backgroundColor: "rgba(0, 112, 243, 0.1)",
        borderWidth: 2,
        pointBackgroundColor: "#0070f3",
        pointRadius: 3,
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: getChartTitle(),
        font: {
          size: 14,
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              if (
                product.type === "Inversión" &&
                product.performanceData?.values[0] === 100
              ) {
                label += context.parsed.y.toFixed(1);
              } else if (product.interestRate) {
                label += context.parsed.y.toFixed(2) + "%";
              } else {
                label += context.parsed.y.toFixed(2);
              }
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            size: 10,
          },
          callback: (value) => {
            if (
              product.type === "Inversión" &&
              product.performanceData?.values[0] === 100
            ) {
              return value;
            } else if (product.interestRate) {
              return Number(value).toFixed(2) + "%";
            } else {
              return value;
            }
          },
        },
      },
    },
  };

  return (
    <PerformanceCard>
      <Heading as="h3" className=" mb-4">
        Rendimiento
      </Heading>

      <div className="w-full h-[200px] mb-4">
        {product.performanceData &&
        product.performanceData.values.length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 rounded">
            <p className="text-gray-500">Información no disponible</p>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-500 mb-4">
        {product.type === "Inversión"
          ? "El rendimiento pasado no garantiza resultados futuros. La inversión conlleva riesgos."
          : "Las tasas pueden variar según las condiciones del mercado y políticas del banco."}
      </p>

      <Button className="w-full">Solicitar ahora</Button>
    </PerformanceCard>
  );
}
