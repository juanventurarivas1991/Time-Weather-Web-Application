let currentdate = new Date(); 
let date = "Date: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() ;

let time = "Time: " + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

let numberTime = currentdate.getHours();

document.getElementById('date').innerHTML = date;

document.getElementById('time').innerHTML = time;


    if (numberTime <= 3) {
    document.getElementById('greetingMessage').innerHTML = "goodnight";    
    }else if(numberTime <= 12){
        document.getElementById('greetingMessage').innerHTML = "good morning";    
    }else if(numberTime > 12){
        document.getElementById('greetingMessage').innerHTML = "good afternoon";
    }

function refresh(){
    location.reload();   
}
