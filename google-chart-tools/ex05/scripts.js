google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);

function drawChart() {
  var percentage = google.visualization.arrayToDataTable([
    ['Work/Study', 'Further development'],
    ['Now working', 50],
    ['Doing further study', 25],
    ['Unemployed', 15],
    ['Other', 10]
  ]);

  var results = google.visualization.arrayToDataTable([
    ['Year', '% time in lectures, seminars and similar', '% time in independent study', '% time on placement (if relevant to course)'],
    ['Year 1', 28, 72, 0],
    ['Year 2', 34, 66, 0],
    ['Year 3', 31, 69, 0],
    ['Year 4', 37, 63, 0]
  ]);

  var line = google.visualization.arrayToDataTable([
    ['Year', '% time in lectures, seminars and similar', '% time in independent study', '% practical exams'],
    ['Year 1', 53, 47, 0],
    ['Year 2', 56, 17, 27],
    ['Year 3', 53, 24, 23],
    ['Year 4', 47, 15, 38]
  ]);

  var options1 = {
    title: 'Go on to work and/or study',
    /*is3D: true,
    pieHole: 0.4,*/
  };

  var options2 = {
    title: 'Time in lectures, seminars and similar',
    hAxis: { title: 'Year', titleTextStyle: { color: 'red' } },
    vAxis: { minValue: 0, maxValue: 100 },
  };

  var options3 = {
    title: 'Assessment by coursework'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(percentage, options1);

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(results, options2);

  var chart = new google.visualization.LineChart(document.getElementById('chart_line'));
  chart.draw(line, options3);
};
