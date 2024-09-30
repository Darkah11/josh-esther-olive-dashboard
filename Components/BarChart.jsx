"use client"
import React from "react";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({})

  function getBgColors() {
    var array  = [ 10, 40, 30, 45, 62, 55, 15, 20, 35, 10, 35, 50];
    var maxValue = Math.max.apply(this, array);
  
    var bg = array.map(a => a === maxValue ? "rgba(0, 104, 148, 1)" : "rgba(110, 185, 217, 0.36)");
    return bg;
  }

  useEffect(() => {
    setChartData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: false,
        data: [ 10, 40, 30, 45, 62, 55, 15, 20, 35, 10, 35, 50],
        backgroundColor: getBgColors(),
        borderRadius: 50
      }]
    })

    setChartOptions({
      plugins: {
        legend: {
          display: false
        },
      },
      scales: {
        x: {
            grid: {
              display: false
            }
        },
        y: {
            grid: {
              display: false
            }   
        }
    },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [])


  return (
    <>
      <div className=' border px-4 py-10 rounded-xl border-border w-1/2'>
        <h2 className=' font-bold text-xl mb-10'>Blogs & News</h2>
        <Bar data={chartData} options={chartOptions}/>    
      </div>
        
    </>
  );
}
