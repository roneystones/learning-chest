google.load('visualization', '1', {packages:['corechart', 'intensitymap', 'geochart']});

google.setOnLoadCallback(line01);
google.setOnLoadCallback(line02);
google.setOnLoadCallback(bar);
google.setOnLoadCallback(pie);
google.setOnLoadCallback(intensitymap);
google.setOnLoadCallback(geochart);

function line01() {
  var dados = new google.visualization.DataTable();
  dados.addColumn('date', 'Dias');
  dados.addRows(6);

  dados.addColumn('number', 'Conta Corrente');
  dados.addColumn('number', 'Conta Investimento');

  dados.setValue(0, 0, new Date(2011, 01, 07));
  dados.setValue(0, 1, 1023.29);
  dados.setValue(0, 2, 410.50);

  dados.setValue(1, 0, new Date(2011, 01, 08));
  dados.setValue(1, 1, 908.42);
  dados.setValue(1, 2, 490.82);

  dados.setValue(2, 0, new Date(2011, 01, 09));
  dados.setValue(2, 1, 852.97);
  dados.setValue(2, 2, 450.17);

  dados.setValue(3, 0, new Date(2011, 01, 10));
  dados.setValue(3, 1, 1780.0);
  dados.setValue(3, 2, 450.17);

  dados.setValue(4, 0, new Date(2011, 01, 11));
  dados.setValue(4, 1, 1621.69);
  dados.setValue(4, 2, 720.81);

  dados.setValue(5, 0, new Date(2011, 01, 12));
  dados.setValue(5, 1, 1352.50);
  dados.setValue(5, 2, 698.42);

  var formatter = new google.visualization.DateFormat({
    pattern: 'dd/MM/yyyy',
  });
  formatter.format(dados, 0);

  var div = document.getElementById('line01');
  var grafico = new google.visualization.LineChart(div);
  
  grafico.draw(dados, {
    width:800,
    height:400,
    title:'Minhas Finanças'});
};

function line02() {
  var dados = new google.visualization.DataTable();

  dados.addColumn('string', 'Mês');
  dados.addColumn('number', '2008');
  dados.addColumn('number', '2009');
  dados.addColumn('number', '2010');

  dados.addRows(12);

  dados.setValue(0, 0, 'Janeiro');
  dados.setValue(0, 1, 340.40);
  dados.setValue(0, 2, 172.54);
  dados.setValue(0, 3, 243.18);

  dados.setValue(1, 0, 'Fevereiro');
  dados.setValue(1, 1, 178.20);
  dados.setValue(1, 2, 203.30);
  dados.setValue(1, 3, 326.10);

  dados.setValue(2, 0, 'Março');
  dados.setValue(2, 1, 849.90);
  dados.setValue(2, 2, 239.00);
  dados.setValue(2, 3, 704.10);

  dados.setValue(3, 0, 'Abril');
  dados.setValue(3, 1, 501.40);
  dados.setValue(3, 2, 794.60);
  dados.setValue(3, 3, 775.30);

  dados.setValue(4, 0, 'Maio');
  dados.setValue(4, 1, 915.50);
  dados.setValue(4, 2, 3.60);
  dados.setValue(4, 3, 644.60);

  dados.setValue(5, 0, 'Junho');
  dados.setValue(5, 1, 932.70);
  dados.setValue(5, 2, 71.80);
  dados.setValue(5, 3, 62.80);

  dados.setValue(6, 0, 'Julho');
  dados.setValue(6, 1, 628.60);
  dados.setValue(6, 2, 916.70);
  dados.setValue(6, 3, 920.89);

  dados.setValue(7, 0, 'Agosto');
  dados.setValue(7, 1, 955.12);
  dados.setValue(7, 2, 110.35);
  dados.setValue(7, 3, 561.90);

  dados.setValue(8, 0, 'Setembro');
  dados.setValue(8, 1, 150.41);
  dados.setValue(8, 2, 671.90);
  dados.setValue(8, 3, 195.81);

  dados.setValue(9, 0, 'Outubro');
  dados.setValue(9, 1, 502.20);
  dados.setValue(9, 2, 841.20);
  dados.setValue(9, 3, 543.58);

  dados.setValue(10, 0, 'Novembro');
  dados.setValue(10, 1, 819.50);
  dados.setValue(10, 2, 670.30);
  dados.setValue(10, 3, 34.91);

  dados.setValue(11, 0, 'Dezembro');
  dados.setValue(11, 1, 787.85);
  dados.setValue(11, 2, 332.18);
  dados.setValue(11, 3, 512.67);

  var formatter = new google.visualization.DateFormat({
    formatType: 'medium',
  });
  formatter.format(dados, 0);

  var div = document.getElementById('line02');
  var grafico = new google.visualization.LineChart(div);
  var configuracoes = {
    width:800,
    height:400,
    title:'Minhas Finanças'
  };
  grafico.draw(dados, configuracoes);
};

function bar() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Mês');
  data.addColumn('number', 'Gastos');

  data.addRows(12);

  // Janeiro
  data.setValue(0, 0, 'Janeiro');
  data.setValue(0, 1, 14540);

  // Fevereiro
  data.setValue(1, 0, 'Fevereiro');
  data.setValue(1, 1, 12459);

  // Março
  data.setValue(2, 0, 'Março');
  data.setValue(2, 1, 15958);

  // Abril
  data.setValue(3, 0, 'Abril');
  data.setValue(3, 1, 20349);

  // Maio
  data.setValue(4, 0, 'Maio');
  data.setValue(4, 1, 23495);

  // Junho
  data.setValue(5, 0, 'Junho');
  data.setValue(5, 1, 17331);

  // Julho
  data.setValue(6, 0, 'Julho');
  data.setValue(6, 1, 12384);

  // Agosto
  data.setValue(7, 0, 'Agosto');
  data.setValue(7, 1, 13495);

  // Setembro
  data.setValue(8, 0, 'Setembro');
  data.setValue(8, 1, 13999);

  // Outubro
  data.setValue(9, 0, 'Outubro');
  data.setValue(9, 1, 20230);

  // Novembro
  data.setValue(10, 0, 'Novembro');
  data.setValue(10, 1, 22348);

  // Dezembro
  data.setValue(11, 0, 'Dezembro');
  data.setValue(11, 1, 21230);

  var chart = new google.visualization.BarChart(document.getElementById('bar'));

  chart.draw(data, {
    width: 800,
    height: 400,
    title: 'Gastos',
    vAxis: {title: 'Valor'}
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
    width: 800,
    height: 400,
    title: 'Tipos de gastos'
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

  var div = document.getElementById('intensitymap');
  var grafico = new google.visualization.IntensityMap(div);
  
  grafico.draw(data, {
    region: 'south_america',
    width: 800,
    height: 400
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
    geochart.draw(data, {region : 'BR', resolution: 'provinces'});
};