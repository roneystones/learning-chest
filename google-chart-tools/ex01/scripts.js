google.load('visualization', '1', { packages: ['corechart', 'intensitymap', 'geochart'] });

google.setOnLoadCallback(line01);
google.setOnLoadCallback(line02);
google.setOnLoadCallback(bar);
google.setOnLoadCallback(pie);
google.setOnLoadCallback(intensitymap);
google.setOnLoadCallback(geochart);

function line01() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Dias');
  data.addRows(6);

  data.addColumn('number', 'Conta Corrente');
  data.addColumn('number', 'Conta Poupança');

  data.setValue(0, 0, new Date(2017, 01, 07));
  data.setValue(0, 1, 1023.29);
  data.setValue(0, 2, 410.50);

  data.setValue(1, 0, new Date(2017, 01, 08));
  data.setValue(1, 1, 908.42);
  data.setValue(1, 2, 490.82);

  data.setValue(2, 0, new Date(2017, 01, 09));
  data.setValue(2, 1, 852.97);
  data.setValue(2, 2, 450.17);

  data.setValue(3, 0, new Date(2017, 01, 10));
  data.setValue(3, 1, 1780.0);
  data.setValue(3, 2, 450.17);

  data.setValue(4, 0, new Date(2017, 01, 11));
  data.setValue(4, 1, 1621.69);
  data.setValue(4, 2, 720.81);

  data.setValue(5, 0, new Date(2017, 01, 12));
  data.setValue(5, 1, 1352.50);
  data.setValue(5, 2, 698.42);

  var formatter = new google.visualization.DateFormat({
    pattern: 'dd/MM/yyyy',
  });
  formatter.format(data, 0);

  var grafico = new google.visualization.LineChart(document.getElementById('line01'));

  grafico.draw(data, {
    title: 'Conta Corrente / Poupança'
  });
};

function line02() {
  var data = new google.visualization.DataTable();

  data.addColumn('string', 'Mês');
  data.addColumn('number', '2014');
  data.addColumn('number', '2015');
  data.addColumn('number', '2016');

  data.addRows(12);

  data.setValue(0, 0, 'Janeiro');
  data.setValue(0, 1, 340.40);
  data.setValue(0, 2, 172.54);
  data.setValue(0, 3, 243.18);

  data.setValue(1, 0, 'Fevereiro');
  data.setValue(1, 1, 178.20);
  data.setValue(1, 2, 203.30);
  data.setValue(1, 3, 326.10);

  data.setValue(2, 0, 'Março');
  data.setValue(2, 1, 849.90);
  data.setValue(2, 2, 239.00);
  data.setValue(2, 3, 704.10);

  data.setValue(3, 0, 'Abril');
  data.setValue(3, 1, 501.40);
  data.setValue(3, 2, 794.60);
  data.setValue(3, 3, 775.30);

  data.setValue(4, 0, 'Maio');
  data.setValue(4, 1, 915.50);
  data.setValue(4, 2, 3.60);
  data.setValue(4, 3, 644.60);

  data.setValue(5, 0, 'Junho');
  data.setValue(5, 1, 932.70);
  data.setValue(5, 2, 71.80);
  data.setValue(5, 3, 62.80);

  data.setValue(6, 0, 'Julho');
  data.setValue(6, 1, 628.60);
  data.setValue(6, 2, 916.70);
  data.setValue(6, 3, 820.89);

  data.setValue(7, 0, 'Agosto');
  data.setValue(7, 1, 955.12);
  data.setValue(7, 2, 110.35);
  data.setValue(7, 3, 561.90);

  data.setValue(8, 0, 'Setembro');
  data.setValue(8, 1, 150.41);
  data.setValue(8, 2, 671.90);
  data.setValue(8, 3, 195.81);

  data.setValue(9, 0, 'Outubro');
  data.setValue(9, 1, 502.20);
  data.setValue(9, 2, 841.20);
  data.setValue(9, 3, 543.58);

  data.setValue(10, 0, 'Novembro');
  data.setValue(10, 1, 819.50);
  data.setValue(10, 2, 670.30);
  data.setValue(10, 3, 34.91);

  data.setValue(11, 0, 'Dezembro');
  data.setValue(11, 1, 787.85);
  data.setValue(11, 2, 332.18);
  data.setValue(11, 3, 512.67);

  var formatter = new google.visualization.DateFormat({
    formatType: 'medium',
  });
  formatter.format(data, 0);

  var grafico = new google.visualization.LineChart(document.getElementById('line02'));

  var configuracoes = {
    title: 'Finanças / Ano'
  };
  grafico.draw(data, configuracoes);
};

function bar() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Mês');
  data.addColumn('number', 'Gastos');

  data.addRows(12);

  data.setValue(0, 0, 'Janeiro');
  data.setValue(0, 1, 14540);

  data.setValue(1, 0, 'Fevereiro');
  data.setValue(1, 1, 12459);

  data.setValue(2, 0, 'Março');
  data.setValue(2, 1, 15958);

  data.setValue(3, 0, 'Abril');
  data.setValue(3, 1, 20349);

  data.setValue(4, 0, 'Maio');
  data.setValue(4, 1, 23495);

  data.setValue(5, 0, 'Junho');
  data.setValue(5, 1, 17331);

  data.setValue(6, 0, 'Julho');
  data.setValue(6, 1, 12384);

  data.setValue(7, 0, 'Agosto');
  data.setValue(7, 1, 13495);

  data.setValue(8, 0, 'Setembro');
  data.setValue(8, 1, 13999);

  data.setValue(9, 0, 'Outubro');
  data.setValue(9, 1, 20230);

  data.setValue(10, 0, 'Novembro');
  data.setValue(10, 1, 22348);

  data.setValue(11, 0, 'Dezembro');
  data.setValue(11, 1, 21230);

  var chart = new google.visualization.BarChart(document.getElementById('bar'));

  chart.draw(data, {
    width: 980,
    height: 600,
    title: 'Gastos / Mês'
  })
};

function pie() {
  var data = new google.visualization.DataTable();

  data.addColumn('string', 'Tipo do gasto');
  data.addColumn('number', 'Valor gasto');

  data.addRows(4);

  data.setValue(0, 0, 'Alimentação');
  data.setValue(0, 1, 450);
  data.setValue(1, 0, 'Combustível');
  data.setValue(1, 1, 300);
  data.setValue(2, 0, 'Família');
  data.setValue(2, 1, 600);
  data.setValue(3, 0, 'Saúde');
  data.setValue(3, 1, 350);

  var chart = new google.visualization.PieChart(document.getElementById('pie'));

  chart.draw(data, {
    width: 980,
    height: 600,
    title: 'Categorias'
  })
};

function intensitymap() {
  var data = new google.visualization.DataTable();

  data.addColumn('string', '', 'País');
  data.addColumn('number', 'Área (1000 km2)');
  data.addColumn('number', 'População (mil)');

  data.addRows(2);

  data.setValue(0, 0, 'BR');
  data.setValue(0, 1, 8515);
  data.setValue(0, 2, 190732);

  data.setValue(1, 0, 'CO');
  data.setValue(1, 1, 1138);
  data.setValue(1, 2, 45986);

  var grafico = new google.visualization.IntensityMap(document.getElementById('intensitymap'));

  grafico.draw(data, {
    height: 400,
    region: 'south_america',
  })
};

function geochart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Estado');
  data.addColumn('number', 'População (hab)');

  data.addRows(6);

  data.setValue(0, 0, 'BR-SP');
  data.setValue(0, 1, 41589892);
  data.setValue(1, 0, 'BR-ES');
  data.setValue(1, 1, 3547013);
  data.setValue(2, 0, 'BR-CE');
  data.setValue(2, 1, 8530058);
  data.setValue(3, 0, 'BR-AM');
  data.setValue(3, 1, 3538359);
  data.setValue(4, 0, 'BR-RS');
  data.setValue(4, 1, 10732770);
  data.setValue(5, 0, 'BR-BA');
  data.setValue(5, 1, 14097333);

  var geochart = new google.visualization.GeoChart(document.getElementById('geochart'));

  geochart.draw(data, {
    height: 400,
    region: 'BR',
    resolution: 'provinces'
  })
};
