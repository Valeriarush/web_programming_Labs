function stockPrice() {
    let date = ['03.04.2023', '04.04.2023', '05.04.2023', '06.04.2023', '07.04.2023',
               '10.04.2023', '11.04.2023', '12.04.2023', '12.04.2023', '13.04.2023', 
               '14.04.2023', '17.04.2023', '18.04.2023', '19.04.2023', '20.04.2023', 
               '21.04.2023', '24.04.2023', '25.04.2023', '26.04.2023', '27.04.2023'];
    let price = [0.7180, 0.7235, 0.7289, 0.7070, 0.7044, 0.7004, 0.7045, 0.6958, 0.7030, 
                0.6982, 0.6898, 0.6945, 0.6931, 0.6903, 0.7042, 0.6970, 0.6936, 0.6992, 0.7038, 0.7004];
    let diff = ['-', (price[0]-price[1]).toFixed(2), (price[1]-price[2]).toFixed(2), (price[2]-price[3]).toFixed(2), 
                (price[3]-price[4]).toFixed(2), (price[4]-price[5]).toFixed(2), (price[5]-price[6]).toFixed(2), 
                (price[6]-price[7]).toFixed(2), (price[7]-price[8]).toFixed(2), (price[8]-price[9]).toFixed(2), 
                (price[9]-price[10]).toFixed(2),(price[10]-price[11]).toFixed(2), (price[11]-price[12]).toFixed(2), 
                (price[12]-price[13]).toFixed(2), (price[13]-price[14]).toFixed(2), (price[14]-price[15]).toFixed(2), 
                (price[15]-price[16]).toFixed(2), (price[16]-price[17]).toFixed(2), (price[17]-price[18]).toFixed(2),
                (price[18]-price[19]).toFixed(2)];
    let table = document.getElementById('stock-price');

    for (let i = 0; i < date.length; i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        td1.innerHTML = date[i];
        td2.innerHTML = price[i];
        td3.innerHTML = diff[i];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);     
    }

    let sum=0;
            let k=0;
            for (let i = 0; i < price.length; i++) {
                sum = sum + price[i];
                k+=1;
            }
            let average = sum / price.length;
            document.getElementById('average-price').innerHTML = '<b>Среднее значение: </b>' + average;

            let max = 0;
            let min = price[0];
            for (let i = 0; i < price.length; i++) {
                if (max<price[i]) {
                    max = price[i];
                }
                else if (min>price[i]) {
                    min = price[i];
                    }
            }
            document.getElementById('min').innerHTML = '<b>Минимальное значение: </b>' + min;
            document.getElementById('max').innerHTML = '<b>Максимальное значение: </b>' + max;
        }