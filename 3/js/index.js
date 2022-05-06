document.getElementById("p1").onclick = function() {
    document.getElementById("p1").style.color = "red";
    alert("p1");
}

document.getElementById("p2").onclick = function() {
    var date = new Date();
    document.getElementById("h1").innerHTML = date.getFullYear() +
        "-"+ (date.getMonth()+1) + "-" + date.getDate();
    alert("p2");
}

document.getElementById("p3").onclick = function() {
    document.getElementById("p3").classList.add("fn-active");
    alert("p3");
}

document.getElementById("p4").onclick = function() {
    var parent = document.getElementById("ul1");
    var chile = document.getElementById("p8");
    parent.removeChild(p8);
    alert("p4");
}

document.getElementById("p5").onclick = function() {
    window.open("https://www.taobao.com/");
    alert("p5");
}

document.getElementById("p6").onclick = function() {
    var newLi = document.createElement("li");
    var liText = document.createTextNode("p9");
    newLi.appendChild(liText);
    document.getElementById("ul1").appendChild(newLi); 
    alert("p6");
}

document.getElementById("p7").onclick = function() {
    document.getElementById("div1").style.width = document.body.offsetWidth;
    alert("p7");
}

document.getElementById("p8").onclick = function() {
    alert("p8");
}