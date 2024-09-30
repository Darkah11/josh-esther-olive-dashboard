"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Filler
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Filler
  );

export default function LineChart() {
    const [chartData, setChartData] = useState({
        datasets: [],
      });
//       var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
// gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
// gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");
    
      const [chartOptions, setChartOptions] = useState({})
    
      useEffect(() => {
        setChartData({
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: false,
            data: [ 10, 40, 35, 40, 62, 55, 58, 60, 65, 45, 60, 50],
            borderColor: "rgba(0, 104, 148, 1)",
            pointBorderColor: "transparent",
            pointBorderWidth: 0,
            pointRadius: 0,
            tension: 0.5,
            backgroundColor: ({chart: {ctx}}) => {
                const bg = ctx.createLinearGradient(0, 300, 0, 80);
                bg.addColorStop(0, "rgba(0, 104, 148, 0)");
                bg.addColorStop(0.5, "rgba(0, 104, 148, 0.2)");
                bg.addColorStop(1, "rgba(0, 104, 148, 1)");
                return bg;
              },
            fill: true
            // fill: {
            //     target: "origin", // 3. Set the fill options
            //     above: "rgba(0, 104, 148, 1)"
            //   }
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
        <h2 className=' font-bold text-xl mb-10'>Scholarships & Job Posts</h2>
        <Line data={chartData} options={chartOptions}/>
    </div>
        
    </>
  )
}
