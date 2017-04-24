$(function(){

console.log('is this happening?');

    if($('#Dartmouth').css('display') == 'block') {

        $('#Dartmouth1').highcharts({
            chart: {
        type: 'column'
    },
    title: {
        text: 'Dartmouth College Clery Act Report Data'
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
        name: 'Dartmouth College Reports',
        colorByPoint: false,
        data: [{
            name: '2011',
            y: 15,
            drilldown: '2011'
        }, {
            name: '2012',
            y: 24,
            drilldown: '2012'
        }, {
            name: '2013',
            y: 35,
            drilldown: '2013'
        }, {
            name: '2014',
            y: 55,
            drilldown: '2014'
        }, {
            name: '2015',
            y: 24,
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
                            15
                        ],
                        [
                            'Expected Reports',
                            1276.2
                        ]
                    ]
              }, {
                    name: 'Actual Reports vs. Expected Reports, 2012',
                    id: '2012',
                    data: [
                        [
                            'Actual Reports',
                            24
                        ],
                        [
                            'Expected Reports',
                            1276.2
                        ]
                    ]
                    }, {
                    name: 'Actual Reports vs. Expected Reports, 2013',
                    id: '2013',
                    data: [
                        [
                            'Actual Reports',
                            35
                        ],
                        [
                            'Expected Reports',
                            1276.2
                        ]
                    ]
                    }, {
                    name: 'Actual Reports vs. Expected Reports, 2014',
                    id: '2014',
                    data: [
                        [
                            'Actual Reports',
                            55
                        ],
                        [
                            'Expected Reports',
                            1276.2
                        ]
                    ]
                    }, {
                    name: 'Actual Reports vs. Expected Reports, 2015',
                    id: '2015',
                    data: [
                        [
                            'Actual Reports',
                            24
                        ],
                        [
                            'Expected Reports',
                            1276.2
                        ]
                    ]
                }]
            }
            });
                       
    }
});