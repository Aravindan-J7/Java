const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const ses = document.querySelector("#ses")




function digitalClock(){
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var txt = "AM";

    
    minutes.innerHTML = (min<10)?"0"+min:min;
    seconds.innerHTML = (sec<10)?"0"+sec:sec;


    
    if(hrs>12){
        hrs = hrs - 12;
        hours.innerHTML = (hrs<10)?"0"+hrs:hrs;
        ses.innerHTML = "PM"
    }
    else if(hrs==0){
        hrs = 12;
        hours.innerHTML = hrs;
        txt = "AM";
    }
       
    
    

}

setInterval(digitalClock,1000);


