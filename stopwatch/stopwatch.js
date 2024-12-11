let [hours,minutes,seconds]=[0,0,0];
let displaytime=document.querySelector(".h1");
let intervalid;



function watch(){
    seconds+=1
    if (seconds==60) {
        seconds=0
        minutes+=1
    }
   
    if(minutes==60){
        minutes=0
        hours+=1
    }

    let s=seconds<10?"0"+seconds:seconds
    let m=minutes<10?"0"+minutes:minutes
    let h=hours<10?"0"+hours:hours
   

    displaytime.innerHTML=h+":"+m+":"+s
}
function startwatch(){
    intervalid=setInterval(watch,1000)
}

function stopwatch(){
    clearInterval(intervalid)
    // intervalid=null;
}

function reset(){
    clearInterval(intervalid)
    displaytime.innerHTML="00:00:00"
}
