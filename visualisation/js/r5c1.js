chartr5c1 = Highcharts.chart('r5c1', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  credits: { enabled: false },
  title: { text: 'Number of items sold with / without shipping specified' },
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