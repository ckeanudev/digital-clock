function showTime() {
            
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    h = (h == 0) ? 12:h;

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s: s;

    document.getElementById("dgHour").innerHTML = h + "h";
    document.getElementById("dgMin").innerHTML = m + "m";
    document.getElementById("dgSec").innerHTML = s + "s";
    document.getElementById("dgSession").innerHTML = session;

    setTimeout(showTime, 1000);
}

showTime();


