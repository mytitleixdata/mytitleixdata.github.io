    $(function () {

         $('#NE').highcharts({
                 chart: {
                     type: "column",
                     width: 1200,
                     height: 600,
                     zoomType: "xy",
                     description: "New England School Reports 2011-2015",
                     borderColor: "#070707",
                     style: {
                         fontFamily: "Palatino Linotype"
                     },
                     plotBorderColor: "#020202"
                 },
                 plotOptions: {
                     series: {
                         colorByPoint: true,
                         dataLabels: {
                             style: {
                                 fontSize: "12px",
                                 color: "#000000"
                             }
                         }
                     }
                 },
                 title: {
                     text: "Tracking the Change of Sexual Assault Reporting",
                     style: {
                         fontWeight: "bold",
                         fontSize: "24px"
                     }
                 },
                 yAxis: {
                     title: {
                         text: "Number of Reports",
                         style: {
                             fontWeight: "bold",
                             color: "#000000"
                         }
                     }
                 },
                 subtitle: {
                     text: "Clery Act Reports by Institution 2011-2015",
                     style: {
                         fontWeight: "normal",
                         fontSize: "20px"
                     }
                 },
                 xAxis: {
                     title: {
                         style: {
                             fontWeight: "bold",
                             color: "#020202"
                         }
                     },
                     type: "category"
                 },
                 legend: {
                     itemStyle: {
                         fontSize: "25px"
                     },
                     itemHiddenStyle: {
                         color: "#b3abab"
                     }
                 },
                 tooltip: {
                     shared: true,
                     borderColor: "#070707",
                     borderWidth: 2,
                     borderRadius: 1,
                     backgroundColor: "rgba(255, 255, 255, 0.97)"
                 },
                 exporting: {
                     sourceWidth: 1600,
                     sourceHeight: 600,
                     scale: 1
                 },
                 credits: {
                     text: "My Title IX",
                     href: "http:mytitleix.info"
                 },
                 series: [
                     {
                             index: 0,
                             color: "rgba(255, 255, 255, 0.94)",
                             colorByPoint: true,
                             name: "2015",
                             data: [
                                 [
                                     "Amherst College",
                                     12
                                 ],
                                 [
                                     "Assumption College",
                                     13
                                 ],
                                 [
                                     "Babson College",
                                     12
                                 ],
                                 [
                                     "Bates College",
                                     18
                                 ],
                                 [
                                     "Bentley University",
                                     9
                                 ],
                                 [
                                     "Berklee College of Music",
                                     2
                                 ],
                                 [
                                     "Boston College",
                                     27
                                 ],
                                 [
                                     "Boston University",
                                     17
                                 ],
                                 [
                                     "Bowdoin College",
                                     14
                                 ],
                                 [
                                     "Brandeis University",
                                     19
                                 ],
                                 [
                                     "Bridgewater State University",
                                     20
                                 ],
                                 [
                                     "Brown University",
                                     24
                                 ],
                                 [
                                     "Bryant University",
                                     4
                                 ],
                                 [
                                     "Bunker Hill Community College",
                                     1
                                 ],
                                 [
                                     "Clark University",
                                     4
                                 ],
                                 [
                                     "Colby College",
                                     13
                                 ],
                                 [
                                     "College of the Holy Cross",
                                     4
                                 ],
                                 [
                                     "Connecticut College",
                                     12
                                 ],
                                 [
                                     "Curry College",
                                     8
                                 ],
                                 [
                                     "Dartmouth College",
                                     24
                                 ],
                                 [
                                     "Emerson College",
                                     3
                                 ],
                                 [
                                     "Emmanuel College",
                                     1
                                 ],
                                 [
                                     "Hampshire College",
                                     9
                                 ],
                                 [
                                     "Harvard University",
                                     54
                                 ],
                                 [
                                     "Johnson & Wales University",
                                     11
                                 ],
                                 [
                                     "Lesley University",
                                     5
                                 ],
                                 [
                                     "Massachusetts College of Art and Design",
                                     0
                                 ],
                                 [
                                     "Massachusetts Institute of Technology",
                                     31
                                 ],
                                 [
                                     "MCPHS University",
                                     0
                                 ],
                                 [
                                     "Merrimack College",
                                     19
                                 ],
                                 [
                                     "Middlebury College",
                                     23
                                 ],
                                 [
                                     "Mount Holyoke College",
                                     3
                                 ],
                                 [
                                     "Northeastern University",
                                     18
                                 ],
                                 [
                                     "Providence College",
                                     2
                                 ],
                                 [
                                     "Quinnipiac University",
                                     5
                                 ],
                                 [
                                     "Rhode Island School of Design",
                                     2
                                 ],
                                 [
                                     "Roger Williams University",
                                     14
                                 ],
                                 [
                                     "Roxbury Community College",
                                     0
                                 ],
                                 [
                                     "Sacred Heart University",
                                     2
                                 ],
                                 [
                                     "Simmons College",
                                     2
                                 ],
                                 [
                                     "Smith College",
                                     9
                                 ],
                                 [
                                     "Southern New Hampshire University",
                                     6
                                 ],
                                 [
                                     "Suffolk University",
                                     2
                                 ],
                                 [
                                     "Trinity College",
                                     18
                                 ],
                                 [
                                     "Tufts University",
                                     25
                                 ],
                                 [
                                     "University of Connecticut-Storrs",
                                     49
                                 ],
                                 [
                                     "University of Maine",
                                     16
                                 ],
                                 [
                                     "University of Massachusetts-Amherst",
                                     22
                                 ],
                                 [
                                     "University of Massachusetts-Boston",
                                     2
                                 ],
                                 [
                                     "University of Massachusetts-Dartmouth",
                                     11
                                 ],
                                 [
                                     "University of Massachusetts-Lowell",
                                     8
                                 ],
                                 [
                                     "University of New Hampshire",
                                     45
                                 ],
                                 [
                                     "University of Rhode Island",
                                     7
                                 ],
                                 [
                                     "University of Vermont",
                                     30
                                 ],
                                 [
                                     "Wellesley College",
                                     6
                                 ],
                                 [
                                     "Wentworth Institute of Technology",
                                     0
                                 ],
                                 [
                                     "Wesleyan University",
                                     22
                                 ],
                                 [
                                     "Williams College",
                                     11
                                 ],
                                 [
                                     "Worcester Polytechnic Institute",
                                     4
                                 ],
                                 [
                                     "Yale University",
                                     30
                                 ]
                             ]
                         },
                     {
                             index: 1,
                             name: "2014",
                             data: [
                                 [
                                     "Amherst College",
                                     12
                                 ],
                                 [
                                     "Assumption College",
                                     7
                                 ],
                                 [
                                     "Babson College",
                                     8
                                 ],
                                 [
                                     "Bates College",
                                     12
                                 ],
                                 [
                                     "Bentley University",
                                     7
                                 ],
                                 [
                                     "Berklee College of Music",
                                     6
                                 ],
                                 [
                                     "Boston College",
                                     23
                                 ],
                                 [
                                     "Boston University",
                                     12
                                 ],
                                 [
                                     "Bowdoin College",
                                     20
                                 ],
                                 [
                                     "Brandeis University",
                                     10
                                 ],
                                 [
                                     "Bridgewater State University",
                                     5
                                 ],
                                 [
                                     "Brown University",
                                     44
                                 ],
                                 [
                                     "Bryant University",
                                     4
                                 ],
                                 [
                                     "Bunker Hill Community College",
                                     2
                                 ],
                                 [
                                     "Clark University",
                                     2
                                 ],
                                 [
                                     "Colby College",
                                     4
                                 ],
                                 [
                                     "College of the Holy Cross",
                                     5
                                 ],
                                 [
                                     "Connecticut College",
                                     12
                                 ],
                                 [
                                     "Curry College",
                                     7
                                 ],
                                 [
                                     "Dartmouth College",
                                     55
                                 ],
                                 [
                                     "Emerson College",
                                     8
                                 ],
                                 [
                                     "Emmanuel College",
                                     2
                                 ],
                                 [
                                     "Hampshire College",
                                     8
                                 ],
                                 [
                                     "Harvard University",
                                     43
                                 ],
                                 [
                                     "Johnson & Wales University",
                                     8
                                 ],
                                 [
                                     "Lesley University",
                                     3
                                 ],
                                 [
                                     "Massachusetts College of Art and Design",
                                     1
                                 ],
                                 [
                                     "Massachusetts Institute of Technology",
                                     32
                                 ],
                                 [
                                     "MCPHS University",
                                     0
                                 ],
                                 [
                                     "Merrimack College",
                                     7
                                 ],
                                 [
                                     "Middlebury College",
                                     10
                                 ],
                                 [
                                     "Mount Holyoke College",
                                     3
                                 ],
                                 [
                                     "Northeastern University",
                                     22
                                 ],
                                 [
                                     "Providence College",
                                     5
                                 ],
                                 [
                                     "Quinnipiac University",
                                     5
                                 ],
                                 [
                                     "Rhode Island School of Design",
                                     2
                                 ],
                                 [
                                     "Roger Williams University",
                                     10
                                 ],
                                 [
                                     "Roxbury Community College",
                                     0
                                 ],
                                 [
                                     "Sacred Heart University",
                                     1
                                 ],
                                 [
                                     "Simmons College",
                                     3
                                 ],
                                 [
                                     "Smith College",
                                     4
                                 ],
                                 [
                                     "Southern New Hampshire University",
                                     6
                                 ],
                                 [
                                     "Suffolk University",
                                     0
                                 ],
                                 [
                                     "Trinity College",
                                     23
                                 ],
                                 [
                                     "Tufts University",
                                     14
                                 ],
                                 [
                                     "University of Connecticut-Storrs",
                                     53
                                 ],
                                 [
                                     "University of Maine",
                                     17
                                 ],
                                 [
                                     "University of Massachusetts-Amherst",
                                     13
                                 ],
                                 [
                                     "University of Massachusetts-Boston",
                                     1
                                 ],
                                 [
                                     "University of Massachusetts-Dartmouth",
                                     13
                                 ],
                                 [
                                     "University of Massachusetts-Lowell",
                                     8
                                 ],
                                 [
                                     "University of New Hampshire",
                                     26
                                 ],
                                 [
                                     "University of Rhode Island",
                                     3
                                 ],
                                 [
                                     "University of Vermont",
                                     29
                                 ],
                                 [
                                     "Wellesley College",
                                     6
                                 ],
                                 [
                                     "Wentworth Institute of Technology",
                                     1
                                 ],
                                 [
                                     "Wesleyan University",
                                     45
                                 ],
                                 [
                                     "Williams College",
                                     20
                                 ],
                                 [
                                     "Worcester Polytechnic Institute",
                                     4
                                 ],
                                 [
                                     "Yale University",
                                     18
                                 ]
                             ]
                         },
                     {
                             index: 2,
                             name: "2013",
                             data: [
                                 [
                                     "Amherst College",
                                     9
                                 ],
                                 [
                                     "Assumption College",
                                     3
                                 ],
                                 [
                                     "Babson College",
                                     7
                                 ],
                                 [
                                     "Bates College",
                                     8
                                 ],
                                 [
                                     "Bentley University",
                                     2
                                 ],
                                 [
                                     "Berklee College of Music",
                                     4
                                 ],
                                 [
                                     "Boston College",
                                     11
                                 ],
                                 [
                                     "Boston University",
                                     10
                                 ],
                                 [
                                     "Bowdoin College",
                                     6
                                 ],
                                 [
                                     "Brandeis University",
                                     14
                                 ],
                                 [
                                     "Bridgewater State University",
                                     3
                                 ],
                                 [
                                     "Brown University",
                                     21
                                 ],
                                 [
                                     "Bryant University",
                                     6
                                 ],
                                 [
                                     "Bunker Hill Community College",
                                     1
                                 ],
                                 [
                                     "Clark University",
                                     5
                                 ],
                                 [
                                     "Colby College",
                                     8
                                 ],
                                 [
                                     "College of the Holy Cross",
                                     6
                                 ],
                                 [
                                     "Connecticut College",
                                     9
                                 ],
                                 [
                                     "Curry College",
                                     5
                                 ],
                                 [
                                     "Dartmouth College",
                                     35
                                 ],
                                 [
                                     "Emerson College",
                                     9
                                 ],
                                 [
                                     "Emmanuel College",
                                     2
                                 ],
                                 [
                                     "Hampshire College",
                                     20
                                 ],
                                 [
                                     "Harvard University",
                                     40
                                 ],
                                 [
                                     "Johnson & Wales University",
                                     6
                                 ],
                                 [
                                     "Lesley University",
                                     3
                                 ],
                                 [
                                     "Massachusetts College of Art and Design",
                                     0
                                 ],
                                 [
                                     "Massachusetts Institute of Technology",
                                     17
                                 ],
                                 [
                                     "MCPHS University",
                                     1
                                 ],
                                 [
                                     "Merrimack College",
                                     7
                                 ],
                                 [
                                     "Middlebury College",
                                     17
                                 ],
                                 [
                                     "Mount Holyoke College",
                                     2
                                 ],
                                 [
                                     "Northeastern University",
                                     13
                                 ],
                                 [
                                     "Providence College",
                                     3
                                 ],
                                 [
                                     "Quinnipiac University",
                                     4
                                 ],
                                 [
                                     "Rhode Island School of Design",
                                     3
                                 ],
                                 [
                                     "Roger Williams University",
                                     15
                                 ],
                                 [
                                     "Roxbury Community College",
                                     0
                                 ],
                                 [
                                     "Sacred Heart University",
                                     1
                                 ],
                                 [
                                     "Simmons College",
                                     1
                                 ],
                                 [
                                     "Smith College",
                                     7
                                 ],
                                 [
                                     "Southern New Hampshire University",
                                     6
                                 ],
                                 [
                                     "Suffolk University",
                                     0
                                 ],
                                 [
                                     "Trinity College",
                                     25
                                 ],
                                 [
                                     "Tufts University",
                                     13
                                 ],
                                 [
                                     "University of Connecticut-Storrs",
                                     25
                                 ],
                                 [
                                     "University of Maine",
                                     24
                                 ],
                                 [
                                     "University of Massachusetts-Amherst",
                                     22
                                 ],
                                 [
                                     "University of Massachusetts-Boston",
                                     2
                                 ],
                                 [
                                     "University of Massachusetts-Dartmouth",
                                     10
                                 ],
                                 [
                                     "University of Massachusetts-Lowell",
                                     2
                                 ],
                                 [
                                     "University of New Hampshire",
                                     23
                                 ],
                                 [
                                     "University of Rhode Island",
                                     6
                                 ],
                                 [
                                     "University of Vermont",
                                     15
                                 ],
                                 [
                                     "Wellesley College",
                                     6
                                 ],
                                 [
                                     "Wentworth Institute of Technology",
                                     2
                                 ],
                                 [
                                     "Wesleyan University",
                                     17
                                 ],
                                 [
                                     "Williams College",
                                     9
                                 ],
                                 [
                                     "Worcester Polytechnic Institute",
                                     1
                                 ],
                                 [
                                     "Yale University",
                                     12
                                 ]
                             ]
                         },
                     {
                             index: 3,
                             name: "2012",
                             data: [
                                 [
                                     "Amherst College",
                                     17
                                 ],
                                 [
                                     "Assumption College",
                                     4
                                 ],
                                 [
                                     "Babson College",
                                     1
                                 ],
                                 [
                                     "Bates College",
                                     8
                                 ],
                                 [
                                     "Bentley University",
                                     1
                                 ],
                                 [
                                     "Berklee College of Music",
                                     1
                                 ],
                                 [
                                     "Boston College",
                                     5
                                 ],
                                 [
                                     "Boston University",
                                     11
                                 ],
                                 [
                                     "Bowdoin College",
                                     4
                                 ],
                                 [
                                     "Brandeis University",
                                     2
                                 ],
                                 [
                                     "Bridgewater State University",
                                     3
                                 ],
                                 [
                                     "Brown University",
                                     17
                                 ],
                                 [
                                     "Bryant University",
                                     7
                                 ],
                                 [
                                     "Bunker Hill Community College",
                                     1
                                 ],
                                 [
                                     "Clark University",
                                     2
                                 ],
                                 [
                                     "Colby College",
                                     2
                                 ],
                                 [
                                     "College of the Holy Cross",
                                     9
                                 ],
                                 [
                                     "Connecticut College",
                                     12
                                 ],
                                 [
                                     "Curry College",
                                     1
                                 ],
                                 [
                                     "Dartmouth College",
                                     24
                                 ],
                                 [
                                     "Emerson College",
                                     4
                                 ],
                                 [
                                     "Emmanuel College",
                                     1
                                 ],
                                 [
                                     "Hampshire College",
                                     13
                                 ],
                                 [
                                     "Harvard University",
                                     38
                                 ],
                                 [
                                     "Johnson & Wales University",
                                     8
                                 ],
                                 [
                                     "Lesley University",
                                     2
                                 ],
                                 [
                                     "Massachusetts College of Art and Design",
                                     2
                                 ],
                                 [
                                     "Massachusetts Institute of Technology",
                                     14
                                 ],
                                 [
                                     "MCPHS University",
                                     0
                                 ],
                                 [
                                     "Merrimack College",
                                     2
                                 ],
                                 [
                                     "Middlebury College",
                                     5
                                 ],
                                 [
                                     "Mount Holyoke College",
                                     1
                                 ],
                                 [
                                     "Northeastern University",
                                     5
                                 ],
                                 [
                                     "Providence College",
                                     2
                                 ],
                                 [
                                     "Quinnipiac University",
                                     1
                                 ],
                                 [
                                     "Rhode Island School of Design",
                                     0
                                 ],
                                 [
                                     "Roger Williams University",
                                     6
                                 ],
                                 [
                                     "Roxbury Community College",
                                     1
                                 ],
                                 [
                                     "Sacred Heart University",
                                     0
                                 ],
                                 [
                                     "Simmons College",
                                     2
                                 ],
                                 [
                                     "Smith College",
                                     4
                                 ],
                                 [
                                     "Southern New Hampshire University",
                                     2
                                 ],
                                 [
                                     "Suffolk University",
                                     0
                                 ],
                                 [
                                     "Trinity College",
                                     8
                                 ],
                                 [
                                     "Tufts University",
                                     6
                                 ],
                                 [
                                     "University of Connecticut-Storrs",
                                     13
                                 ],
                                 [
                                     "University of Maine",
                                     5
                                 ],
                                 [
                                     "University of Massachusetts-Amherst",
                                     15
                                 ],
                                 [
                                     "University of Massachusetts-Boston",
                                     1
                                 ],
                                 [
                                     "University of Massachusetts-Dartmouth",
                                     5
                                 ],
                                 [
                                     "University of Massachusetts-Lowell",
                                     2
                                 ],
                                 [
                                     "University of New Hampshire",
                                     21
                                 ],
                                 [
                                     "University of Rhode Island",
                                     12
                                 ],
                                 [
                                     "University of Vermont",
                                     14
                                 ],
                                 [
                                     "Wellesley College",
                                     5
                                 ],
                                 [
                                     "Wentworth Institute of Technology",
                                     2
                                 ],
                                 [
                                     "Wesleyan University",
                                     2
                                 ],
                                 [
                                     "Williams College",
                                     16
                                 ],
                                 [
                                     "Worcester Polytechnic Institute",
                                     5
                                 ],
                                 [
                                     "Yale University",
                                     16
                                 ]
                             ]
                         },
                     {
                             index: 4,
                             name: "2011",
                             data: [
                                 [
                                     "Amherst College",
                                     14
                                 ],
                                 [
                                     "Assumption College",
                                     4
                                 ],
                                 [
                                     "Babson College",
                                     4
                                 ],
                                 [
                                     "Bates College",
                                     6
                                 ],
                                 [
                                     "Bentley University",
                                     4
                                 ],
                                 [
                                     "Berklee College of Music",
                                     1
                                 ],
                                 [
                                     "Boston College",
                                     7
                                 ],
                                 [
                                     "Boston University",
                                     9
                                 ],
                                 [
                                     "Bowdoin College",
                                     7
                                 ],
                                 [
                                     "Brandeis University",
                                     2
                                 ],
                                 [
                                     "Bridgewater State University",
                                     2
                                 ],
                                 [
                                     "Brown University",
                                     7
                                 ],
                                 [
                                     "Bryant University",
                                     7
                                 ],
                                 [
                                     "Bunker Hill Community College",
                                     2
                                 ],
                                 [
                                     "Clark University",
                                     3
                                 ],
                                 [
                                     "Colby College",
                                     1
                                 ],
                                 [
                                     "College of the Holy Cross",
                                     4
                                 ],
                                 [
                                     "Connecticut College",
                                     4
                                 ],
                                 [
                                     "Curry College",
                                     3
                                 ],
                                 [
                                     "Dartmouth College",
                                     15
                                 ],
                                 [
                                     "Emerson College",
                                     2
                                 ],
                                 [
                                     "Emmanuel College",
                                     0
                                 ],
                                 [
                                     "Hampshire College",
                                     7
                                 ],
                                 [
                                     "Harvard University",
                                     26
                                 ],
                                 [
                                     "Johnson & Wales University",
                                     6
                                 ],
                                 [
                                     "Lesley University",
                                     3
                                 ],
                                 [
                                     "Massachusetts College of Art and Design",
                                     3
                                 ],
                                 [
                                     "Massachusetts Institute of Technology",
                                     7
                                 ],
                                 [
                                     "MCPHS University",
                                     0
                                 ],
                                 [
                                     "Merrimack College",
                                     1
                                 ],
                                 [
                                     "Middlebury College",
                                     5
                                 ],
                                 [
                                     "Mount Holyoke College",
                                     1
                                 ],
                                 [
                                     "Northeastern University",
                                     10
                                 ],
                                 [
                                     "Providence College",
                                     2
                                 ],
                                 [
                                     "Quinnipiac University",
                                     1
                                 ],
                                 [
                                     "Rhode Island School of Design",
                                     0
                                 ],
                                 [
                                     "Roger Williams University",
                                     5
                                 ],
                                 [
                                     "Roxbury Community College",
                                     2
                                 ],
                                 [
                                     "Sacred Heart University",
                                     0
                                 ],
                                 [
                                     "Simmons College",
                                     1
                                 ],
                                 [
                                     "Smith College",
                                     3
                                 ],
                                 [
                                     "Southern New Hampshire University",
                                     0
                                 ],
                                 [
                                     "Suffolk University",
                                     0
                                 ],
                                 [
                                     "Trinity College",
                                     8
                                 ],
                                 [
                                     "Tufts University",
                                     6
                                 ],
                                 [
                                     "University of Connecticut-Storrs",
                                     8
                                 ],
                                 [
                                     "University of Maine",
                                     6
                                 ],
                                 [
                                     "University of Massachusetts-Amherst",
                                     13
                                 ],
                                 [
                                     "University of Massachusetts-Boston",
                                     2
                                 ],
                                 [
                                     "University of Massachusetts-Dartmouth",
                                     2
                                 ],
                                 [
                                     "University of Massachusetts-Lowell",
                                     6
                                 ],
                                 [
                                     "University of New Hampshire",
                                     21
                                 ],
                                 [
                                     "University of Rhode Island",
                                     20
                                 ],
                                 [
                                     "University of Vermont",
                                     10
                                 ],
                                 [
                                     "Wellesley College",
                                     1
                                 ],
                                 [
                                     "Wentworth Institute of Technology",
                                     0
                                 ],
                                 [
                                     "Wesleyan University",
                                     8
                                 ],
                                 [
                                     "Williams College",
                                     7
                                 ],
                                 [
                                     "Worcester Polytechnic Institute",
                                     2
                                 ],
                                 [
                                     "Yale University",
                                     20
                                 ]
                             ]
                         }
                 ]
         });

    });

