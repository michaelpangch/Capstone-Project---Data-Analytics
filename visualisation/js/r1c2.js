chartr1c2 = Highcharts.chart('r1c2', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  credits: { enabled: false },
  title: { text: 'Merchants Market Share by Value' },
  tooltip: { pointFormat: '<b>{point.percentage:.1f}%</b>' },
  accessibility: {
    point: { valueSuffix: '%' }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>'
      }
    }
  },
  series: [{
    colorByPoint: true,
    data: []
  }]
});