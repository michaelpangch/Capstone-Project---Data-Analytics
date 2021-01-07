chartr1c1 = Highcharts.chart('r1c1', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  credits: { enabled: false },
  title: { text: 'Merchants Market Share by Items' },
  /*tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },*/
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
/*        format: '<b>{point.name}</b>: {point.percentage:.1f} %'*/
        format: '<b>{point.name}</b>'
      }
    }
  },
  series: [{
    colorByPoint: true,
    data: []
  }]
});