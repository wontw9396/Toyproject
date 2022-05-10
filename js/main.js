fetch("./reference/bank.json")
.then(function(response) {
    return response.json();
})


.then(jsondata =>{ 
    const bankList = jsondata.bankList;     // jsondata에서 불러오는 banklist를 그냥 banklist로 변수명 설정
    const today = new Date("2021-09-01");
    let todayNum = 0;
    let agoNum = 0;

    for (let i = 0; i < bankList.length; i++) {     // for문을 통해 bankList안에 있는 배열의 수가 늘어남을 체크 
        if(Number(bankList[i].date.split('-')[2]) === today.getDate()){
            //recent_name이라는 class에 innerHTML을 사용하여 bankList history데이터를 보여줌
            document.querySelectorAll('.recent_day .recent_name')[todayNum].innerHTML = bankList[i].history
            //recent_price라는 class에 innerHTML을 사용하여 bankList price 데이터를 보여줌
            //toLocaleString(); 숫자가 천단위가 넘어가면 ,를 붙여서 보여줌 1000 => 1,000
            document.querySelectorAll('.recent_day .recent_price')[todayNum].innerHTML = bankList[i].price.toLocaleString();

            todayNum = todayNum + 1
            
            console.log('오늘')
        } else { 
            document.querySelectorAll('.recent_day_ago .recent_name')[agoNum].innerHTML = bankList[i].history  
            document.querySelectorAll('.recent_day_ago .recent_price')[agoNum].innerHTML = bankList[i].price.toLocaleString();

            agoNum = agoNum + 1

            console.log('어제')
        }
        console.log('-------------')
        
    }
    
})

