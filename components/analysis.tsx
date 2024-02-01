"use client";
import React, { useRef, useState } from "react";
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

const options1: Highcharts.Options = {
  chart: {
    type: "line",
  },
  title: {
    text: "Sentiment over time for Westside Market 180 Third Avenue (between 16th & 17th St)",
    align: "left",
    margin: 60,
  },

  xAxis: {
    crosshair: true,
    accessibility: {
      description: "Countries",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Average Sentiments",
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
    series: {
      color: "#FF0000",
    },
  },
  series: [
    {
      showInLegend: false,
      type: "line",
      name: "Sentiment",
      data: [
        29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4,
      ],
    },
  ],
  credits: {
    enabled: false,
  },
};

const options3: Highcharts.Options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Number of reviews over time for Westside Marget 180 Third Avenue (between 16th & 17th St)",
    align: "left",
    margin: 60,
  },

  xAxis: {
    crosshair: true,
    labels: {
      enabled: false,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: undefined,
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
      data: [12, 8, 16, 15],
      // colorByPoint: true,
      color: "#FF0000",
    },
  ],
  credits: {
    enabled: false,
  },
};
const options4: Highcharts.Options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Star Rating Distribution for Westside Marget 180 Third Avenue (between 16th & 17th St)",
    align: "left",
    margin: 60,
  },

  xAxis: {
    crosshair: true,
    labels: {
      enabled: false,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: undefined,
    },
  },
  // tooltip: {
  //   valueSuffix: " (1000 MT)",
  // },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      pointWidth: 10,
    },
  },
  series: [
    {
      showInLegend: false,
      type: "column",
      name: "Sentiment1",
      data: [6000, 5000, 8000, 7500],
      // colorByPoint: true,
      color: "#FF0000",
    },
  ],
  credits: {
    enabled: false,
  },
};
const options5: Highcharts.Options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Number of reviews over time for Westside Marget 180 Third Avenue (between 16th & 17th St)",
    align: "left",
    margin: 60,
  },

  xAxis: {
    crosshair: true,
    labels: {
      enabled: false,
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: undefined,
    },
  },
  // tooltip: {
  //   valueSuffix: " (1000 MT)",
  // },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      pointWidth: 10,
    },
  },
  series: [
    {
      showInLegend: false,
      type: "column",
      name: "Sentiment",
      data: [6000, 5000, 8000, 7500],
      // colorByPoint: true,
      color: "#FF0000",
    },
  ],
  credits: {
    enabled: false,
  },
};

export default function Analysis(props: HighchartsReact.Props) {
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      {buttonStatus === false ? (
        <div className="mx-auto px-20 sm:px-24">
          <p className="text-5xl font-bold my-8">
            Sentiment Analysis - Westside Market NYC
          </p>

          <form>
            <div className="flex flex-col w-fit">
              <label className="text-sm font-bold">Select a store</label>
              <select className="my-8 rounded-3xl border-slate-200 border-2 w-56">
                <option>Westside</option>
              </select>
            </div>

            <button
              className="btn-sm bg-indigo-500 rounded-lg text-white"
              onClick={() => {
                setButtonStatus(true);
              }}
            >
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

            <div className="my-8">
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
      ) : (
        <div className="mx-auto px-20 sm:px-24">
          <p className="text-5xl font-bold my-8">
            Sentiment Analysis for Westside Market 180 Third Avenue(between 16th
            and 17th St)
          </p>

          <form>
            <div className="w-3/4 my-8">
              <HighchartsReact
                highcharts={Highcharts}
                options={options1}
                ref={chartComponentRef}
                {...props}
              />
            </div>

            <div className="w-3/4 my-12">
              <HighchartsReact
                highcharts={Highcharts}
                options={options3}
                ref={chartComponentRef}
                {...props}
              />
            </div>

            <div className="w-3/4 my-12">
              <HighchartsReact
                highcharts={Highcharts}
                options={options4}
                ref={chartComponentRef}
                {...props}
              />
            </div>

            <div className="w-3/4 my-12">
              <HighchartsReact
                highcharts={Highcharts}
                options={options5}
                ref={chartComponentRef}
                {...props}
              />
            </div>

            <div className="my-8">
              <p className="font-bold">Reveiw Date: 2022-08-30</p>
              <p className="">
                Comment: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitati
              </p>
            </div>

            <div className="my-8">
              <p className="font-bold">What response would you like to pick:</p>
              <p className="bg-gray-200 border border-solid border-black">
                Hi (name), we apologize for the poor experience you had with our
                produce and fresh foods. We take quality control very seriously,
                and we appreciate you bringing this to our attention.
              </p>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
