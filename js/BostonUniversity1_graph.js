$(function(){

console.log('is this happening?');

    if($('#BostonUniversity').css('display') == 'block') {

        $('#BostonUniversity1').highcharts({
            chart: {
        type: 'column'
    },
    title: {
        text: 'Boston University Clery Act Report Data'
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
        name: 'Boston University Reports',
        colorByPoint: false,
        data: [{
            name: '2011',
            y: 9,
            drilldown: '2011'
        }, {
            name: '2012',
            y: 11,
            drilldown: '2012'
        }, {
            name: '2013',
            y: 10,
            drilldown: '2013'
        }, {
            name: '2014',
            y: 12,
            drilldown: '2014'
        }, {
            name: '2015',
            y: 17,
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
                            9
                        ],
                        [
                            'Expected Reports',
                            6487.8
                        ]
                    ]
              }, {
                    name: 'Actual Reports vs. Expected Reports, 2012',
                    id: '2012',
                    data: [
                        [
                            'Actual Reports',
                            11
                        ],
                        [
                            'Expected Reports',
                            6520.6
                        ]
                    ]
                    }, {
                    name: 'Actual Reports vs. Expected Reports, 2013',
                    id: '2013',
                    data: [
                        [
                            'Actual Reports',
                            10
                        ],
                        [
                            'Expected Reports',
                            6482.2
                        ]
                    ]
                    }, {
                    name: 'Actual Reports vs. Expected Reports, 2014',
                    id: '2014',
                    data: [
                        [
                            'Actual Reports',
                            12
                        ],
                        [
                            'Expected Reports',
                            6422.4
                        ]
                    ]
                    }, {
                    name: 'Actual Reports vs. Expected Reports, 2015',
                    id: '2015',
                    data: [
                        [
                            'Actual Reports',
                            17
                        ],
                        [
                            'Expected Reports',
                            6431.6
                        ]
                    ]
                }]
            }
            });
                       
    }
});