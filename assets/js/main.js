var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");

// Voiture
ctx.fillStyle = "#00AA4B"; // Application du remplissage
ctx.fillRect(120,170,160,50);
ctx.fillRect(80,220,240,60);

// Roues
ctx.beginPath();
ctx.arc(100,310,30,0,Math.PI*2,true);
ctx.strokeStyle = "#369";
ctx.fillStyle="#CDCDCD";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(300,310,30,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
