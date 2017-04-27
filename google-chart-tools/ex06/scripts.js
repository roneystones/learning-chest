google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Teste');
  data.addColumn('number', 'Lorem');
  data.addColumn('number', 'Ipsum');
  data.addColumn({
    type: 'string',
    role: 'annotation'
  });
  data.addColumn({
    type: 'string',
    role: 'annotationText',
    p: {
      html: true
    }
  });

  data.addRows([
    ['April', 1100, 1300, 'Início', createCustomHTMLContent(
      '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FOpiferum%2Fposts%2F1048118385245019&width=500" width="500" height="298" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>'
    )],
    ['May', 1200, 800, null, null],
    ['May', 1300, 1100, null, null],
    ['May', 600, 600, null, null],
    ['May', 980, 800, null, null],
    ['June', 800, 1800, 'Fim', createCustomHTMLContent(
      '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FOpiferum%2Fposts%2F1048118385245019&width=500" width="500" height="298" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>'
    )],
    ['July', 1030, 1700, null, null]
  ]);

  var options = {

    seriesType: 'line',
    titleTextStyle: {
      color: '777',
      fontSize: 16,
      fontFamily: "Open Sans",
      bold: false
    },

    vAxis: {
      textStyle: {
        color: "grey",
        fontSize: 12,
      },
      baselineColor: '#ddd',
      gridlineColor: '#ddd'
    },
    hAxis: {
      textStyle: {
        color: "grey",
        fontSize: 12,
      }
    },

    colors: ['#5a9ac7', '#4883ac'],
    animation: { startup: 'true' },
    annotations: {
      highContrast: false,
      textStyle: {
        fontFamily: 'Open Sans',
        fontSize: 12,
        bold: false,
        italic: false,
        // The color of the text.
        color: '#4883ac',
        // The color of the text outline.
        // The transparency of the text.
        opacity: 1,
        background: 'blue'

      }
    },
    focusTarget: 'category',
    tooltip: {
      isHtml: true
    },
    annotationText: {
      isHtml: true
    },
    curveType: 'function',
    legend: {
      position: 'bottom',
      textStyle: {
        color: "grey",
        fontSize: 12,
      }
    },
    series: {
      0: {
        type: 'bars'
      }
    }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('curve_chart'));
  chart.draw(data, options);
}

function createCustomHTMLContent(URL) {
  return '<div style="padding:5px 5px 5px 5px;">' + URL + '</div>';
}
