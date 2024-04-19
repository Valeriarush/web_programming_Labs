function showDate() {
    let out = document.getElementById('current-date'); 
    let today = new Date();
    out.innerHTML = 'Дата и время для русской локали: ' +today.toLocaleString('ru-RU')
    + '</br>' + 'Дата и время для локали ЮАР: ' + today.toLocaleString('en-ZA') + 
    +'</br>' + 'Дата и время для локали Египта: ' + today.toLocaleString('ar-EG') + '</br>' 
    + 'Дата и время для греческой локали: ' + today.toLocaleString('el-GR') + '</br>' 
    + 'Дата и время для пакистанской локали: '  + today.toLocaleString('ur-PK') + '</br>'
    + 'Дата и время для китайской локали: ' + today.toLocaleString('zh-CN');
}
