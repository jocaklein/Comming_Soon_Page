var release_date = new Date("Oct 14, 2022 16:54:00").getTime();

var intervals = setInterval(function(){
    var now = new Date().getTime();
    var distance = now - release_date;
    distance = distance * -1;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance <= 0){
        console.log("It´s time");
    }
}, 500);





