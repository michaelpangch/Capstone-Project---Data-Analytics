document.addEventListener('readystatechange', event => { 
    if (event.target.readyState === "interactive") { ; }

    if (event.target.readyState === "complete") {
      var fileSelector1 = document.getElementById('file-selector1');
      fileSelector1.addEventListener('change', (event) => { readFile(event, 1); });

      var fileSelector2 = document.getElementById('file-selector2');
      fileSelector2.addEventListener('change', (event) => { readFile(event, 2); });

      var fileSelector3 = document.getElementById('file-selector3');
      fileSelector3.addEventListener('change', (event) => { readFile(event, 3); });
      
      var fileSelector4 = document.getElementById('file-selector4');
      fileSelector4.addEventListener('change', (event) => { readFile(event, 4); });
      
      var fileSelector5 = document.getElementById('file-selector5');
      fileSelector5.addEventListener('change', (event) => { readFile(event, 5); });

      var fileSelector6 = document.getElementById('file-selector6');
      fileSelector6.addEventListener('change', (event) => { readFile(event, 6); });

      var fileSelector7 = document.getElementById('file-selector7');
      fileSelector7.addEventListener('change', (event) => { readFile(event, 7); });

      var fileSelector8 = document.getElementById('file-selector8');
      fileSelector8.addEventListener('change', (event) => { readFile(event, 8); });

      var fileSelector9 = document.getElementById('file-selector9');
      fileSelector9.addEventListener('change', (event) => { readFile(event, 9); });

      var fileSelector10 = document.getElementById('file-selector10');
      fileSelector10.addEventListener('change', (event) => { readFile(event, 10); });
    }
});

function readFile(event, num) {
  var file = event.target.files[0];
  if (!file) { return; }
  console.log(file);
  
  var reader = new FileReader();
  reader.addEventListener('loadend', (event) => {
    var result = event.target.result;

    switch(num) {
      case 1:
	processed_data = processDataPieChart(result);
        if (chartr1c1.series.length > 0) {chartr1c1.series[0].remove(true);}
        chartr1c1.addSeries({ data: processed_data }); 
        break;

      case 2:
        processed_data = processDataPieChart(result);
        if (chartr1c2.series.length > 0) {chartr1c2.series[0].remove(true);}
        chartr1c2.addSeries({ data: processed_data }); 
        break;

      case 3:
        processed_data = processDataMultipleColumnChart(result);
        while (chartr2c1.series.length) {chartr2c1.series[0].remove(true);}
	chartr2c1.xAxis[0].update({categories: processed_data[0]}, true);
	for (var i=0; i<processed_data[1].length; i++) {
	  chartr2c1.addSeries({ name: processed_data[1][i] , data: processed_data[2][i] });
	}
        break;

      case 4:
        processed_data = processDataMultipleColumnChart(result);
        while (chartr2c2.series.length) {chartr2c2.series[0].remove(true);}
	chartr2c2.xAxis[0].update({categories: processed_data[0]}, true);
	for (var i=0; i<processed_data[1].length; i++) {
	  chartr2c2.addSeries({ name: processed_data[1][i] , data: processed_data[2][i] });
	}

        break;

      case 5:
        processed_data = processDataMultipleColumnChart(result);
        while (chartr3c1.series.length) {chartr3c1.series[0].remove(true);}
	chartr3c1.xAxis[0].update({categories: processed_data[0]}, true);
	for (var i=0; i<processed_data[1].length; i++) {
	  chartr3c1.addSeries({ name: processed_data[1][i] , data: processed_data[2][i] });
	}
        break;

      case 6:
        processed_data = processDataMultipleColumnChart(result);
        while (chartr3c2.series.length) {chartr3c2.series[0].remove(true);}
	chartr3c2.xAxis[0].update({categories: processed_data[0]}, true);
	for (var i=0; i<processed_data[1].length; i++) {
	  chartr3c2.addSeries({ name: processed_data[1][i] , data: processed_data[2][i] });
	}
        break;

      case 7: //barchart data format resembles column chart
        processed_data = processDataColumnChart(result, false);
        while (chartr4.series.length) {chartr4.series[0].remove(true);}
	chartr4.xAxis[0].update({categories: processed_data[0]}, true);
        chartr4.addSeries({ name: 'Bestbuy items', data: processed_data[1] });
        break;

      case 8:
	processed_data = processDataPieChart(result);
        if (chartr5c1.series.length > 0) {chartr5c1.series[0].remove(true);}
        chartr5c1.addSeries({ data: processed_data }); 
        break;

      case 9:
        processed_data = processDataPieChart(result);
        if (chartr5c2.series.length > 0) {chartr5c2.series[0].remove(true);}
        chartr5c2.addSeries({ data: processed_data }); 
        break;

      case 10:
        processed_data = processDataColumnChart(result, false);
        if (chartr6c1.series.length > 0) {chartr6c1.series[0].remove(true);}
	chartr6c1.xAxis[0].update({categories: processed_data[0]}, true);
        chartr6c1.addSeries({ name: 'Price sold', data: processed_data[1] });
        break;

      default:
        alert("error");
    }
  });

  reader.addEventListener('progress', (event) => {
    if (event.loaded && event.total) {
      const percent = (event.loaded / event.total) * 100;
      console.log(`Progress: ${Math.round(percent)}`);
    }
  });

  reader.readAsText(file);
}

function processDataPieChart(data) {
  var allTextLines = data.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');

  var allRows=[];
  for (var i=1; i<allTextLines.length -1; i++) {
    var values = allTextLines[i].split(',');
    values[1] = Number(values[1]); //assuming pie chart only 1 value
    allRows.push(values);
  }
  
  return (allRows);  
}

function processDataColumnChart(data, ifMultiple) {
  var allTextLines = data.split(/\r\n|\n/);
  var headers = allTextLines[0].split(',');

  var column = [];
  for (var i=0; i<headers.length; i++) {
    eval("column" + i + "=[]");
  }

  for (var i=1; i<allTextLines.length - 1; i++) {
    var values = allTextLines[i].split(',');
    for (var j=0; j<values.length; j++) {
      if (ifMultiple) {
	if (j>1) { values[j] = Number(values[j]) }
      }
      else {
	if (j>0) { values[1] = Number(values[1]) }
      }
      eval("column" + j + ".push(values[j])");
    }
  }
  
  for (var i=0; i<headers.length; i++) {
    column.push(eval("column" + i));
  }
  return (column);  
}

function processDataMultipleColumnChart(data) {
  columns = processDataColumnChart(data, true);

  info = [];

  //get unique values
  var xaxis = [...new Set(columns[0])];
  xaxis_arr = Array.from(xaxis);

  var series = [...new Set(columns[1])];
  series_arr = Array.from(series);

  /*for checking
  console.log(series_arr);*/

  data_arr = [];
  for (var i=0; i<series_arr.length; i++) {
    eval("data_arr" + i + "=[]");
  }

  for (var i=0; i<series_arr.length; i++) {
    for (var j = 0; j<columns[2].length / series_arr.length; j++) {
      number = i + series_arr.length*j;
      eval("data_arr" + i + ".push(columns[2][number])");
    }
    eval("data_arr.push(data_arr" + i + ")")
  }

  /*for checking
  for (var i=0; i<series_arr.length; i++) {
    console.log(eval("data_arr" + i));
  }*/

  info.push(xaxis_arr);
  info.push(series_arr);
  info.push(data_arr);

  return info;
}

function processDataAsTable(data) {
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table style="border: 1px solid black;">';
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    if (singleRow === 0) {
      table += '<thead style="border: 1px solid black;">';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    var rowCells = allRows[singleRow].split(',');
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
        table += '<td  style="border: 1px solid black;">';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  } 
  table += '</tbody>';
  table += '</table>';

  document.getElementById("rarara1").innerHTML = table;
  return table;
}