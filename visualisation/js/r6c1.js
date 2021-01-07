chartr6c1 = Highcharts.chart('r6c1', {
  chart: { type: 'column' },
  title: { text: 'Most expensive item sold' },
  credits: { enabled: false },
  xAxis: { categories: [] },
  yAxis: { title: {
             text: 'Prices (USD)'
           }
  },
  series: [ {data: []} ]
});
