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

function showDaysCount() { let today = new Date(); 
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value); let count = document.getElementById('count-days'); 
    let daysCount = (today - birthday)/1000/60/60/24; 
    daysCount = Math.floor(daysCount); 
    count.innerHTML = 'Количество дней с даты рождения: ' + daysCount;
}

function showTime(){
    let today=new Date();
    let currentTime=today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML=currentTime;
}
setInterval(showTime,1000);
