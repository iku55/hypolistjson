const { getColumns } = require('./counts');
const request = require('request');
const { JSDOM } = require('jsdom');
const fs = require('fs');

var today = new Date();
var targetDay = today.getFullYear()+("00"+(new Date().getMonth()+1)).slice(-2)+("00"+(new Date().getDate()-1)).slice(-2);

// データ取得
var options = {
    url: 'https://www.data.jma.go.jp/svd/eqev/data/daily_map/'+targetDay+'.html',
    method: 'GET'
}
var rows = null;
request(options, (error, response, body) => {
    if (error) console.error(error);
    if (response.statusCode == 404) {
        console.error('404 error');
        process.exit(0);
    }

    try {
        rows = new JSDOM(body).window.document.querySelector('pre').textContent.split('\n');
        rows = rows.filter(row => !(row == '' || row == '年   月 日 時 分 秒    緯度       経度       深さ(km)  Ｍ   震央地名' || row == '-----------------------------------------------------------------------------------------'));
    } catch(e) {
        console.error(e);
    }
    console.log(rows.length+' rows loaded.');
    genJson();
});

// JSON生成
const genJson = () => {
    var output = [];

    for (row of rows) {
        var columns = getColumns(row);

        // 成形
        var json = {
            date: new Date(('0000'+columns.year.trim()).slice(-4)+'-'+('00'+columns.month.trim()).slice(-2)+'-'+('00'+columns.day.trim()).slice(-2)+'T'+columns.hour.trim()+':'+columns.minute.trim()+':'+('0000'+columns.second.trim()).slice(-4)+'+09:00'),
            latitude: columns.latitude.replace(/(\d+)°(\d+).(\d+)'N/, '$1.$2$3'),
            longitude: columns.longitude.replace(/(\d+)°(\d+).(\d+)'E/, '$1.$2$3'),
            depth: columns.depth.trim(),
            magnitude: (columns.magnitude.trim() == '-')?null:columns.magnitude.trim(),
            name: columns.name.trim()
        }
        output.push(json);
    }
    fs.writeFileSync('data/'+targetDay+'.json', JSON.stringify(output, null, "    "));
    console.log('Writed to data/'+targetDay+'.json');
}