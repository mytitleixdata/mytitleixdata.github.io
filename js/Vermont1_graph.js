$(function(){

console.log('is this happening?');

    if($('#Vermont').css('display') == 'block') {

        $('#Vermont1').highcharts({
            chart: {
        type: 'column'
    },
    title: {
        text: 'University of Vermont Clery Act Report Data'
    },
    subtitle: {
        text: 'Sexual Assault Reports from the Campus Safety and Security Data Tool<a href="https://www.bostonglobe.com/2016/12/23/table-reports-sexual-assault-new-england-colleges/BG53TpCamCzxeCUF7tixYN/story.html</a>.'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Number of Reports'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: false,
                format: ''
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Reports<br/>'
    },

    series: [{
        name: 'University of Vermont Reports',
        colorByPoint: true,
        data: [{
            name: '2011',
            y: 10,
            drilldown: '2011'
        }, {
            name: '2012',
            y: 14,
            drilldown: '2012'
        }, {
            name: '2013',
            y: 15,
            drilldown: '2013'
        }, {
            name: '2014',
            y: 29,
            drilldown: '2014'
        }, {
            name: '2015',
            y: 30,
            drilldown: '2015'
        }]
    }],
            drilldown: {
                series: [{
                    name: 'Actual Reports vs. Expected Reports, 2011',
                    id: '2011',
                    data: [
                        [
                            'Actual Reports',
                            10
                        ],
                        [
                            'Expected Reports',
                            2379.6
                        ]
                    ]
              }, {
                    name: 'Actual Reports vs. Expected Reports, 2012',
                    id: '2012',
                    data: [
                        [
                            'Actual Reports',
                            14
                        ],
                        [
                            'Expected Reports',
                            2379.6
                        ]
                    ]
                    }, {
                    name: 'Actual Reports vs. Expected Reports, 2013',
                    id: '2013',
                    data: [
                        [
                            'Actual Reports',
                            15
                        ],
                        [
                            'Expected Reports',
                            2379.6
                        ]
                    ]
                    }, {
                    name: 'Actual Reports vs. Expected Reports, 2014',
                    id: '2014',
                    data: [
                        [
                            'Actual Reports',
                            29
                        ],
                        [
                            'Expected Reports',
                            2379.6
                        ]
                    ]
                    }, {
                    name: 'Actual Reports vs. Expected Reports, 2015',
                    id: '2015',
                    data: [
                        [
                            'Actual Reports',
                            30
                        ],
                        [
                            'Expected Reports',
                            2379.6
                        ]
                    ]
                }]
            }
            });
                       
    }
});