




let numberTime = currentdate.getHours();

if (numberTime <= 3) {
document.getElementById('greetingMessage').innerHTML = "goodnight";    
}else if(numberTime <= 12){
    document.getElementById('greetingMessage').innerHTML = "good morning";    
}else if(numberTime > 12){
    document.getElementById('greetingMessage').innerHTML = "good afternoon";
}
