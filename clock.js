const month = [ 
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function betterMinutes(d) {
    return (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
};

function clocc(){
    var d = new Date();
    var m = month[d.getMonth()];
    var dHour24 = d.getHours();
    var dHour12 = dHour24;
    var dMeridiem = "AM";

    if(dHour24 >= 12) {
        dHour12 = dHour24 -12;
        dMeridiem = "PM";
    };
    
    document.querySelector("#dt").innerHTML = m + " " +d.getDate()+" "+(d.getFullYear());
    document.querySelector("#dis").innerHTML = `${dHour12}:${betterMinutes(d)}:${d.getSeconds()}:${d.getMilliseconds(d)} ${dMeridiem}`;



};

function button() {
      if(document.querySelector("#container").style.borderColor === "white") { 
        document.querySelector("#container").style.borderColor = "#00FF01";
        document.querySelector("#container").style.color = "#00FF01";
        document.querySelector("#yeet").style.color = "#00FF01";
      }
      else {
        document.querySelector("#container").style.borderColor = "white";
        document.querySelector("#container").style.color = "white";
        document.querySelector("#yeet").style.color = "white";
      }
}   
    var interval = setInterval(function(){clocc()}, 17);