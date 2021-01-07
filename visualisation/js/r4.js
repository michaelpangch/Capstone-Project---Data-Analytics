chartr4 = Highcharts.chart('r4', {
    chart: { type: 'bar' },
    title: { text: 'Price movements' },
    subtitle: { text: 'latest price vs earliest price in bestbuy' },
    xAxis: {
	categories: [],
        title: { text: null }
    },
    yAxis: {
        min: 0,
        title: { text: '% variability from earliest price',
            align: 'high'
        },
        labels: { overflow: 'justify' }
    },
    tooltip: { valueSuffix: '%' },
    plotOptions: {
        bar: { dataLabels: { enabled: true } }
    },
    /*legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },*/
    credits: { enabled: false },
    series: []
});