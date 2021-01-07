chartr2c2 = Highcharts.chart('r2c2', {
  title: { text: 'Total Sales' },
    credits: { enabled: false },
    subtitle: { text: '2017 and 2018' },
    yAxis: {
        title: { text: 'Total Sales (USD)' }
    },
    tooltip: { valuePrefix: 'US$' },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    series: [],

});