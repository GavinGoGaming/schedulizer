if (window.localStorage["periodData"] == null || window.localStorage["periodData"] == "" || window.localStorage["periodData"] == "[]" || window.localStorage["periodData"] == undefined) {
    window.localStorage["periodData"] = JSON.stringify(["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"])
}
if (window.localStorage["teacherData"] == null || window.localStorage["teacherData"] == "" || window.localStorage["teacherData"] == "[]" || window.localStorage["teacherData"] == undefined) {
    window.localStorage["teacherData"] = JSON.stringify(["Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"])
}
var sprd = document.querySelector('#saveprd')
sprd.addEventListener('click', function(ev) {
    var per1config = document.querySelector('#p1c')
    var per2config = document.querySelector('#p2c')
    var per3config = document.querySelector('#p3c')
    var per4config = document.querySelector('#p4c')
    var per5config = document.querySelector('#p5c')
    var per6config = document.querySelector('#p6c')

    var newp1v = per1config.value||JSON.parse(window.localStorage["periodData"])[0]||"Unknown"
    var newp2v = per2config.value||JSON.parse(window.localStorage["periodData"])[1]||"Unknown"
    var newp3v = per3config.value||JSON.parse(window.localStorage["periodData"])[2]||"Unknown"
    var newp4v = per4config.value||JSON.parse(window.localStorage["periodData"])[3]||"Unknown"
    var newp5v = per5config.value||JSON.parse(window.localStorage["periodData"])[4]||"Unknown"
    var newp6v = per6config.value||JSON.parse(window.localStorage["periodData"])[5]||"Unknown"

    per1config.placeholder = per1config.value||JSON.parse(window.localStorage["periodData"])[0]||"Unknown"
    per2config.placeholder = per2config.value||JSON.parse(window.localStorage["periodData"])[1]||"Unknown"
    per3config.placeholder = per3config.value||JSON.parse(window.localStorage["periodData"])[2]||"Unknown"
    per4config.placeholder = per4config.value||JSON.parse(window.localStorage["periodData"])[3]||"Unknown"
    per5config.placeholder = per5config.value||JSON.parse(window.localStorage["periodData"])[4]||"Unknown"
    per6config.placeholder = per6config.value||JSON.parse(window.localStorage["periodData"])[5]||"Unknown"
    per1config.value = ""
    per2config.value = ""
    per3config.value = ""
    per4config.value = ""
    per5config.value = ""
    per6config.value = ""
    window.localStorage.setItem("periodData", JSON.stringify([newp1v,newp2v,newp3v,newp4v,newp5v,newp6v]))
})
document.addEventListener('DOMContentLoaded', function(ev){
    var per1config = document.querySelector('#p1c')
    var per2config = document.querySelector('#p2c')
    var per3config = document.querySelector('#p3c')
    var per4config = document.querySelector('#p4c')
    var per5config = document.querySelector('#p5c')
    var per6config = document.querySelector('#p6c')
    per1config.placeholder = JSON.parse(window.localStorage["periodData"])[0]
    per2config.placeholder = JSON.parse(window.localStorage["periodData"])[1]
    per3config.placeholder = JSON.parse(window.localStorage["periodData"])[2]
    per4config.placeholder = JSON.parse(window.localStorage["periodData"])[3]
    per5config.placeholder = JSON.parse(window.localStorage["periodData"])[4]
    per6config.placeholder = JSON.parse(window.localStorage["periodData"])[5]
})