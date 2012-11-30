var boxx = 20;
var boxy = 30;
var boxwidth = 250;
var boxheight = 150;
// var ballrad = 10;
var ballrad = 20;
var boxboundx = boxwidth + boxx - ballrad;
var boxboundy = boxheight + boxy - ballrad;
var inboxboundx = boxx + ballrad;
var inboxboundy = boxy + ballrad;
var ballx = 50;
var bally = 60;
var cxt;
var ballvx = 4;
var ballvy = 8;

var img = new Image();
img.src="p.jpg";
var grad;
var color;
var hue=[
[255,0,0],
[255,255,0],
[0,255,0],
[0,255,255],
[0,0,255],
[255,0,255],
];

function init() {
	var h;
	cxt = document.getElementById("canvas").getContext('2d');
	grad = cxt.createLinearGradient(boxx,boxy,boxx+boxwidth,boxy+boxheight);
	for (var h=0; h < hue.length; h++) {
	  color = 'rgb('+hue[h][0]+','+hue[h][1]+','+hue[h][2]+')';
	  grad.addColorStop(h*1/6,color);
	};
	cxt.linewidth = ballrad;
	cxt.fillStyle = grad;
	moveball();
	setInterval("moveball();", 100);
}

function moveball() {
	cxt.clearRect(boxx, boxy, boxwidth, boxheight);
	moveandcheck();
	cxt.drawImage(img,ballx-ballrad,bally-ballrad,2*ballrad,2*ballrad);
	cxt.fillRect(boxx,boxy,ballrad,boxheight);
	cxt.fillRect(boxx+boxwidth-ballrad,boxy,ballrad,boxheight);
	cxt.fillRect(boxx,boxy,boxwidth,ballrad);
	cxt.fillRect(boxx,boxy+boxheight-ballrad,boxwidth,ballrad);
	// cxt.beginPath();
	// cxt.arc(ballx, bally, ballrad, 0, Math.PI * 2, true);
	// cxt.closePath();
	// cxt.fill();
	// cxt.strokeRect(boxx, boxy, boxwidth, boxheight);
}

function moveandcheck() {
	var nballx = ballx + ballvx;
	var nbally = bally + ballvy;
	if (nballx > boxboundx) {
		ballvx = -ballvx;
		nballx = boxboundx;
	};
	if (nballx < inboxboundx) {
		nballx = inboxboundx;
		ballvx = -ballvx;
	};
	if (nbally > boxboundy) {
		nbally = boxboundy;
		ballvy = -ballvy;
	};
	if (nbally < inboxboundy) {
		nbally = inboxboundy;
		ballvy = -ballvy;
	};
	ballx = nballx;
	bally = nbally;
}

function change() {
	ballx = Number(f.hv.value);
	bally = Number(f.vv.value);
	return false;
}
