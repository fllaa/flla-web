import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import * as echarts from "echarts";

export const Chart = component$(() => {
  const chartRef = useSignal<HTMLCanvasElement>();

  useVisibleTask$(() => {
    const chart = echarts.init(chartRef.value!);
    chart.setOption({
      xAxis: {
        type: "category",
        data: ["A", "B", "C"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 200],
          type: "line",
        },
      ],
    });
  });
  return <canvas ref={chartRef} width={1080} height={500}></canvas>;
});
