import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CitizenInitiativesChart = () => {
  const initiativesData = [12, 15, 10, 8, 14, 18, 20, 17, 22, 19, 23, 25]; // примерные данные по месяцам

  const data = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    datasets: [
      {
        label: 'Инициативы от граждан',
        data: initiativesData,
        backgroundColor: 'rgba(59, 130, 246, 0.6)', // мягкий синий
        borderRadius: 8,
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#4B5563',
          font: {
            size: 14,
            family: 'Avenir, sans-serif'
          }
        }
      },
      title: {
        display: false
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleColor: '#F9FAFB',
        bodyColor: '#D1D5DB',
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#6B7280'
        },
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#6B7280'
        },
        grid: {
          color: '#E5E7EB'
        }
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-tr from-white to-blue-50 shadow-xl rounded-2xl">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
        📊 Количество инициатив от граждан по месяцам
      </h2>
      <div className="overflow-x-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default CitizenInitiativesChart;
