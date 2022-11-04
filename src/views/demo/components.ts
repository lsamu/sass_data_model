const components = {
  componentList: {
    chart: {
      title: "图表",
      children: [
        {
          id: "line",
          title: "折线图",
          img: import("@/assets/img/charts/line.png"),
        },
        {
          id: "histogram",
          title: "柱状图",
          img: import("@/assets/img/charts/histogram.png"),
        },
        {
          id: "bar",
          title: "条形图",
          img: import("@/assets/img/charts/bar.png"),
        },
        {
          id: "pie",
          title: "饼图",
          img: import("@/assets/img/charts/pie.png"),
        },
        {
          id: "ring",
          title: "环状图",
          img: import("@/assets/img/charts/ring.png"),
        },
        {
          id: "funnel",
          title: "漏斗图",
          img: import("@/assets/img/charts/funnel.png"),
        },
        {
          id: "radar",
          title: "雷达图",
          img: import("@/assets/img/charts/radar.png"),
        },
        {
          id: "map",
          title: "中国地图",
          img: import("@/assets/img/charts/map-china.png"),
        },
        {
          id: "liquidfill",
          title: "水球图",
          img: import("@/assets/img/charts/liquidfill.png"),
        },
      ],
    },
    text: {
      title: "文本",
      children: [
        {
          id: "text",
          title: "文本",
          img: import("@/assets/img/charts/text.png"),
        },
      ],
    },
    picture: {
      title: "图片",
      children: [
        {
          id: "image",
          title: "图片",
          img: import("@/assets/img/charts/image.png"),
        },
        {
          id: "music",
          title: "音乐",
          img: import("@/assets/img/charts/image.png"),
        },
      ],
    },
    tools: {
      title: "组件",
      children: [
        {
          id: "border",
          title: "边框",
          img: import("@/assets/img/charts/border.png"),
        },
      ],
    },
  },
};

export default components;