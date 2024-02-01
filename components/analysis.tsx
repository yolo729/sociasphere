"use client";
import React, { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options: Highcharts.Options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Sentiment Distribution",
    align: "left",
    margin: 60,
  },

  xAxis: {
    categories: ["Positive", "Neutral", "Negative"],
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Reponses",
    },
  },
  // tooltip: {
  //   valueSuffix: " (1000 MT)",
  // },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      pointWidth: 20,
    },
  },
  series: [
    {
      showInLegend: false,
      type: "column",
      name: "Sentiment",
      data: [75, 125, 175],
      colorByPoint: true,
      colors: ["#F94144", "#F3722C", "#F8961E"],
    },
  ],
  credits: {
    enabled: false,
  },
};

export default function Analysis(props: HighchartsReact.Props) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="mx-auto px-20 sm:px-24">
        <p className="text-3xl font-bold my-8">
          Sentiment Analysis - Westside Market NYC
        </p>

        <form>
          <div className="flex flex-col w-fit">
            <label className="text-sm font-bold">Select a store</label>
            <select className="my-8 rounded-3xl border-slate-200 border-2 w-56">
              <option>Westside</option>
            </select>
          </div>

          <button className="btn-sm bg-indigo-500 rounded-lg text-white">
            Analyze Performance
          </button>

          <div className="mt-8 w-1/2">
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              ref={chartComponentRef}
              {...props}
            />
          </div>

          <div className="mt-8">
            <p>
              2024-01-09: Westside Market 2840 Broadway (corner of 110th St):
              Kirk Sims (FIVE stars): One of the best places to shop
            </p>
            <p>
              2024-01-09: Westside Market 2840 Broadway (corner of 110th St):
              Kirk Sims (FIVE stars): One of the best places to shop
            </p>
            <p>
              2024-01-09: Westside Market 2840 Broadway (corner of 110th St):
              Kirk Sims (FIVE stars): One of the best places to shop
            </p>
            <p>
              2024-01-09: Westside Market 2840 Broadway (corner of 110th St):
              Kirk Sims (FIVE stars): One of the best places to shop
            </p>
            <p>
              2024-01-09: Westside Market 2840 Broadway (corner of 110th St):
              Kirk Sims (FIVE stars): One of the best places to shop
            </p>
            <p>
              2024-01-09: Westside Market 2840 Broadway (corner of 110th St):
              Kirk Sims (FIVE stars): One of the best places to shop
            </p>
            <p>
              2024-01-09: Westside Market 2840 Broadway (corner of 110th St):
              Kirk Sims (FIVE stars): One of the best places to shop
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
