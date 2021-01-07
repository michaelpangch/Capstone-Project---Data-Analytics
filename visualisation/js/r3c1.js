chartr3c1 = Highcharts.chart('r3c1', {
    chart: { type: 'column' },
    credits: { enabled: false },
    title: { text: 'Samsung 4K TVs' },
    subtitle: { text: 'Bestbuy vs BHP vs Walmart vs Others' },
    xAxis: { categories: [] },
    yAxis: { min: 0,
             title: { text: 'Prices (USD)' }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>US$ {point.y:.of}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [ {data: []} ]
});
