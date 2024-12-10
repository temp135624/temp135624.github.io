const can = document.getElementById("can");
const ctx = can.getContext("2d");

var vars = [];

function frame() {
    ctx.strokeStyle = "black";
    ctx.lineWidth = "2";
    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(200, 800);
    ctx.lineTo(1700, 800);
    ctx.lineTo(1700, 50);
    ctx.lineTo(200, 50);
    ctx.stroke();
}

frame();

function graphadd() {
    var inp = document.getElementById("graph1var1").value;
    if (Number(inp) < 750 & vars.length < 15) {
        vars.push(Number(inp));
        document.getElementById("vardisp").innerText = vars.join(", ")
    } else {
        alert("Координаты выше 750 не поддерживаются\nМаксимальное количество точек - 15")
    }
    
    document.getElementById("graph1var1").value = "";
}

function graphclear() {
    vars = [];
    document.getElementById("vardisp").innerText = "";
    ctx.clearRect(0, 0, can.width, can.height);
    frame();
}

function graphcalc() {
    ctx.clearRect(0, 0, can.width, can.height);
    frame();
    var startX = 200;
    var startY = 800;
    //for (var i = 0; i < inp.length; i++) {
    //    ch.push(inp[i]);
    //}
    ctx.strokeStyle = "red";
    ctx.lineWidth = "2";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    for (var i = 0; i < vars.length; i++) {
        startX += 100;
        ctx.lineTo(startX, startY - vars[i])
        ctx.fillText(vars[i], startX, startY-vars[i])
        ctx.stroke();
    }
}