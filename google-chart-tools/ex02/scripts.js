google.load('visualization', '1', { packages: ['corechart', 'intensitymap', 'geochart'] });

google.setOnLoadCallback(drawChart1);
google.setOnLoadCallback(drawChart2);

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540]
  ]);

  var options = {
    title: 'Company Performance',
    hAxis: { title: 'Year', titleTextStyle: { color: 'red' } }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540]
  ]);

  var options = {
    title: 'Company Performance',
    hAxis: { title: 'Year', titleTextStyle: { color: 'red' } },
    vAxis: { minValue: 0 }
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}

$(window).resize(function() {
  drawChart1();
  drawChart2();
});
