// Load the Visualization API and the corechart package.
google.load('visualization', '1', { packages: ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
    ['Montants', '1er Pilier', '2ème Pilier', 'Prévoyance'],
    ['2000', 1234, 2345, 3456],
    ['2005', 1643, 2582, 2123],
    ['2010', 2108, 1219, 3229]
  ]);

  // Set chart options
  var options = {
    title: 'Foresight',
    width: 600,
    height: 400,
    colors: ['#701C96', '#B88FD0', '#009640'],
    legend: { position: 'bottom', maxLines: 2 },
    isStacked: true
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
