if (window.localStorage.theme == null || window.localStorage.theme == "" || window.localStorage.theme == undefined) {
    window.localStorage.theme = "dark"
}
if (window.localStorage.fontname == null || window.localStorage.fontname == "" || window.localStorage.fontname == undefined) {
    window.localStorage.fontname = "poppins"
}
if (window.localStorage["teacherData"] == null || window.localStorage["teacherData"] == "" || window.localStorage["teacherData"] == "[]" || window.localStorage["teacherData"] == undefined) {
    window.localStorage["teacherData"] = JSON.stringify(["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"])
}
if (window.localStorage["periodData"] == null || window.localStorage["periodData"] == "" || window.localStorage["periodData"] == "[]" || window.localStorage["periodData"] == undefined) {
    window.localStorage["periodData"] = JSON.stringify(["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"])
}
var date = new Date(Date.now())
var periodNumber = document.querySelector('#periodNumber')
var periodName = document.querySelector('#prdname')
var teacherName = document.querySelector('#tchrname')
var dayType = document.querySelector('#type')
var dayName = document.querySelector('#day')
var day = ""
function timeCheck(startTime, endTime) {
    var dt = date;

    var s =  startTime.split(':');
    var dt1 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(),
                    parseInt(s[0]), parseInt(s[1]), parseInt(s[2]));

    var e =  endTime.split(':');
    var dt2 = new Date(dt.getFullYear(), dt.getMonth(),
                    dt.getDate(),parseInt(e[0]), parseInt(e[1]), parseInt(e[2]));

    if (dt >= dt1 && dt <= dt2){
        return true;
    }else {
        return false;
    }
}
setInterval(function() {
    date = new Date(Date.now())
    setup()
},500)
setInterval(() => {
    date = new Date(Date.now())
    document.querySelector('#hour').textContent = date.getHours()>12?date.getHours()-12:date.getHours()
    document.querySelector('#cmin').textContent = date.getMinutes()

    document.querySelector('#month').textContent = date.getMonth()
    document.querySelector('#day2').textContent = date.getDate()
    document.querySelector('#year').textContent = date.getFullYear()
}, 100);
var timeAgo = (date) => {
    var xx = new Date(Date.now())
    xx.setDate(23)
    xx.setFullYear(2023)
    xx.setMonth(7)
    var ms = xx.getTime() - date.getTime();
    var seconds = Math.floor(ms / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    return minutes;
}

function settime(t1, t2) {
    var startTime = new Date(`2023/08/23 ${t1}`); 
    var endTime = new Date(`2023/08/23 ${t2}`);
    var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
    var resultInMinutes = Math.round(difference / 60000);

    var numb = timeAgo(startTime);
    document.querySelector("#mins").textContent = "in " +(resultInMinutes-numb)+"m"

    document.querySelector("#minsdone").textContent = "" + (timeAgo(startTime)) + "m ago"
}
function setup() {
    if(day == "home") {
        periodNumber.textContent = "Home"
        periodName.textContent = "Your House"
        teacherName.textContent = "You"
        document.querySelector("#mins").textContent = "in the future"
        document.querySelector("#minsdone").textContent = "a bit ago"
        return
    }
    if(day == "odd") {
        if(timeCheck("08:00:00", "09:45:00")) {
            periodNumber.textContent = "1"
            periodName.textContent = JSON.parse(window.localStorage["periodData"])[0]
            teacherName.textContent = JSON.parse(window.localStorage["teacherData"])[0]
            settime("08:00:00", "09:45:00")
            return
        }
        else if(timeCheck("10:05:00", "11:45:00")) {
            periodNumber.textContent = "3"
            periodName.textContent = JSON.parse(window.localStorage["periodData"])[2]
            teacherName.textContent = JSON.parse(window.localStorage["teacherData"])[2]
            settime("10:05:00", "11:45:00")
            return
        }
        else if(timeCheck("11:45:00", "12:20:00")) {
            periodNumber.textContent = "none"
            periodName.textContent = "lunch/homeroom A"
            teacherName.textContent = JSON.parse(window.localStorage["teacherData"])[6]+"/Lunch"
            settime("12:20:00")
            return
        }
        else if(timeCheck("12:20:0", "12:55:00")) {
            periodNumber.textContent = "none"
            periodName.textContent = "lunch/homeroom B"
            teacherName.textContent = JSON.parse(window.localStorage["teacherData"])[6]+"/Lunch"
            settime("12:20:0", "12:55:00")
            return
        }
        else if(timeCheck("13:00:00", "014:40:00")) {
            periodNumber.textContent = "5"
            periodName.textContent = JSON.parse(window.localStorage["periodData"])[4]
            teacherName.textContent = JSON.parse(window.localStorage["teacherData"])[4]
            settime("13:00:00", "014:40:00")
            return
        } else {
            periodNumber.textContent = "None"
            periodName.textContent = "none"
            teacherName.textContent = "None"
            document.querySelector("#mins").textContent = "in the future"
            document.querySelector("#minsdone").textContent = "a bit ago"
            return
        }
    }

    if(day == "even") {
        if(timeCheck("08:00:00", "09:45:00")) {
            periodNumber.textContent = "2"
            periodName.textContent = JSON.parse(window.localStorage["periodData"])[1]
            teacherName.textContent = JSON.parse(window.localStorage["teacherData"])[1]
            settime("08:00:00", "09:45:00")
            return
        }
        else if(timeCheck("10:05:00", "11:45:00")) {
            periodNumber.textContent = "4"
            periodName.textContent = JSON.parse(window.localStorage["periodData"])[3]
            teacherName.textContent = JSON.parse(window.localStorage["teacherData"])[3]
            settime("10:05:00", "11:45:00")
            return
        }
        else if(timeCheck("11:45:00", "12:20:00")) {
            periodNumber.textContent = "none"
            periodName.textContent = "lunch/homeroom A"
            teacherName.textContent = JSON.parse(window.localStorage["teacherData"])[6]+"/Lunch"
            settime("11:45:00", "12:20:00")
            return
        }
        else if(timeCheck("12:20:0", "12:55:00")) {
            periodNumber.textContent = "none"
            periodName.textContent = "lunch/homeroom B"
            teacherName.textContent = JSON.parse(window.localStorage["teacherData"])[6]+"/Lunch"
            settime("12:20:0", "12:55:00")
            return
        }
        else if(timeCheck("13:00:00", "014:40:00")) {
            periodNumber.textContent = "6"
            periodName.textContent = JSON.parse(window.localStorage["periodData"])[5]
            teacherName.textContent = JSON.parse(window.localStorage["teacherData"])[5]
            settime("13:00:00", "014:40:00")
            return
        } else {
            periodNumber.textContent = "None"
            periodName.textContent = "none"
            teacherName.textContent = "None"
            document.querySelector("#mins").textContent = "in the future"
            document.querySelector("#minsdone").textContent = "a bit ago"
            return
        }
    }

    
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.body.className = window.localStorage.theme + " " + window.localStorage.fontname
    if (date.getDay() == 0) {
        dayName.textContent = "sunday"
        dayType.textContent = "home"
        day = "home"
    }
    if (date.getDay() == 1) {
        dayName.textContent = "monday"
        dayType.textContent = "all"
        day = "all"
    }
    if (date.getDay() == 2) {
        dayName.textContent = "tuesday"
        dayType.textContent = "odd"
        day = "odd"
    }
    if (date.getDay() == 3) {
        dayName.textContent = "wednesday"
        dayType.textContent = "even"
        day = "even"
    }
    if (date.getDay() == 4) {
        dayName.textContent = "thursday"
        dayType.textContent = "odd"
        day = "odd"
    }
    if (date.getDay() == 5) {
        dayName.textContent = "friday"
        dayType.textContent = "even"
        day = "even"
    }
    if (date.getDay() == 6) {
        dayName.textContent = "saturday"
        dayType.textContent = "home"
        day = "home"
    }
    setup()
})