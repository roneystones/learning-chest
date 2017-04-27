// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Pitcher');
  data.addColumn('number', 'Wins');
  data.addRows([
    ['Clayton Kershaw', 16],
    ['Zack Greinke', 15],
    ['Hyun-jin Ryu', 14],
    ['Ricky Nolasco', 8],
    ['Chris Capuano', 4],
    ['Others', 35]
  ]);

  // Set chart options
  var options = {
    'title': 'LA Dodgers 2013 Wins by Pitchers',
    'width': 800,
    'height': 600,
    colors: ['#252429', '#5e6f58', '#34324d', '#434260', '#6a787c', '#424242'],
    backgroundColor: '#E9D5B9',
    fontSize: 18,
    fontName: 'Roboto',
    is3D: true,
    titleTextStyle: { fontSize: 26, color: '#333' },
    chartArea: { width: '90%' }
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
