//function that display time in milliseconds


function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var sessions = document.getElementById('sessions');

    //The if conditional statement 

    if(hrs >= 12){
        sessions.innerHTML = 'PM';
    } else{
        sessions.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    //Getting the element by id from the html file

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 10);